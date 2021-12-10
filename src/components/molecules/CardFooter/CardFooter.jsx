import React from "react"
import AuthorPhoto from "../AuthorPhoto/AuthorPhoto"

export default function CardFooter({
  author,
  datetime,
  date,
  readingtime,
  authorimage,
}) {
  return (
    <div className="mt-6 flex items-center">
      <AuthorPhoto authorimage={authorimage} author={author} />

      <div className="ml-3">
        <p className="text-sm font-medium text-gray-900">
          <a href={author.href} className="hover:underline">
            {author.name}
          </a>
        </p>
        <div className="flex space-x-1 text-sm text-gray-500">
          <time dateTime={datetime}>{date}</time>
          <span aria-hidden="true">&middot;</span>
          <span>{readingtime} read</span>
        </div>
      </div>
    </div>
  )
}
