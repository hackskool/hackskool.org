import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Container from '../layout/container';
import config from '../../config/site';
import Layout from "../components/layout"


const Information = styled.div`
  text-align: center;
  h1 {
    font-size: 2rem;
    margin-bottom: 1.25rem;
  }
`;

const Tag = ({ pageContext }) => {
  const { posts, tagName } = pageContext;
  return (
    <Layout>
      <Helmet title={`${tagName} | ${config.siteTitle}`} />
      <Container>
        <Information>
          {posts.map((post, index) => (
            <Link key={index} to={post.frontmatter.path}>
              <h3>{post.frontmatter.title}</h3>
            </Link>
          ))}
        </Information>
      </Container>
    </Layout>
  );
};

export default Tag;

Tag.propTypes = {
  pageContext: PropTypes.shape({
    posts: PropTypes.array,
    tagName: PropTypes.string,
  }),
};
