import React from "react"
import Card from "../../atoms/Card/Card"
import PostImage from "../../atoms/PostImage/PostImage"
import CardFooter from "../CardFooter/CardFooter"
import PostDescription from "../PostDescription/PostDescription"

export default function BlogItem({
  post: {
    title,
    imageUrl,
    image,
    description,
    author,
    href,
    category,
    datetime,
    readingtime,
    authorimage,
  },
}) {
  return (
    <Card>
      <div className="flex-shrink-0">
        <PostImage image={image} />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <PostDescription
          category={category}
          href={href}
          title={title}
          description={description}
        />
        <CardFooter
          author={author}
          datetime={datetime}
          readingtime={readingtime}
          authorimage={authorimage}
        />
      </div>
    </Card>
  )
}
