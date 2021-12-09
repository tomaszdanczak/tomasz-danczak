import React from "react"
import HeroHeader from "components/molecules/HeroHeader/HeroHeader"
import HeroForm from "../HeroForm/HeroForm"

export default function HeroContent() {
  return (
    <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <HeroHeader
          title="Data to enrich your"
          title2="online business"
          subtitle="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua."
        />
        <HeroForm />
      </div>
    </div>
  )
}
