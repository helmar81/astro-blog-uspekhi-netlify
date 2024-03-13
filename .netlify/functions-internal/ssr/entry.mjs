import { renderers } from './renderers.mjs';
import { manifest } from './manifest_D-1c0zRD.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_DpIAxKYG.mjs');
const _page1 = () => import('./chunks/about_DWcIuet_.mjs');
const _page2 = () => import('./chunks/index_CnIXNHDj.mjs');
const _page3 = () => import('./chunks/_.._Ci0z5mpg.mjs');
const _page4 = () => import('./chunks/contact_CSaImCTx.mjs');
const _page5 = () => import('./chunks/portfolio_DFe_Z-WZ.mjs');
const _page6 = () => import('./chunks/rss_BTr6oW8p.mjs');
const _page7 = () => import('./chunks/index_DpjGu9-y.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/blog/index.astro", _page2],
    ["src/pages/blog/[...slug].astro", _page3],
    ["src/pages/contact.astro", _page4],
    ["src/pages/portfolio.astro", _page5],
    ["src/pages/rss.xml.js", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "b118aa8a-0481-4cf4-8bbf-ff8a4156c2e2"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
