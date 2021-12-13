import * as React from "react"
import AboutSection from "components/organisms/AboutSection/AboutSection"
import SocialSection from "components/organisms/SocialSection/SocialSection"
import BlogSection from "components/organisms/BlogSection/BlogSection"
import MainLayout from "components/templates/MainLayout/MainLayout"
import StaticSitesSection from "components/organisms/StaticSitesSection/StaticSitesSection"

const IndexPage = () => (
  <MainLayout>
    <AboutSection />
    <SocialSection />
    <BlogSection />
    <StaticSitesSection />
  </MainLayout>
)

export default IndexPage
