import { Link } from 'react-router-dom';
import mainimg from '../assets/mainimg.jpg'
function Main() {
    return (
        <main>
            <section>
                <div>
                    <h1>Welcome to Little Lemon</h1>
                    <p>Experience the zesty flavors and cozy ambiance at Little Lemon Restaurant. Serving fresh, locally sourced ingredients with a twist of lemon.</p>
                    <Link to='/reserve'>
                        <button id='reserveBtn'>Reserve a table</button>
                    </Link>
                </div>
                <div>
                    <img className="heroimg" src={mainimg} alt="" />
                </div>
            </section>
        </main>
    )
}


export default Main;