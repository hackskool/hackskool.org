import React from 'react';
import PropTypes from 'prop-types';



const Content = ({ input }) => (
  <div className={"post-content"} dangerouslySetInnerHTML={{ __html: input }} />
);

export default Content;

Content.propTypes = {
  input: PropTypes.any.isRequired,
};
