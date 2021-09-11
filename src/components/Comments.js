import { useEffect, useState } from "react"
import "../styles/Comments.css";

const Comments = ({ id }) => {
    const [postComments, setPostComments] = useState([])

    useEffect(() => {
        const API_URL = process.env.REACT_APP_API_URL;

        const getComments = async () => {
            try {
                const response = await fetch(`${API_URL}/posts/${id}/comments`, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                })
                const data = await response.json()
                const formattedData = data.posts_comments.map((comment) => comment = {
                    ...comment,
                    date: new Date(comment.date).toLocaleDateString("en-gb", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                    }),
                    time: new Date(comment.date).toLocaleTimeString("en-US", {
                        hour: "numeric",
                        minute: "numeric",
                    })
                })
                setPostComments(formattedData)
            } catch (err) {
                console.error(err)
            }
        }
        getComments()

    }, [id])
    return (
        postComments.length > 0 &&
        <div className="comments-container">
            <h2>Comments:</h2>
            {postComments.map((comment) => {
                return (
                    <div className="comment-div" key={comment._id}>
                        <h4>{comment.username}</h4>
                        <div>
                            <p>{comment.text}</p>
                        </div>
                        <p>{comment.date} @ {comment.time}</p>
                    </div>
                )
            })
            }
        </div>
    )
}

export default Comments