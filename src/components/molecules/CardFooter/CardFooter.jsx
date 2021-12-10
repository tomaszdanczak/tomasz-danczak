import React from "react"
import AuthorPhoto from "components/molecules/AuthorPhoto/AuthorPhoto"
import PostDetail from "components/molecules/PostDetail/PostDetail"

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

      <PostDetail
        author={author}
        datetime={datetime}
        date={date}
        readingtime={readingtime}
      />
    </div>
  )
}
