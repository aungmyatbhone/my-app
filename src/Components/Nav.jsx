import logo from '../assets/logo.png'
function Nav() {
    return(
        <nav>
            <img className='logoimg' src={logo} alt="" />
            <ul>
                <li>
                    <a href="http://">Home</a>
                </li>
                <li>
                    <a href="http://">Specials</a>
                </li>
                <li>
                    <a href="http://">Reserve a table</a>
                </li>
                <li>
                    <a href="http://">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav