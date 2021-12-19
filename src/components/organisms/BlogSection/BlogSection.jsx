import React from "react"
import Header from "components/molecules/Header/Header"
import BlogItem from "components/molecules/BlogItem/BlogItem"
import { graphql, useStaticQuery } from "gatsby"

export default function BlogSection() {
  const data = useStaticQuery(graphql`
    {
      allDatoCmsBlogPost(sort: { fields: itemposition }) {
        nodes {
          title
          description
          author
          category
          authorimage {
            fluid {
              sizes
              src
              srcSet
            }
          }
          datetime(formatString: "")
          readingtime
          image {
            fluid {
              sizes
              src
              srcSet
            }
          }
        }
      }
      allDatoCmsHeading(filter: { section: { eq: "BlogSection" } }) {
        nodes {
          subtitle
          title
          special
        }
      }
    }
  `)
  const posts = data.allDatoCmsBlogPost.nodes
  const [headingData] = data.allDatoCmsHeading.nodes

  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <Header
          centreFrom="sm"
          title={headingData.title}
          subtitle={headingData.subtitle}
        />

        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map(post => (
            <BlogItem key={post.title} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}
