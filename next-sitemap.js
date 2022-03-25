const siteUrl = 'https://www.gophoenixmoving.com';

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      //   { userAgent: "*", disallow: "/secret" },
      { userAgent: '*', allow: '/' },
    ],
    additionalSitemaps: [`${siteUrl}/server-sitemap.xml`],
  },
  //   exclude: ["/secret"],
};
