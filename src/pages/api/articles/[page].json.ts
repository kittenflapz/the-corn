// Paginated JSON endpoint for client-side infinite scroll on the homepage.
// Pre-rendered at build time via getStaticPaths — no SSR/Worker needed.
//
// Returns: { articles: [...], nextPage: number|null }
// Page sizes are kept small (PAGE_SIZE) so each scroll-load is one paint.
//
// IMPORTANT: this endpoint excludes drafts and the currently-featured article
// (the featured one is already rendered as the hero on the homepage).
// Sort order matches index.astro: pubDate descending.

import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";

const PAGE_SIZE = 4;

interface CardJSON {
  id: string;
  href: string;
  title: string;
  deck?: string;
  category: string;
  byline: string;
  pubDateISO: string;
  dateStr: string;
}

function toCard(article: Awaited<ReturnType<typeof getCollection>>[number]): CardJSON {
  const { title, deck, category, byline, pubDate } = article.data as {
    title: string;
    deck?: string;
    category: string;
    byline: string;
    pubDate: Date;
  };
  return {
    id: article.id,
    href: `/articles/${article.id}/`,
    title,
    deck,
    category,
    byline,
    pubDateISO: pubDate.toISOString(),
    dateStr: pubDate.toLocaleDateString("en-CA", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const all = (await getCollection("articles", ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime(),
  );

  // Exclude the featured article (hero on homepage) so it isn't double-rendered.
  // Mirrors the slicing in index.astro: featured first (if any), else most recent.
  const featured = all.find((a) => a.data.featured) ?? all[0];
  const rest = all.filter((a) => a.id !== featured?.id);

  // The homepage SSG already paints the first PAGE_SIZE items as the grid.
  // Pages start at 2 — page 1 is the initial paint.
  const remainder = rest.slice(PAGE_SIZE);
  const totalPages = Math.ceil(remainder.length / PAGE_SIZE);

  return Array.from({ length: totalPages }, (_, i) => {
    const page = i + 2;
    const start = i * PAGE_SIZE;
    const slice = remainder.slice(start, start + PAGE_SIZE);
    const nextPage = i + 1 < totalPages ? page + 1 : null;
    return {
      params: { page: String(page) },
      props: { articles: slice.map(toCard), nextPage },
    };
  });
};

export const GET: APIRoute = ({ props }) => {
  return new Response(
    JSON.stringify({
      articles: (props as { articles: CardJSON[] }).articles,
      nextPage: (props as { nextPage: number | null }).nextPage,
    }),
    {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "public, max-age=60, must-revalidate",
      },
    },
  );
};
