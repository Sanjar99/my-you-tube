import './Suggestions.scss'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// img//
import Dollie from './../../assest/img/Dollie.png'
import FoodLogo from './../../assest/img/foodLogo.png'
// icon //
import {BiChevronLeft} from 'react-icons/bi'
import {BiChevronRight} from 'react-icons/bi'


function Suggestions () {
    const [photos, setPhotos] = useState([])
    
    useEffect(() => {
        
        fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")
            .then((res) => res.json())
            .then((data) => setPhotos(data));

    }, []);
    
  return (
      <div className='suggestions'>
          <div className='suggestions__top'>
              <Link to='/channel' className='suggestions__top-link'>
                  <img src={Dollie} alt="Dollie" className='suggestions__link-img'/>
                  <h3 className='suggestions__link-name'>Dollie Blair</h3>
              </Link>
              <div className='suggestions__top-wrapper'>
                  <button type='button' className='suggestions__wrapper-btn'><BiChevronLeft className='suggestions__wrapper-icon'/></button>
                  <button type='button' className='suggestions__wrapper-btn'><BiChevronRight className='suggestions__wrapper-icon'/></button>
              </div>
              {photos.length > 0 && <ul className='suggestions__top-list'>
                    {photos.map((photo)=>(
                        <Link to='/video/2' className='suggestions__top-item' key={photo.id}>
                            <img className='suggestions__top-img' src={photo.url} alt="rasm"/>
                            <p className='suggestions__top-text'>{photo.title}</p> 
                            <div className='suggestions__top-content'>
                                <span className='suggestions__top-span'> {Math.round(Math.abs(Math.random()*100))} k views  ·  {Math.round(Math.abs(Math.random()*10))} days ago</span>
                                <span className='suggestions__top-span'>Dollie Blair</span>
                            </div>
                        </Link>
                    ))}
              </ul>}
          </div>
          <div className='suggestions__middle'>
                <h3 className='suggestions__middle-name'>Recommended</h3>
              
              <div className='suggestions__middle-wrapper'>
                  <button type='button' className='suggestions__wrapper-btn'><BiChevronLeft className='suggestions__wrapper-icon'/></button>
                  <button type='button' className='suggestions__wrapper-btn'><BiChevronRight className='suggestions__wrapper-icon'/></button>
              </div>
              {photos.length > 0 && <ul className='suggestions__middle-list'>
                    {photos.map((photo)=>(
                        <Link to='/video/2' className='suggestions__middle-item' key={photo.id}>
                            <img className='suggestions__middle-img' src={photo.url} alt="rasm"/>
                            <p className='suggestions__middle-text'>{photo.title}</p> 
                            <div className='suggestions__middle-content'>
                                <span className='suggestions__middle-span'> {Math.round(Math.abs(Math.random()*100))} k views  ·  {Math.round(Math.abs(Math.random()*10))} days ago</span>
                                <span className='suggestions__middle-span'>Dollie Blair</span>
                            </div>
                        </Link>
                    ))}
              </ul>}
          </div>
          <div className='suggestions__low'>
              <Link to='/channel' className='suggestions__low-link'>
                  <img src={FoodLogo} alt="FoodLogo" className='suggestions__link-img'/>
                  <h3 className='suggestions__link-name'>Food & Drink</h3>
                  <span className='suggestions__link-span'>Recommended channel for you</span>
              </Link>
              <button type='button' className='suggestions__btn'>Subscribe 2.3m</button>
              <div className='suggestions__low-wrapper'>
                  <button type='button' className='suggestions__wrapper-btn'><BiChevronLeft className='suggestions__wrapper-icon'/></button>
                  <button type='button' className='suggestions__wrapper-btn'><BiChevronRight className='suggestions__wrapper-icon'/></button>
              </div>
              {photos.length > 0 && <ul className='suggestions__low-list'>
                    {photos.map((photo)=>(
                        <Link to='/video/2' className='suggestions__low-item' key={photo.id}>
                            <img className='suggestions__low-img' src={photo.url} alt="rasm"/>
                            <p className='suggestions__low-text'>{photo.title}</p> 
                            <div className='suggestions__low-content'>
                                <span className='suggestions__low-span'> {Math.round(Math.abs(Math.random()*100))} k views  ·  {Math.round(Math.abs(Math.random()*10))} days ago</span>
                                <span className='suggestions__low-span'>Dollie Blair</span>
                            </div>
                        </Link>
                    ))}
              </ul>}
          </div>
     </div>

  )
}

export default Suggestions