import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"
import TagsBlock from "./tag-block"

const BlogList = ({
  path,
  cover,
  title,
  date,
  excerpt,
  tags,
  author,
  index,
}) => (
  <div className={`post-card ${index == 0 ? "full-card" : null}`}>
    <div className={"image-container"}>
      <Link to={path} title={title}>
        <Img fluid={cover} />
      </Link>
    </div>
    <div className="content-main">
      <div className="content-container">
        <TagsBlock list={tags} />
        <Link to={path}>
          <h1>{title}</h1>
          <p>{excerpt}</p>
        </Link>
      </div>
      <div className={"post-card-footer"}>{author}</div>
    </div>
  </div>
)

export default BlogList

BlogList.propTypes = {
  cover: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  author: PropTypes.array.isRequired,
}
