import Link from 'next/link'

const Blog = (props) => {
  return (

    <div className="card">
      <h2>{props.name}</h2>
      <a href={props.link}>{props.link} </a>
      <p>{props.link}</p>
    </div>
  );
}

export default Blog;