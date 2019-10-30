import React from 'react';
import { Link } from 'react-router-dom';

function Blog(props){
    return (
        <div>
        <h1>BLOG PAGE</h1>
        <div>
            <ul>
                <li>
                    <Link to="/blog/1" > FIRST PAGE </Link>
                </li>
                <li>
                    <Link to="/blog/2" > SECOND PAGE </Link>
                </li>
                <li>
                    <Link to="/blog/3" > THIRD PAGE </Link>
                </li>
            </ul>
        </div>
        </div>
    )
}
export default Blog;