import logo from '../images/logo.svg'
import '../styles/header.css'

function Header() {
    return (
        <div className="header">
            <div className='header-wrapper'>
                <ul>
                    <li className='logo'>
                        <img src={logo} />
                    </li>
                    <li>
                        <a href='https://paychek.uni.club/' className='paycheck'>Uni paychek</a>
                    </li>
                </ul>
            </div>
        </div>  
    );
}

export default Header;