import React from "react"

export default function ArticleImage({ imageData }) {
  return (
    <figure>
      <img
        className="w-full rounded-lg"
        src={imageData.image.fluid.src}
        size={imageData.image.fluid.size}
        srcSet={imageData.image.fluid.srcSet}
        alt=""
      />
      <figcaption>{imageData.description}</figcaption>
    </figure>
  )
}
