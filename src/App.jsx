import ModalImage from "react-modal-image";
import React, { useEffect, useState } from 'react'
import "./PixabayClone/App.css"

const App = () => {
  const[data,setData]=useState([])
  const[imagepath,setImagepath]=useState()
  const[search,setSearch]=useState("")
  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=27465062-827a40ce7a6d1f80fc3a6743e&q=${search}&image_type=photo`)
    .then(res=>res.json())
    .then(d=>setData(d.hits))


  })
  return (
    <section>
      <div className="top">
      <nav className='navbar'>
        <div className="logo">
          <p>Pixabay</p>
        </div>
      
      <div className="buttons">
        <span className='btn expup'>Explore<i className='fa fa-angle-down'></i></span>
        <span className='btn'>Log In</span>
        <span className='btn'>Join</span>
        <span className='btn2 btn expup'><i className='fa fa-upload'></i>&nbsp;&nbsp;Upload</span>
        </div>
      
       
      </nav>
      <div className="home">
      <div className="inner">
      <h1>Stunning royalty-free images & royalty-free stock</h1>
      <h2>Over 4.2 million+ high quality stock images, videos and music shared by our talented community.</h2>
      <span className="searchbar">
        <span><i className='fa fa-search'></i></span>
        <span><input type="text" placeholder="Search for all images on Pixabay" onChange={(e)=> setSearch(e.target.value)}></input></span>

        <span className='btn'  id='allimg' >All images<i className='fa fa-angle-down'></i></span>
      </span>
      </div>
      </div>
      <span className="bottom">
        <span>Read more about the Content License</span>
        <span>Free image by Mylene2401</span>
      </span>
      </div>
      <div className="category">
        <div className="div1">
          <span className="btn3"><i className='fa fa-home'></i>&nbsp;&nbsp; Home</span>
          <span className="btn3"><i className='fa fa-camera'></i>&nbsp;&nbsp; Photos</span>
          <span className="btn3"><i class="fa-solid fa-paintbrush"></i>&nbsp;&nbsp; Illustrations</span>
          <span className="btn3"><i class="fa-solid fa-pen-nib"></i>&nbsp;&nbsp; Vectors</span>
          <span className="btn3"><i class="fa-solid fa-video"></i>&nbsp;&nbsp; Videos</span>
          <span className="btn3"><i class="fa-solid fa-music"></i>&nbsp;&nbsp; Music</span>
          <span className="btn3"><i className="fa-solid fa-bars-staggered"></i>&nbsp;&nbsp; Sound Effects</span>
          <span className="btn3"><i className="fa-solid fa-fire-flame-curved"></i>&nbsp;&nbsp; GIFs</span>
        </div>
        <div className="div2">
          <span className="btn4">nature</span>
          <span className="btn4">background</span>
          <span className="btn4">sky</span>
          <span className="btn4">christmas</span>
          <span className="btn4">cat</span>
          <span className="btn4">winter</span>
          <span className="btn4">food</span>
          <span className="btn4">love</span>
          <span className="btn4">forest</span>
          <span className="btn4">flower</span>
          <span className="btn4">snow</span>
          <span className="btn4">flowers</span>
          <span><i className="fa-solid fa-chevron-right"></i></span>
          <span><i className="fa-solid fa-gear"></i></span>
          <span className="btn4">Editor's Choice&nbsp;&nbsp;<i className="fa-solid fa-angle-down"></i></span>

        </div>
      </div>
     
    <div className="photo grid gap-3 sm:grid-cols-2 md:grid-cols-3 ">
      
      {
        data.map((x)=>{
          return(
            <div className="pixiimg" key={x.id} onClick={()=>{
              setImagepath(x.webformatURL)
            }}>
              
              <img src={x.webformatURL} height={x.webformatHeight} width={x.webformatWidth}></img>
              

            </div>
            

            
          )
        })
      }

      
    </div>
    <div className="popup-image" style={{display:imagepath? 'block' : 'none'}}>
      <span onClick={()=>setImagepath(null)}>&times;</span>
      {
        <img src={imagepath}/>
      }

    </div>
    </section>
  )
}

export default App