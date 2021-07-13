import Link from 'next/link'

const Blog = (props) => {
  return (
      <div >
          {props.name}
          <a href={props.link}>{props.link}</a>
      </div>
  );
}
 
export default Blog;