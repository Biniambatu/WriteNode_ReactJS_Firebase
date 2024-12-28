
const PostCard = ({post}) => {
  const {title, description} = post
  return (
    <div className="card">
        <p className="title">{title}</p>
        <p className="description">{description}</p>
        <p className="control">
            <span className="author">Biniam</span>
            <span className="delete"><i className="bi bi-trash3"></i></span>
        </p>
    </div>
  )
}

export default PostCard