module.exports = (eleventyConfig, options) => {
  let mermaid_config = {
    startOnLoad: false,
    theme: 'default',
    loadOnSave: true
  };
  let src = options?.mermaid_js_src || "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs";

  eleventyConfig.addLiquidShortcode("mermaid_js_scripts", () => {
    return `<script type="module" async>
              import mermaid from "${src}";
              const config = ${JSON.stringify(mermaid_config)};
              config.theme = isDarkMode() ? 'dark' : 'default';
              mermaid.initialize(config);
              await mermaid.run({
                querySelector: '.mermaid',
                postRenderCallback: (id) => {
                  if (typeof afterMermaidRenderCallback === "function")
                  {
                    afterMermaidRenderCallback();
                  }
                }
              });
            </script>`
  });
  return {}
};