import React from "react"

export default function CardFooter({ author, datetime, date, readingtime }) {
  return (
    <div className="mt-6 flex items-center">
      <div className="flex-shrink-0">
        <a href={author.href}>
          <span className="sr-only">{author.name}</span>
          <img
            className="h-10 w-10 rounded-full"
            src={author.imageUrl}
            alt=""
          />
        </a>
      </div>
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
