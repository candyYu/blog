module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // 部署到 username.github.io/仓库名 时设置，如 /blog
  const pathPrefix = process.env.PATH_PREFIX || "";
  eleventyConfig.addGlobalData("baseUrl", pathPrefix);

  // 文章集合：按日期倒序（glob 相对于项目根目录）
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md").reverse();
  });

  // 日期格式：YYYY-MM-DD
  eleventyConfig.addFilter("dateFmt", function (date) {
    return date ? new Date(date).toISOString().slice(0, 10) : "";
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
    pathPrefix: pathPrefix,
  };
};
