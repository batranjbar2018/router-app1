import React from 'react';

function BlogPost(props){
    console.log(props)
   const {match:{ params: { id }}}=props;
    return (
        <>
        <h1>THIS Blog Post Number {id}</h1>
        </>
    )
}
export default BlogPost;