import React from "react"

export default function PostImage({ image, altText }) {
  return (
    <img
      className="h-48 w-full object-cover"
      src={image.fluid.src}
      size={image.fluid.size}
      srcSet={image.fluid.srcSet}
      alt={altText}
    />
  )
}
