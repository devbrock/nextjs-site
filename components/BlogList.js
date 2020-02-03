import Link from "next/link";

const BlogList = (props) => {


  function reformatDate(fullDate) {
    const date = new Date(fullDate)
    return date.toDateString().slice(4);
  }

  return (
    <>
      <div className="container" style={{ display: 'block' }}>
        {props.allBlogs.length > 1 && props.allBlogs.map(post => (
          <div className="block">
            <Link
              key={post.slug}
              href={{ pathname: `/blog/${post.slug}` }}
            >
              <a style={{ textDecoration: 'none' }}>
                <h2 className="red-dark">{post.document.data.title}</h2>
                <h4 className="red"> {post.document.data.author} | {reformatDate(post.document.data.date)}</h4>
                <p className="gray-dark">
                  {post.document.data.summary}
                </p>
              </a>
            </Link>
          </div>
        ))}
      </div>

    </>
  );
};

export default BlogList;