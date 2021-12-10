import React from "react"
import { StructuredText } from "react-datocms"
import ArticleBackground from "components/molecules/ArticleBackground/ArticleBackground"
import ArticleHeading from "components/atoms/ArticleHeading/ArticleHeading"
import ArticleIntroParagraph from "components/atoms/ArticleIntroParagraph/ArticleIntroParagraph"
import ArticleImage from "components/atoms/ArticleImage/ArticleImage"
import { ListWrapper } from "./Article.styles"

export default function Article({ postData }) {
  return (
    <div className="relative py-16 bg-white overflow-hidden">
      <ArticleBackground />
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <ArticleHeading title={postData.title} />
          <ArticleIntroParagraph content={postData.paragraphIntro} />
        </div>
        <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
          {postData.content.map(block => (
            <div key={block.id}>
              {block.model.apiKey === "paragraph" && (
                <StructuredText data={block.paragraph} />
              )}

              {block.model.apiKey === "list" && (
                <ListWrapper>
                  <StructuredText data={block.list} />
                </ListWrapper>
              )}

              {block.model.apiKey === "blockquote" && (
                <blockquote>
                  <StructuredText data={block.blockquote} />
                </blockquote>
              )}

              {block.model.apiKey === "image" && (
                <ArticleImage imageData={block} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
