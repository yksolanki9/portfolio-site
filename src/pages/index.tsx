import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const rootStyles = {

}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div style={rootStyles}>
      <h1>My portfolio</h1>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
