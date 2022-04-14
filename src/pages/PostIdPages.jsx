import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import PostService from "../API/PostService";
import {useFetching} from "../hooks/useFetching";
import Loader from "../components/UI/loader/Loader";


const PostIdPages = () => {

    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    const [fetchPostById, isLoading, error] = useFetching( async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })

    const [fetchCommentById, isComLoading, comError] = useFetching( async (id) => {
        const response = await PostService.getCommentById(id)
        console.log(response.data)
        setComments(response.data)
    })

    useEffect( () => {
        fetchPostById(params.id)
        fetchCommentById(params.id)
    }, [])

    return (
        <div>
            <h1>You just open post page with ID = {params.id}</h1>
            {isLoading
                ? <Loader/>
                : <div>{post.id}. {post.title}</div>
            }
            <h1>Comments:</h1>
            {isComLoading
                ? <Loader/>
                : <div>{comments.map(comm =>
                    <div style={{marginTop: 15}}>
                        <h5>
                            {comm.email}
                        </h5>
                        <div>
                            {comm.body}
                        </div>
                    </div>
                )}</div>
            }

        </div>
    );
};

export default PostIdPages;