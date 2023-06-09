// When serving on GitHub Pages project site, the site will be served on a subpath and not the root.
// This is set here and then used as a prefix for all URLs.
const PROJECT_TITLE = 'SPA-Portfolio';

export function u(url) {
  return `/${PROJECT_TITLE}${url}`;
}
