import React, {useState} from 'react';
import MyInput from "./input/MyInput";
import MyButton from "./button/MyButton";

const PostForm = ({create}) => {


    const [post, setPost] = useState({title: '', body: ''})

    function addNewPost(e) {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <form>
            {/*Управляемый компонент*/}
            <MyInput
                type='text'
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                placeholder={"Название поста"}/>
            {/*Неуправляемый компонент*/}
            <MyInput
                type='text'
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                placeholder={"Описание поста"}
                // ref={bodyInputRef}
            />
            <MyButton onClick={addNewPost}>Create post</MyButton>
        </form>
    );
};

export default PostForm;