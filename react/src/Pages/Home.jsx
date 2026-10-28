import React from 'react'
import './Home.css'
import img from '../Companent/img.png'
import img1 from '../Companent/img1.png'
import img2 from '../Companent/image.png'
import img3 from '../Companent/img2.png'
import img4 from '../Companent/img4.png'

const Home = () => {
  return (
    <div>

      <div className='afta'>
       <div>
         <h1>Enjoy studying <br />with Createx <br /> Online Courses</h1>
        <div className='bb'>
          <button className='but1'>About us</button>
          <button className='but'>Explore courses</button>
        </div>
       </div>
       <img src={img} alt="" />
      </div>

      <div className='after'>
        <img src={img1} alt="" />
        <div>
          <h5>Who we are</h5>
          <h1>Why Createx?</h1>
          <p>A fermentum in morbi pretium aliquam adipiscing donec tempus.</p>
          <p>Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</p>
          <p>Etiam duis lobortis in fames ultrices commodo nibh.</p>
          <p>Tincidunt sagittis neque sem ac eget.</p>
          <p>Ultricies amet justo et eget quisque purus vulputate dapibus tortor.</p>
          <button className='but'>More about us</button>

        </div>
      </div>

      <div className='hh'>
       <div>
         <h5>Ready to learn?</h5>
        <h1>Featured Courses</h1>
       </div>
        <div>
          <button>View all courses</button>
        </div>
      </div>

      <div className='carti'>
        <div className='card'>
          <img src={img2} alt="" />
          <div className='by'>
            <button>Marketing</button>
            <h5>The Ultimate Google Ads Training Course</h5>
            <p><span>$100</span>|by Jerome Bell</p>
          </div>
        </div>

        <div className='card'>
          <img src={img2} alt="" />
          <div className='by'>
            <button>Marketing</button>
            <h5>The Ultimate Google Ads Training Course</h5>
            <p><span>$100</span>|by Jerome Bell</p>
          </div>
        </div>
        <div className='card'>
          <img src={img2} alt="" />
          <div className='by'>
            <button>Marketing</button>
            <h5>The Ultimate Google Ads Training Course</h5>
            <p><span>$100</span>|by Jerome Bell</p>
          </div>
        </div>
        <div className='card'>
          <img src={img2} alt="" />
          <div className='by'>
            <button>Marketing</button>
            <h5>The Ultimate Google Ads Training Course</h5>
            <p><span>$100</span>|by Jerome Bell</p>
          </div>
        </div>
        <div className='card'>
          <img src={img2} alt="" />
          <div className='by'>
            <button>Marketing</button>
            <h5>The Ultimate Google Ads Training Course</h5>
            <p><span>$100</span>|by Jerome Bell</p>
          </div>
        </div>
        <div className='card'>
          <img src={img2} alt="" />
          <div className='by'>
            <button>Marketing</button>
            <h5>The Ultimate Google Ads Training Course</h5>
            <p><span>$100</span>|by Jerome Bell</p>
          </div>
        </div>
      </div>

      <div className='sh'>
        <h5 className='sh'>Our benefits</h5>
        <h1>That’s how we do it</h1>
      </div>

      <div className='dd'>
        <button>Experienced Tutors</button>
        <p>Feedback & Support</p>
        <p>24/7 Online Library</p>
        <p>Community</p>
      </div>

      <div className='jj'>
        <div>
          <h1>Only practicing tutors</h1>
        <p>Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula.</p>
        </div>
        <img className='ii' src={img3} alt="" />
      </div>
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

export default Home