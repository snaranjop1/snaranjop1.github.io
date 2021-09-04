/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-react-helmet"],
  siteMetadata: {
    job: "Frontend Developer",
    company: "Appspring Technologies",
    companyUrl: "https://www.appspringtech.com/",
    projects: [
      {
        id: 1,
        img:
          "https://cdn.dribbble.com/users/1418924/screenshots/15752874/media/cfb98399f55c662036fdd99f5846e541.png",
        name: "Storeforce",
        techStack: "React JS • Tailwind CSS • Firebase (Backend & Hosting)",
        desc:
          "This app allows the user to easily keep track of their inventory, manage it and have their own catalogue of selling items.",
        link: "https://github.com/snaranjop1",
        link2: "https://github.com/snaranjop1",
      },
      {
        id: 2,
        img:
          "https://cdn.dribbble.com/users/427857/screenshots/16046801/media/0dbc4598da0cd0fc5b8ae9c584148c81.png?compress=1&resize=1600x1200",
        name: "BitCloud",
        techStack: "React • API • SEO • Accesibility • Performance",
        desc:
          "Bitcloud consumes a cryptocurrency API to show data about digital coins and also is a website that scores 100% across all categories on the Chrome Lighthouse audit report.",
        link: "https://github.com/snaranjop1",
        link2: "https://github.com/snaranjop1",
      },
      {
        id: 3,
        img:
          "https://cdn.dribbble.com/users/5087733/screenshots/15442587/media/b192db2f37e3f16a4d247014d2bdfe59.png?compress=1&resize=1600x1200",
        name: "Devfinder",
        techStack: "React • Node JS • Github API",
        desc:
          "Ultrasoccer is a website that makes visualizations over the FiftyThirtyEight soccer match predictions data.",
        link: "https://github.com/snaranjop1",
        link2: "https://github.com/snaranjop1",
      },
      {
        id: 4,
        img: "./findipy.png",
        name: "Findipy",
        techStack:
          "React • Bootstrap • Mapboxgl • IP Geolocation API • Vercel (Deployment)",
        desc:
          "With this website any user can track down the geolocation of an IP address or domain name. It fetches the data of the given IP from IPify and then shows the data on a map made with Mapboxgl.",
        link: "https://github.com/snaranjop1/findipy",
        link2: "https://findipy.vercel.app/",
      },
    ],
  },
}