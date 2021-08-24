import "./Sidebar.scss"
import { Link } from "react-router-dom"

//assest//
import Dollie from './../../assest/img/Dollie.png';
import Nora from './../../assest/img/Nora.png';
import Belle from './../../assest/img/Belle.png';
import Eunice from './../../assest/img/Eunice.png';
import Emma from './../../assest/img/Emma.png';
import Leah from './../../assest/img/Leah.png';
  //components//
import Trending from "../Lib/Svgs/Trending";
import Subscriptions from "../Lib/Svgs/Subscriptions";
import Library from "../Lib/Svgs/Library";
import History from "../Lib/Svgs/History";
import Watch from "../Lib/Svgs/Watch";
import Games from "../Lib/Svgs/Games";
import Music from "../Lib/Svgs/Music";
import Star from "../Lib/Svgs/Star";
import Heart from "../Lib/Svgs/Heart";
import Setting from "../Lib/Svgs/Setting";
import Down from "../Lib/Svgs/Down";
import Home from "../Lib/Svgs/Home";

function Sidebar (){
  return (
      <div className='sidebar'>
          <nav className='sidebar__nav'>
              <ul className='sidebar__list'>
                  <li className='sidebar__list-item'>
                        <span className='sidebar__list-span  sidebar__list--home'><Home className='sidebar__icon'/></span>
                        <p className='sidebar__list-title  sidebar__list--home'>Home</p>
                  </li>
                  <li className='sidebar__list-item'>
                         <span className='sidebar__list-span'><Trending className='sidebar__icon'/></span>
                        <p className='sidebar__list-title'>Trending</p>
                  </li>
                  <li className='sidebar__list-item'>
                         <span className='sidebar__list-span'><Subscriptions className='sidebar__icon'/></span>
                        <p className='sidebar__list-title'>Subscriptions</p>
                  </li>
                  <li className='sidebar__list-item'>
                         <span className='sidebar__list-span'><Library className='sidebar__icon'/></span>
                        <p className='sidebar__list-title'>Library</p>
                  </li>
                  <li className='sidebar__list-item'>
                         <span className='sidebar__list-span'><History className='sidebar__icon'/></span>
                        <p className='sidebar__list-title'>History</p>
                  </li>
                  <li className='sidebar__list-item'>
                         <span className='sidebar__list-span'><Watch className='sidebar__icon'/></span>
                        <p className='sidebar__list-title'>Watch later</p>
                  </li>
                  <li className='sidebar__list-item'>
                         <span className='sidebar__list-span'><Star className='sidebar__icon'/></span>
                        <p className='sidebar__list-title'>Favourites</p>
                  </li>
                  <li className='sidebar__list-item'>
                         <span className='sidebar__list-span'><Heart className='sidebar__icon'/></span>
                        <p className='sidebar__list-title'>Liked videos</p>
                  </li>
                  <li className='sidebar__list-item'>
                         <span className='sidebar__list-span'><Music className='sidebar__icon'/></span>
                        <p className='sidebar__list-title'>Music</p>
                  </li>
                  <li className='sidebar__list-item'>
                         <span className='sidebar__list-span'><Games className='sidebar__icon'/></span>
                        <p className='sidebar__list-title'>Games</p>
                  </li>
                  <li className='sidebar__list-item'>
                         <span className='sidebar__list-span'><Down className='sidebar__icon'/></span>
                        <p className='sidebar__list-title'>Show more</p>
                  </li>
              </ul>
          </nav>
          <div className='sidebar__user'>
              <h3 className='sidebar__user-title'>Subscriptions</h3>
              <ul className='sidebar__user-list'>
                  <Link className='sidebar__user-link' to ='./../channel'>
                      <img className='sidebar__user-img' src={Dollie} alt="Dollie"/>
                      <p className='sidebar__user-name'>Gussie Singleton</p>
                  </Link>
                  <Link className='sidebar__user-link' to ='./../channel'>
                      <img className='sidebar__user-img' src={Nora} alt="Nora"/>
                      <p className='sidebar__user-name'>Nora Francis</p>
                  </Link>
                  <Link className='sidebar__user-link' to ='./../channel'>
                      <img className='sidebar__user-img' src={Belle} alt="Belle"/>
                      <p className='sidebar__user-name'>Belle Briggs</p>
                  </Link>
                  <Link className='sidebar__user-link' to ='./../channel'>
                      <img className='sidebar__user-img' src={Eunice} alt="Eunice"/>
                      <p className='sidebar__user-name'>Eunice Cortez</p>
                  </Link>
                  <Link className='sidebar__user-link' to ='./../channel'>
                      <img className='sidebar__user-img' src={Emma} alt="Emma"/>
                      <p className='sidebar__user-name'>Emma Hanson</p>
                  </Link>
                  <Link className='sidebar__user-link' to ='./../channel'>
                      <img className='sidebar__user-img' src={Leah} alt="Leah"/>
                      <p className='sidebar__user-name'>Leah Berry</p>
                  </Link>
              </ul>
          </div>
          <li className='sidebar__list-item'>
                <span className='sidebar__list-span'><Setting className='sidebar__icon'/></span>
                <p className='sidebar__setting-text'>Setting</p>
          </li>
         
      </div>
      
  )
}


export default Sidebar; 