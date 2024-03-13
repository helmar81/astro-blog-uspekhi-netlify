import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BPM5qWuH.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_CRtj569v.mjs');
const _page1 = () => import('./chunks/about_D-kYz8IA.mjs');
const _page2 = () => import('./chunks/index_CUFptwsh.mjs');
const _page3 = () => import('./chunks/_.._BCURqPAM.mjs');
const _page4 = () => import('./chunks/contact_DdndYBZ7.mjs');
const _page5 = () => import('./chunks/portfolio_Dlj_V0Y-.mjs');
const _page6 = () => import('./chunks/rss_DLdP7uzh.mjs');
const _page7 = () => import('./chunks/index_KwCK4aFl.mjs');
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
    "middlewareSecret": "258a3196-3b2a-42b1-9f8e-cdd2c1968e86"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
