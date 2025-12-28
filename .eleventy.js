module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/img");

  // Configure Liquid to output HTML unescaped
  eleventyConfig.setLiquidOptions({
    jsTruthy: true,
  });

  // Allow HTML to pass through unescaped
  eleventyConfig.addFilter("safe", function (value) {
    return value;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
  };
};
