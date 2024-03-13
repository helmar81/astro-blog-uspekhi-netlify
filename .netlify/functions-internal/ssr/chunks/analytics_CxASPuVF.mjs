import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_DzfhlQC2.mjs';
import { $ as $$Image } from './pages/generic_BE0CBwm8.mjs';
import 'clsx';

const frontmatter = {
  "title": "Google Analytics",
  "description": "Lorem ipsum dolor sit amet",
  "pubDate": "Jul 02 2022",
  "heroImage": "/souad.webp"
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    code: "code",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Google Analytics is a free web analytics service offered by Google that tracks and reports website traffic. It is a powerful tool that can help you understand your website\u2019s traffic, user behavior, and conversions. With Google Analytics, you can track a wide range of metrics, including pageviews, bounce rate, time on site, and conversions. You can also use it to segment your traffic and understand how different groups of users interact with your site."
    }), "\n", createVNode(_components.p, {
      children: "To use Google Analytics on your blog, you will need to create a Google Analytics account and add the tracking code to your website. This code should be placed in the header of every page that you want to track. You can then use the Google Analytics dashboard to view real-time data and track the performance of your blog over time."
    }), "\n", createVNode(_components.p, {
      children: "There are many resources available to help you get started with Google Analytics and understand how to use it effectively. The Google Analytics Help Center is a great place to start, and there are also many online tutorials and courses that can teach you more about using this powerful tool to improve your website\u2019s performance."
    }), "\n", createVNode(_components.p, {
      children: "Install the Google tag manuallyBelow is the Google tag for this account. Copy and paste it in the code of every page of your website, immediately after the head element. Don\u2019t add more than one Google tag to each page."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "<!-- Google tag (gtag.js) -->"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: '<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR-TAG"><\/script>'
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "<script>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  window.dataLayer = window.dataLayer || [];"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  function gtag(){dataLayer.push(arguments);}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  gtag('js', new Date());"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  gtag('config', 'G-YOUR-TAG');"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "<\/script>"
          })
        })]
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/blog/analytics.mdx";
const file = "C:/Users/User/Documents/astro-blog-latest/src/content/blog/analytics.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/User/Documents/astro-blog-latest/src/content/blog/analytics.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
