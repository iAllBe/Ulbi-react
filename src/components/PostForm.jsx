import React, {useState} from 'react';
import MyInput from "./input/MyInput";
import MyButton from "./button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''});

    function addPost(e) {
        e.preventDefault()

        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <form>
            <MyInput type='text' value={post.title} placeholder='Название' onChange={(e) => setPost({...post, title: e.target.value})}/>
            <MyInput type='text' value={post.body} placeholder='Описание' onChange={(e) => setPost({...post, body: e.target.value})}/>
            <MyButton onClick={addPost}>Добавить</MyButton>
        </form>
    );
};

export default PostForm;