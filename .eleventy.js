module.exports = function (eleventyConfig) {
  // Output directory: _site
  eleventyConfig.addWatchTarget("tailwind.config.js");
  eleventyConfig.addWatchTarget("assets/styles/tailwind.css");
  // Copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy({ "./_tmp/style.css": "./style.css" });

  eleventyConfig.addPassthroughCopy("assets/img");
};
