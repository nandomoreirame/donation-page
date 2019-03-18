import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from 'layouts'
import { SEO } from 'components/SEO'
import { Container } from 'components/Grid'
import Hero from 'components/Hero'
import cover from 'components/Hero/hero-bg.png'
import { Form } from 'components/Form'

export default ({ data }) => {
  const {
    description,
    social,
    title,
  } = data.site.siteMetadata
  return (
    <Layout headerIcons={social}>
      <SEO />
      <Hero cover={cover} description={description} title={title} />
      <Container>
        <Form />
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
