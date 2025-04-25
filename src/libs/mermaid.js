module.exports = (eleventyConfig, options) => {
  let mermaid_config = {
    startOnLoad: false,
    theme: "default",
    loadOnSave: true
  };
  let src = options?.mermaid_js_src || "https://cdn.jsdelivr.net/npm/mermaid@10.6.0/dist/mermaid.esm.min.mjs";

  eleventyConfig.addLiquidShortcode("mermaid_js_scripts", () => {
    return `<script>
              /* fix mermaid not loading in Safari14 since 10.5.0-alpha.1 */
              // https://caniuse.com/?search=structuredClone
              if (!window.structuredClone) {
                window.structuredClone = function structuredClone(obj) {
                  return JSON.parse(JSON.stringify(obj))
                }
              }
              // https://caniuse.com/?search=hasown
              if (!Object.hasOwn) {
                Object.hasOwn = function hasOwn(o, k) {
                  return Object.prototype.hasOwnProperty.call(o, k)
                }
              }
            </script>
            <script type="module" async>
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
            </script>`;
  });
  return {};
};