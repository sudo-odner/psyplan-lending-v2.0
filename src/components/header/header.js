import './header.css'
import Logo from '../../visual-components/image/logo.svg'

function Header(){
    return(
        <div className='Header'>
            <div className='Header-object'>
                <div className='Header-left'>
                    <img className='Header-img' src={Logo} alt=''></img>
                </div>
                <div className='Header-right'>
                <button className='Header-button'>Проблема</button>
                <button className='Header-button'>Контакты</button>
                <button className='Header-button'>О нас</button>
                </div>
            </div>
        </div>
    );
};

export default Header;