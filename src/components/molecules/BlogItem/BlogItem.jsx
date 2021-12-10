import React from "react"
import slugify from "slugify"
import { Link } from "gatsby"
import Card from "components/atoms/Card/Card"
import PostImage from "components/atoms/PostImage/PostImage"
import CardFooter from "components/molecules/CardFooter/CardFooter"
import PostDescription from "components/molecules/PostDescription/PostDescription"

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
  const slug = slugify(title, { lower: true })

  return (
    <Card>
      <div className="flex-shrink-0">
        <Link to={`/articles/${slug}`}>
          <PostImage image={image} />
        </Link>
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <Link to={`/articles/${slug}`}>
          <PostDescription
            category={category}
            href={href}
            title={title}
            description={description}
          />
        </Link>

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
