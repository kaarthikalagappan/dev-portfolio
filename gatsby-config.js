/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    // {
    //   resolve: `gatsby-plugin-google-fonts-v2`,
    //   options: {
    //     fonts: [
    //       {
    //         family: 'Montserrat',
    //         variable: true,
    //         weights: ['200..900']
    //       },
    //       {
    //         family: 'Montserrat Alternates',
    //         variable: true,
    //         weights: ['200..900']
    //       },
    //       {
    //         family: 'Roboto',
    //         variable: true,
    //         weights: ['300..700']
    //       }
    //     ]
    //   }
    // }
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`]
          },
          {
            family: `Montserrat Alternates`,
            variants: [`200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`]
          },
          {
            family: `Roboto`,
            subsets: [`latin`],
            variants: [`300`, `400`, `500`, `700`]
          },
          {
            family: `Crimson Text`,
            variants: [`400`, `400i`]
          },
          {
            family: `Domine`,
            variants: [`400`, `700`]
          },
          {
            family: `Lora`,
            variants: [`300`, `400`, `500`, `700`]
          },
        ],
      },
    }
  ]
}
