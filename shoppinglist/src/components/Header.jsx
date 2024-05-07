import React from 'react'
import ProfileImg from '../assets/home.png'

const Header = () => {
  return (
    <>
    <header>
        <h1>musa's shopping list</h1>
        <div className="profile_image">
            <img src={ProfileImg} alt="profile" />
        </div>
    </header>
     <hr />
    </>
  )
}

export default Header