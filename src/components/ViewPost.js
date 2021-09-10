import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Comments from '../components/Comments';
import NewComment from "./NewComment";

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
                setPost(data.found_post = { ...data.found_post, date: new Date(data.found_post.date).toLocaleString("en-US") })
            } catch (err) {
                console.error(err)
            }
        }
        getPost()
    }, [id])

    return (
        <div>
            <div>
                <h1>{post.title}</h1>
                <h3>{post.author}</h3>
                <h4>{post.date}</h4>
                <p>{post.text}</p>
            </div>
            <NewComment id={id} />
            <Comments id={id} />
        </div>
    )
}

export default ViewPost