module.exports = (eleventyConfig, options) => {
  let mermaid_config = {...options?.mermaid_config || {}, ...{loadOnSave: true}};
  let src = options?.mermaid_js_src || "https://unpkg.com/mermaid/dist/mermaid.esm.min.mjs";

  eleventyConfig.addLiquidShortcode("mermaid_js_scripts", () => {
    return `<script type="module" async>
              import mermaid from "${src}";
              const config = ${JSON.stringify(mermaid_config)};
              config.theme = isDarkMode() ? 'dark' : 'default';
              mermaid.initialize(config);
              await mermaid.run({
                querySelector: '.mermaid',
                postRenderCallback: (id) => {
                  if (afterMermaidRenderCallback != undefined)
                  {
                    afterMermaidRenderCallback();
                  }
                }
              });
            </script>`
  });
  return {}
};