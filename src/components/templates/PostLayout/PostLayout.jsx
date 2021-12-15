import React from "react"
import { graphql } from "gatsby"
import HeroSection from "components/organisms/HeroSection/HeroSection"
import Article from "components/organisms/Article/Article"
import Footer from "components/organisms/Footer/Footer"

export const data = graphql`
  query querySinglePost($id: String!) {
    datoCmsBlogPost(id: { eq: $id }) {
      id
      title
      paragraphIntro
      content {
        ... on DatoCmsParagraph {
          id
          paragraph {
            value
          }
          model {
            apiKey
          }
        }
        ... on DatoCmsList {
          id
          list {
            value
          }
          model {
            apiKey
          }
        }
        ... on DatoCmsSubheader {
          id
          subheader {
            value
          }
          model {
            apiKey
          }
        }
        ... on DatoCmsBlockquote {
          id
          blockquote {
            value
          }
          model {
            apiKey
          }
        }
        ... on DatoCmsImage {
          id
          description
          image {
            fluid {
              src
              srcSet
              sizes
            }
          }
          model {
            apiKey
          }
        }
      }
    }
  }
`

export default function PostLayout({ data }) {
  const postData = data.datoCmsBlogPost

  return (
    <>
      <HeroSection />
      <Article postData={postData} />
      <Footer />
    </>
  )
}
