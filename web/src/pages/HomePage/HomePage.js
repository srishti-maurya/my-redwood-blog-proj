import { MetaTags } from '@redwoodjs/web'
import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      Welcome to the Blog!
      <ArticlesCell />
    </>
  )
}

export default HomePage
