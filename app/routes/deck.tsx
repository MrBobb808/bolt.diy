/*
 * Resource route that serves the standalone "Is The Bible Reliable?" deck.
 * Cloudflare Pages routes every path through the Remix worker
 * (functions/[[path]].ts), which renders a 404 for a static file dropped in
 * /public. Serving the HTML from a route guarantees the worker returns the
 * deck at /deck.
 */
import deckHtml from '~/decks/bible-study-day1-deck.html?raw';

export const loader = () =>
  new Response(deckHtml, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
