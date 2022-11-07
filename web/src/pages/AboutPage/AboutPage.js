
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

      <p>
        Redwood is the full-stack web framework designed to help you grow from
        side project to startup. Redwood features an end-to-end development
        workflow that weaves together the best parts of React, GraphQL, Prisma,
        TypeScript, Jest, and Storybook.
      </p>
    </>
  )
}

export default AboutPage
