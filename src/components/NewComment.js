import { useState } from "react";
import "../styles/NewComment.css";

const NewComment = ({ id }) => {
    const [errors, setErrors] = useState([]);
    const API_URL = process.env.REACT_APP_API_URL;

    const onNewCommentSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const userInput = {
            username: formData.get('username'),
            text: formData.get('text'),
        }

        try {
            const response = await fetch(`${API_URL}/posts/${id}/comments`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userInput)
            })
            const data = await response.json()

            if (data.errors) {
                setErrors(data.errors)
            } else {
                setErrors([])
                window.location.reload(false);
            }
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className="new-comment-container">
            <form className="new-comment-form" onSubmit={(e) => onNewCommentSubmit(e)}>
                <input type="text" name="username" placeholder="Username" />
                <textarea type="text" name="text" placeholder="Share your thoughts..." />
                <button className="submit-btn" type="submit">Submit</button>
            </form>
            {errors.map((error) => {
                return (
                    <div key={errors.indexOf(error)} className="error-message">
                        {error.msg}!
                    </div>
                )
            })}
        </div>

    )
}

export default NewComment