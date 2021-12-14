import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export default function HeroImage() {
  const data = useStaticQuery(graphql`
    {
      datoCmsHero {
        heroimage {
          fluid {
            sizes
            src
            srcSet
          }
        }
      }
    }
  `)

  const image = data.datoCmsHero.heroimage

  return (
    <img
      className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
      src={image.fluid.src}
      size={image.fluid.size}
      srcSet={image.fluid.srcSet}
    />
  )
}
