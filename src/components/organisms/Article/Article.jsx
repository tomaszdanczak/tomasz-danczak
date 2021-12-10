import React from "react"
import ArticleBackground from "components/molecules/ArticleBackground/ArticleBackground"
import ArticleHeading from "components/atoms/ArticleHeading/ArticleHeading"
import ArticleIntroParagraph from "components/atoms/ArticleIntroParagraph/ArticleIntroParagraph"

import ArticleContent from "../ArticleContent/ArticleContent"

export default function Article({ postData }) {
  return (
    <div className="relative py-16 bg-white overflow-hidden">
      <ArticleBackground />
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <ArticleHeading title={postData.title} />
          <ArticleIntroParagraph content={postData.paragraphIntro} />
        </div>
        <ArticleContent postData={postData} />
      </div>
    </div>
  )
}
