import React from "react"

export default function PostDetail({ author, datetime, readingtime }) {
  return (
    <div className="ml-3">
      <p className="text-sm font-medium text-gray-900">
        <a href={author.href} className="hover:underline">
          {author}
        </a>
      </p>
      <div className="flex space-x-1 text-sm text-gray-500">
        {/* TODO: change format of data (Mar 10, 2020) */}
        <time dateTime={datetime}>{datetime}</time>
        <span aria-hidden="true">&middot;</span>
        <span>{readingtime} min read</span>
      </div>
    </div>
  )
}
