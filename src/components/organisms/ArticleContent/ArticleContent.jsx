import React from "react"
import { StructuredText } from "react-datocms"
import { ListWrapper } from "./ArticleContent.styles"
import ArticleImage from "components/atoms/ArticleImage/ArticleImage"

export default function ArticleContent({ postData }) {
  return (
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

          {block.model.apiKey === "image" && <ArticleImage imageData={block} />}
        </div>
      ))}
    </div>
  )
}
