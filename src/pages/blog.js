import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import BlogList from "../components/blog/blog-list"
import Layout from "../components/layout"
import { theme } from "../../styles/prism"

const Blog = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <Layout>
      <Helmet title={"Blog Page"} />
      <div className="blog-list">
        {edges.map(({ node }, index) => (
          <BlogList
            index={index}
            theme={theme}
            key={node.id}
            cover={node.frontmatter.cover.childImageSharp.fluid}
            path={node.frontmatter.path}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            tags={node.frontmatter.tags}
            author={node.frontmatter.author}
            excerpt={node.excerpt}
          />
        ))}
      </div>
    </Layout>
  )
}

export default Blog

Blog.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            excerpt: PropTypes.string,
            frontmatter: PropTypes.shape({
              cover: PropTypes.object.isRequired,
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              author: PropTypes.string.isRequired,
              tags: PropTypes.array,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 200)
          frontmatter {
            title
            path
            tags
            author
            date(formatString: "MM.DD.YYYY")
            cover {
              childImageSharp {
                fluid(
                  maxWidth: 1000
                  quality: 90
                  traceSVG: { color: "#2B2B2F" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
