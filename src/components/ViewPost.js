import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Comments from '../components/Comments';
import NewComment from "./NewComment";
import "../styles/ViewPost.css"

const ViewPost = () => {
    const [post, setPost] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const API_URL = process.env.REACT_APP_API_URL;

        const getPost = async () => {
            try {
                const response = await fetch(`${API_URL}/posts/${id}`, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                })
                const data = await response.json()
                const formattedData = data.found_post = {
                    ...data.found_post,
                    date: new Date(data.found_post.date).toLocaleDateString("en-gb", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                    }),
                    time: new Date(data.found_post.date).toLocaleTimeString("en-US", {
                        hour: "numeric",
                        minute: "numeric",
                    })
                }
                setPost(formattedData)
            } catch (err) {
                console.error(err)
            }
        }
        getPost()
    }, [id])

    return (
        <div className="view-post-container">
            <div className="view-post-div">
                <h1>{post.title}</h1>
                <div className="post-details">
                    <p>Published by: {post.author} on {post.date}, {post.time}</p>
                    <p></p>
                </div>
                <p>{post.text}</p>
            </div>
            <hr />
            <NewComment id={id} />
            <Comments id={id} />
        </div >
    )
}

export default ViewPost