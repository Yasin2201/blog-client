import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const AllPosts = () => {
    const [allPosts, setAllPosts] = useState([])

    useEffect(() => {
        const API_URL = process.env.REACT_APP_API_URL;

        const getAllPosts = async () => {
            try {
                const response = await fetch(`${API_URL}/posts`, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                })
                const data = await response.json()

                const formattedData = data.all_posts.map((post) => post = {
                    ...post,
                    date: new Date(post.date).toLocaleDateString("en-gb", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                    }),
                    time: new Date(post.date).toLocaleTimeString("en-US", {
                        hour: "numeric",
                        minute: "numeric",
                    })
                })

                setAllPosts(formattedData)
            } catch (err) {
                console.error(err)
            }
        }
        getAllPosts()
    }, [])

    return (
        allPosts.map((post) => {
            return (
                <div className="posts-div" key={post._id}>
                    <h1>{post.title}</h1>
                    <div>
                        <p>{post.date} @ {post.time}</p>
                        <p>Post By {post.author}</p>
                    </div>

                    <div className="post-actions">
                        <Link to={`/posts/${post._id}`}>
                            <button className="view-btn">
                                View
                            </button>
                        </Link>
                    </div>
                </div>
            )
        })
    )
}

export default AllPosts