function Article({imgSource}) {
    return (
        <article style={{'gap': "2rem"}}>
            <img style={{'width': '100%','borderRadius': '1rem'}} src={imgSource} alt="" />
            <h3>Name of food</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse similique magnam, provident asperiores dolore impedit tenetur libero dolor?</p>
            <button id="orderBtn">Order now</button>
        </article>
    )
}


export default Article;