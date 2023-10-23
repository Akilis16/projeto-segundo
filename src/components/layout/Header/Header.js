import style from './Header.module.css'
import Logo from '../../img/logo.png'
import {Link} from 'react-router-dom'

function Header() {
    return(
        <header>           
            <div className = {style.logoContainer}>
                <Link to="/">  
                    <img src={Logo} alt="Logo" />
                    <h1>MST</h1>
                </Link>
            </div> 
            <hr></hr>
        </header>
    )
}

export default Header