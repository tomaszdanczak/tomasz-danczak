import React from "react"

export default function ProjectImage({ image, altText }) {
  return (
    <div className="aspect-w-3 aspect-h-2">
      <img
        className="object-cover shadow-lg rounded-lg"
        src={image.fluid.src}
        size={image.fluid.size}
        srcSet={image.fluid.srcSet}
        alt={altText}
      />
    </div>
  )
}
