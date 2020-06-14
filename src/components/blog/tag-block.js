import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';



const TagsBlock = ({ list }) => (
  <div className="tag-container">
    {list &&
      list.map(tag => {
        const upperTag = tag.charAt(0).toUpperCase() + tag.slice(1);
        return (
          <Link key={tag} to={`/tags/${tag}`}>
            <span>{upperTag}</span>
          </Link>
        );
      })}
  </div>
);

export default TagsBlock;

TagsBlock.propTypes = {
  list: PropTypes.array,
};
