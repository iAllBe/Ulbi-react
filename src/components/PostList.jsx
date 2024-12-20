import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, remove}) => {
    return (
        <div className='post-list'>
            {posts.map((post, index) =>
                <PostItem post={post} number={index+1} remove={remove} key={post.id}></PostItem>
            )}
        </div>
    );
};

export default PostList;