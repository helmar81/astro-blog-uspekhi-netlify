const id = "analytics.mdx";
						const collection = "blog";
						const slug = "analytics";
						const body = "\nGoogle Analytics is a free web analytics service offered by Google that tracks and reports website traffic. It is a powerful tool that can help you understand your website's traffic, user behavior, and conversions. With Google Analytics, you can track a wide range of metrics, including pageviews, bounce rate, time on site, and conversions. You can also use it to segment your traffic and understand how different groups of users interact with your site.\n\nTo use Google Analytics on your blog, you will need to create a Google Analytics account and add the tracking code to your website. This code should be placed in the header of every page that you want to track. You can then use the Google Analytics dashboard to view real-time data and track the performance of your blog over time.\n\nThere are many resources available to help you get started with Google Analytics and understand how to use it effectively. The Google Analytics Help Center is a great place to start, and there are also many online tutorials and courses that can teach you more about using this powerful tool to improve your website's performance.\n\nInstall the Google tag manuallyBelow is the Google tag for this account. Copy and paste it in the code of every page of your website, immediately after the head element. Don’t add more than one Google tag to each page.\n\n```\n<!-- Google tag (gtag.js) -->\n<script async src=\"https://www.googletagmanager.com/gtag/js?id=G-YOUR-TAG\"></script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'G-YOUR-TAG');\n</script>\n```\n";
						const data = {title:"Google Analytics",description:"Lorem ipsum dolor sit amet",pubDate:new Date(1656712800000),heroImage:"/souad.webp"};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/User/Documents/astro-blog-latest/src/content/blog/analytics.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
