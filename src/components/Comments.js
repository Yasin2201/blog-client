import { useEffect, useState } from "react"

const Comments = () => {
    const [postComments, setPostComments] = useState()

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
        postComments.map((comment) => {
            return (
                <div className="comment-div" key={comment._id}>
                    <h3>{comment.text}</h3>
                    <p>{comment.date} @ {comment.time}</p>
                    <p>Comment By {comment.username}</p>
                </div>
            )
        })
    )
}