// Write your JS code here
// Write your JS code here

import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = blogItemDetails

  return (
    <li>
      <Link to={`/blogs/${id}`}>
        <div>
          <img src={imageUrl} alt={`item${id}`} />
          <div>
            <p>{topic}</p>
            <h1>{title}</h1>
            <div>
              <img src={avatarUrl} alt={`avatar${id}`} />
              <p>{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
