import React from "react"

export default function AuthorPhoto({ author, authorimage }) {
  return (
    <div className="flex-shrink-0">
      <a href={author}>
        <span className="sr-only">{author.name}</span>
        <img
          className="h-10 w-10 rounded-full"
          src={authorimage.fluid.src}
          size={authorimage.fluid.size}
          srcSet={authorimage.fluid.srcSet}
          alt={author}
        />
      </a>
    </div>
  )
}
