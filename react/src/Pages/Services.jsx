import React from 'react'
import './Services.css'
import img4 from '../Companent/img4.png'





const Services = () => {
  return (
    <div>
      <div className='hh'>
       <div>
         <h5>Our blog</h5>
        <h1>Latest posts</h1>
       </div>
        <div>
          <button>Go to blog</button>
        </div>
      </div>

      <div className='kard'>
        <div className='kart'>
          <img src={img4} alt="" />
          <div className='byi'>
          <p>Marketing September 4, 202036 min</p>
          <h5>What is traffic arbitrage and does it really make money?</h5>
          <p>Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...</p>
          <h6>Listen</h6>
          </div>
        </div>

         <div className='kart'>
          <img src={img4} alt="" />
          <div className='byi'>
          <p>Marketing September 4, 202036 min</p>
          <h5>What is traffic arbitrage and does it really make money?</h5>
          <p>Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...</p>
          <h6>Listen</h6>
          </div>
        </div>

         <div className='kart'>
          <img src={img4} alt="" />
          <div className='byi'>
          <p>Marketing September 4, 202036 min</p>
          <h5>What is traffic arbitrage and does it really make money?</h5>
          <p>Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...</p>
          <h6>Listen</h6>
          </div>
        </div>
      </div>

      <div className='kk'>
          <h5 className='hh1'>Don’t miss anything</h5>
        <h1 className='hh1'>Subscribe to the Createx School announcements</h1>
       <div className='oo'>
         <input type="email" name="" id=""  placeholder='Your working email'/>
        <button>Subscribe</button>
       </div>
      </div>


    </div>
  )
}

export default Services