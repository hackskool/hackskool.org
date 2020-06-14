import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import Container from '../layout/container';
import Content from '../layout/content';
import Layout from "../components/layout"
import Img from "gatsby-image"


const Post = ({ data }) => {
  const {html } = data.markdownRemark
  const {date, title, tags, author, cover} = data.markdownRemark.frontmatter
  return (
    <Layout>
      <Container className={"content-wrapper"}>
        <Link className={"post-tag"} to={`/tags/${tags[0]}`} >{tags[0].replace("-", " ")}</Link>
        <h1 className={"post-title"}>
          {title}
        </h1>
        <Img fluid={cover.childImageSharp.fluid} className={"hero-image"} />
        <Content input={html} />
      </Container>
    </Layout>
  );
};

export default Post;

Post.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        date
        title
        tags
        author
        cover {
          childImageSharp {
            fluid(
              maxWidth: 1920
              quality: 90
            ) {
              ...GatsbyImageSharpFluid_withWebp
            }
            resize(width: 1200, quality: 90) {
              src
            }
          }
        }
      }
    }
  }
`;
