import React from "react";
import { Link } from "gatsby";

const PostLink = ({ post }) => (
  <article className="card">
    <Link to={post.frontmatter.path}>
      {!!post.frontmatter.thumbnail && (
        <img
          src={post.frontmatter.thumbnail}
          alt={post.frontmatter.title + "- Featured Shot"}
        />
      )}
    </Link>
    <header>
      <div className="post-meta">
        {post.frontmatter.flair} &#183; {post.frontmatter.date}
      </div>
      <h2 className="post-title">
        <Link to={post.frontmatter.path} className="post-link">
          {post.frontmatter.title}
        </Link>
      </h2>
    </header>
  </article>
);
export default PostLink;
