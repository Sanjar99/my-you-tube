import './Player.scss';
import { useEffect, useState } from 'react'
//icons//
import {MdMoreHoriz} from 'react-icons/md'
import {AiTwotoneLike} from 'react-icons/ai'
import {AiTwotoneDislike} from 'react-icons/ai'
import {IoMdShareAlt} from 'react-icons/io'
//img//
import Logo from './../../assest/img/foodLogo.png'
function Player () {
  const [photos, setPhotos] = useState([])
    
  useEffect(() => {
      
      fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")
          .then((res) => res.json())
          .then((data) => setPhotos(data));

  }, [])
  return (
    <div className='player'>
        <div className='player__left'>
              <div className='player__left-wrapper'>
              <iframe className='player__wrapper-video' width={560} height={315} src="https://www.youtube.com/embed/1CR0QmCaMTs" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />


                    <h4 className='player__wrapper-subject'>Dude You Re Getting A Telescope</h4>
                 <div className='player__wrapper-content'>
                    <span className='player__content-span'>123k views</span>
                    <span className='player__content-span'><AiTwotoneLike/>123k</span>
                    <span className='player__content-span'><AiTwotoneDislike/>435k</span>
                    <span className='player__content-span'><IoMdShareAlt/>Share</span>
                    <MdMoreHoriz className='player__content-more'/>
                  </div>
              </div>
              <div className='player__left-lower'>
                  <img className='player__lower-img' src={Logo} alt="logo" />
                  <div className='player__lower-wrapper'>
                      <h4 className='player__wrapper-title'>Food & Drink</h4>
                      <span className='player__wrapper-span'>Published on 14 Jun 2019</span>
                      <p className='player__wrapper-text'>A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad. </p>
                      <button className='player__wrapper-btn'>Show more</button>
                  </div>
                  <button className='player__lower-btn' type='button'>Subscribe 2.3m</button>
              </div>
        </div>





      <div className='player__side'>
          <div className='player__side-top'>
              <p className='player__top-text'>Next</p>
              <p className='player__top-auto'>AUTOPLAY </p>
              <button className='player__top-btn' onClick={()=>{
                document.querySelector(".player__top-span").classList.toggle('player__top-span--active');
              }}>
                  <span className='player__top-span'></span>
              </button>
          </div>
          {photos.length > 0 && <ul className='player__side-list'>
                    {photos.map((photo)=>(
                        <li className='player__side-item' key={photo.id}>
                            <img className='player__side-img' src={photo.url} alt="rasm"/>
                            <p className='player__side-text'>{photo.title}</p> 
                            <div className='player__side-content'>
                                <span className='player__side-span'> {Math.round(Math.abs(Math.random()*100))} k views  ·  {Math.round(Math.abs(Math.random()*10))} days ago</span>
                                <span className='player__side-span'>Dollie Blair</span>
                            </div>
                        </li>
                    ))}
              </ul>}
      </div>

    </div>
  ) 
}
export default Player
