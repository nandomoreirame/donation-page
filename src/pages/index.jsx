import React from 'react'
import { graphql } from 'gatsby'
import { SEO } from '../components/SEO'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Hero from '../components/Hero'
import Card from '../components/Card'
import Alert from '../components/Alert'
import cover from '../components/Hero/hero-bg.png'

export default ({ data }) => {
  const {
    author,
    description,
    name,
    repository,
    siteUrl,
    social,
    title,
    version,
  } = data.site.siteMetadata
  return (
    <Layout headerIcons={social}>
      <SEO />
      <Hero cover={cover} description={description} title={title} />
      <Container>
        <Card style={{ marginTop: '-200px' }}>
          <Alert type="error">Corrija os campos abaixo</Alert>
          <p>title: {title}</p>
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
        </Card>
      </Container>
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
        social {
          facebook
          twitter
          instagram
        }
        title
        version
      }
    }
  }
`
