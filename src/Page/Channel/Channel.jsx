import './Channel.scss'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
//img//
import bgUser from './../../assest/img/channel-bg.png'
import User from './../../assest/img/channel.png'
import Margaret from './../../assest/img/Margaret.png'
import Benson from './../../assest/img/Benson.png'
import Violet from './../../assest/img/Violet.png'
import Phillip from './../../assest/img/Phillip.png'

// icon //
import {BiChevronLeft} from 'react-icons/bi'
import {BiChevronRight} from 'react-icons/bi'
import {IoSearch} from 'react-icons/io5'
function Channel () {
  const [photos, setPhotos] = useState([])
    
  useEffect(() => {
      
      fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")
          .then((res) => res.json())
          .then((data) => setPhotos(data));

  }, [])
  return (
    <section className='channel'> 
          <img className='channel__img' src={bgUser} alt="bg" />
          <div className='channel__container'>
              <div className='channel__top'>
                  <div className='channel__top-wrapper'>
                      <img className='channel__wrapper-img' src={Margaret} alt="margaret"/>
                      <div className='channel__wrapper-information'>
                          <h4 className='channel__information-name'>Margaret Phelps</h4>
                          <span className='channel__information-subscribed'>245k subscribed</span>
                      </div>
                      <button className='channel__informatino-btn' type='button'>Subscribe 2.3m</button>
                  </div>
                  <div className='channel__top-nav'>
                        <nav className='channel__nav'>
                            <ul className='channel__nav-list'>
                                <li className='channel__list-item'>
                                    Home
                                </li>
                                <li className='channel__list-item'>
                                    Videos
                                </li>
                                <li className='channel__list-item'>
                                    Playlists
                                </li>
                                <li className='channel__list-item'>
                                    Channels
                                </li>
                                <li className='channel__list-item'>
                                    Discussion
                                </li>
                                <li className='channel__list-item'>
                                    About
                                </li>
                            </ul>
                        </nav>
                        <span className='channel__nav-search'><IoSearch/></span>
                        <span className='channel__nav-span'>Recommended channel</span>
                  </div>
              </div>
              <div className="channel__middle">
                  <Link className='channel__middle-link' to='/video/2'>
                      <img className='channel__middle-img' src={User} alt="user" />
                  </Link>
                  <div className='channel__middle-wrapper'>
                      <h4 className='channel__wrapper-title'>Choosing The Best Audio Player Software For Your Computer</h4>
                      <p className='channel__wrapper-text'>Your cheap internet-based banner advertising will become one of the sought for ads there are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles A common medium for advertising on the Internet is the use of banner ads. </p>
                      <span className='channel__wrapper-span'> {Math.round(Math.abs(Math.random()*100))} k views  ·  {Math.round(Math.abs(Math.random()*10))} days ago</span>
                  </div>
                  <div className='channel__middle-side'>
                      <ul className='channel__side-list'>
                          <li className='channel__side-item'>
                              <img className='channel__side-img' src={Benson} alt="Benson" />
                              <p className='channel__side-name'>Flora Benson</p>
                          </li>
                          <li className='channel__side-item'>
                              <img className='channel__side-img' src={Violet} alt="Violet" />
                              <p className='channel__side-name'>Violet Cobb</p>
                          </li>
                          <li className='channel__side-item'>
                              <img className='channel__side-img' src={Phillip} alt="Phillip" />
                              <p className='channel__side-name'>Phillip Mullins</p>
                          </li>
                      </ul>
                  </div>
              </div>
              <div className='channel__low'>
                <h3 className='channel__low-name'>Recommended</h3>
              
              <div className='channel__low-wrapper'>
                  <button type='button' className='suggestions__wrapper-btn'><BiChevronLeft className='suggestions__wrapper-icon'/></button>
                  <button type='button' className='suggestions__wrapper-btn'><BiChevronRight className='suggestions__wrapper-icon'/></button>
              </div>
              {photos.length > 0 && <ul className='channel__low-list'>
                    {photos.map((photo)=>(
                        <Link to='/video/2' className='channel__low-item' key={photo.id}>
                            <img className='channel__low-img' src={photo.url} alt="rasm"/>
                            <p className='channel__low-text'>{photo.title}</p> 
                            <div className='channel__low-content'>
                                <span className='channel__low-span'> {Math.round(Math.abs(Math.random()*100))} k views  ·  {Math.round(Math.abs(Math.random()*10))} days ago</span>
                                <span className='channel__low-span'>Dollie Blair</span>
                            </div>
                        </Link>
                    ))}
              </ul>}
          </div>
          </div>
    </section>
  )
}
export default Channel