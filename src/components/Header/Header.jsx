import './Header.scss'
import { Link } from 'react-router-dom'
// react-icon//
import {AiOutlineVideoCamera} from 'react-icons/ai'
import {CgMenuGridO} from 'react-icons/cg'
import {BiBell} from 'react-icons/bi'
import {IoSearch} from 'react-icons/io5'
// //
import Logo from './../../assest/img/Logo.png';
// assest //
import User from './../../assest/img/Userpic.png'
function Header () {
const clickBtn =()=>{
document.querySelector(".sidebar").classList.toggle("sidebar--active")

}

    return (
      <div className='header'>
            <div className='header__side'>
                <button className='header__side-hamburger' onClick={clickBtn}>
                    <span className='header__side-hamburger-inner'></span>
                </button>
              <Link className='header__side-link' to='./../'><img src={Logo} alt="Logo" /></Link>
            </div>
            <IoSearch className='header__search-span'/>
            <input type="search" placeholder='Search' className='header__search' />
            <div className='header__icons'>
                <AiOutlineVideoCamera className='header__icon'/>
                <CgMenuGridO className='header__icon'/>
                <BiBell className='header__icon'/>
                <img className='header__icon  header__icon--user' src={User} alt="User" />
            </div>

      </div>
    )

}
export default Header