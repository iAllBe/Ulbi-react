import React from 'react';
import MyButton from "./button/MyButton";

const PostItem = ({post, number, remove}) => {
    return (
        <div className='post'>
            <div className="post__content">
                <strong className="post__number">{number}</strong>
                <div className="post__name">{post.title}</div>
                <div className="post__body">{post.body}</div>
            </div>
            <MyButton className="post__btn" onClick={() => remove(post.id)}>Удалить</MyButton>
        </div>
    );
};

export default PostItem;