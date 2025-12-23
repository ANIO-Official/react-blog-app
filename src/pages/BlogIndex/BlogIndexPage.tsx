import { posts } from "../../lib/posts"
import { Link } from "react-router-dom";

export default function BlogIndexPage(){

    return(
        <>
            <h2>Activity</h2>
            {
                /*
                 Main Page: Show all Blogs
                */
               <div className="blog-list-container">
                    <ul>
                        {
                            posts.map((post) => 
                            <Link 
                            key={post.id}
                            to={`/blog/${post.id}/${post.title}/${post.content}`}>
                                {post.title}
                            </Link>)
                        }
                    </ul>
               </div>
            }
        </>
    )
}