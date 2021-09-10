const NewComment = () => {

    const onNewCommentSubmit = async (e) => {

    }

    return (
        <form className="new-comment-form" onSubmit={(e) => onNewCommentSubmit(e)}>
            <input type="text" name="username" placeholder="Username" />
            <input type="text" name="text" placeholder="Share your thoughts..." />
            <button className="submit-btn" type="submit">Submit</button>
        </form>
    )
}

export default NewComment