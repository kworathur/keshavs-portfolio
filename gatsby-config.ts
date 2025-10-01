/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
        title: "kworathur.dev",
        author: {
            name: "Keshav Worathur",
            summary: `an aspiring systems software engineer completing his master's at the Georgia Institute of Technology in Atlanta, GA.`,
        },
        description:
            "Keshav Worathur's developer portfolio.",
        siteUrl: "https://kworathur.dev",
        social: {
            twitter: "kworathur",
        },
    },
  trailingSlash: `never`,
  plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-image`,
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: `${__dirname}/content/assets`,
                },
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/blog`,
                name: `blog`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/assets`,
                name: `assets`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                            linkImagesToOriginal: true,
                            showCaptions: ["title", "alt"],
                            quality: 50,
                            wrapperStyle: `margin: 0 auto; text-align: center; font-style: italic;`,
                        },
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`,
                        },
                    },
                    `gatsby-remark-prismjs`,
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`,
                ],
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: ["G-DBLCHKE1M2"],
                gtagConfig: {
                    optimize_id: "OPT_CONTAINER_ID",
                    anonymize_ip: true,
                    cookie_expires: 0,
                },
                pluginConfig: {
                    head: true,
                    respectDNT: true,
                },
            },
        },
        {
            resolve: `gatsby-plugin-feed`,
            options: {
                query: `{
                    site {
                        siteMetadata {
                            title
                            description
                            siteUrl
                            site_url: siteUrl
                        }
                    }
                }`,
                feeds: [
                    {
                        serialize: ({ query: { site, allMarkdownRemark } }) => {
                            return allMarkdownRemark.nodes.map(node => {
                                return Object.assign({}, node.frontmatter, {
                                    description: node.excerpt,
                                    date: node.frontmatter.date,
                                    url:
                                        site.siteMetadata.siteUrl +
                                        node.fields.slug,
                                    guid:
                                        site.siteMetadata.siteUrl +
                                        node.fields.slug,
                                    custom_elements: [
                                        { "content:encoded": node.html },
                                    ],
                                });
                            });
                        },
                        query: `
                        {
                            allMarkdownRemark(
                                sort: { order: DESC, fields: [frontmatter___date] },
                            ) {
                                nodes {
                                    excerpt
                                    html
                                    fields {
                                        slug
                                    }
                                    frontmatter {
                                        title
                                        date
                                    }
                                }
                            }
                        }`,
                        output: "/rss.xml",
                        title: "Keshav's Blog",
                        match: "^/blog/",
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Keshav Worathur's Blog`,
                short_name: `Keshav's Blog`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#202020`,
                display: `minimal-ui`,
                icon: `content/assets/KVW-monogram.svg`,
            },
        },
        `gatsby-plugin-react-helmet`,
        "gatsby-plugin-dark-mode",
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
        // Enable PWA and offline functionality
        `gatsby-plugin-offline`,
    ],
}
