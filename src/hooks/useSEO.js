import { useEffect } from 'react';

const SITE_NAME = 'PyPath';
const SITE_URL = 'https://www.py-path.com';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

/**
 * Updates <title>, meta description, canonical, Open Graph, and Twitter Card
 * tags on every page navigation. All values fall back to site-level defaults.
 *
 * @param {object} options
 * @param {string} options.title        - Page title (without " | PyPath" suffix)
 * @param {string} options.description  - Meta description (≤160 chars recommended)
 * @param {string} [options.path]       - Canonical path, e.g. "/curriculum"
 * @param {string} [options.image]      - Absolute URL to OG image
 * @param {string} [options.type]       - OG type: "website" | "article"
 * @param {string[]} [options.keywords] - Extra keywords appended to base set
 */
export function useSEO({
  title,
  description,
  path = '',
  image = DEFAULT_IMAGE,
  type = 'website',
  keywords = [],
} = {}) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Master Python`;
    const canonicalURL = `${SITE_URL}${path}`;
    const baseKeywords = [
      'Python tutorial', 'learn Python', 'Python programming', 'Python course',
      'Python for beginners', 'Python advanced', 'Python interview questions',
      'Python curriculum', 'free Python learning',
    ];
    const allKeywords = [...baseKeywords, ...keywords].join(', ');

    // ── Title ──────────────────────────────────────────────────────────────
    document.title = fullTitle;

    // ── Helper ─────────────────────────────────────────────────────────────
    const setMeta = (selector, content) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        const attr = selector.match(/\[([^=]+)=/)?.[1];
        const val  = selector.match(/="([^"]+)"/)?.[1];
        if (attr && val) el.setAttribute(attr, val);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // ── Standard meta ──────────────────────────────────────────────────────
    setMeta('meta[name="description"]', description);
    setMeta('meta[name="keywords"]',    allKeywords);
    setMeta('meta[name="robots"]',      'index, follow');
    setLink('canonical', canonicalURL);

    // ── Open Graph ─────────────────────────────────────────────────────────
    setMeta('meta[property="og:title"]',       fullTitle);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]',         canonicalURL);
    setMeta('meta[property="og:type"]',        type);
    setMeta('meta[property="og:image"]',       image);
    setMeta('meta[property="og:image:width"]', '1200');
    setMeta('meta[property="og:image:height"]','630');
    setMeta('meta[property="og:site_name"]',   SITE_NAME);
    setMeta('meta[property="og:locale"]',      'en_US');

    // ── Twitter Card ───────────────────────────────────────────────────────
    setMeta('meta[name="twitter:card"]',        'summary_large_image');
    setMeta('meta[name="twitter:title"]',       fullTitle);
    setMeta('meta[name="twitter:description"]', description);
    setMeta('meta[name="twitter:image"]',       image);
    setMeta('meta[name="twitter:site"]',        '@pypath_dev');

  }, [title, description, path, image, type, keywords]);
}
