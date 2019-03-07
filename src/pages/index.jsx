import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Hello from '../components/Hello'

export default ({ data }) => {
  const {
    author,
    description,
    name,
    repository,
    siteUrl,
    version,
  } = data.site.siteMetadata
  return (
    <Layout>
      <Hello />
      <p>name: {name}</p>
      <p>description: {description}</p>
      <p>author: {author.name}</p>
      <p>
        repository: <a href={repository}>{repository}</a>
      </p>
      <p>
        siteUrl: <a href={siteUrl}>{siteUrl}</a>
      </p>
      <p>version: {version}</p>
    </Layout>
  )
}

export const indexQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        author {
          name
        }
        description
        name
        repository
        siteUrl
        version
      }
    }
  }
`
