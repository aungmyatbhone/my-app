function Testimony({user}) {
    return (
        <article style={{'gap': "2rem"}}>
            <p>{user.message}</p>
            <small>-{user.name}</small>
        </article>
    )
}


export default Testimony;