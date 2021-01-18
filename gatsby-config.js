/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Kaarthik Alagappan",
    description:
      "A profile website for Kaarthik Alagappan",
    url: "https://kaarthikalagappan.dev"
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat\:200,300,400,500,600,700,800,900`,
          `Montserrat Alternates\:200,300,400,500,600,700,800,900`,
          `Roboto\:300,400,500,700`,
          `Crimson Text\:400,400i`,
          `Domine\:400,700`,
          `Lora\:300,400,500,700`,
          `VT323\:400`,
          `Share Tech Mono\:400`
        ],
      },
    }
  ],
}
