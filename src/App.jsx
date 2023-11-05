
import Lottie from 'lottie-react'
import './App.css'
import Bannar from './assets/Bannar/Bannar'
import Fqu from './assets/Fqu/Fqu'
import faq from './faq.json'
import { BsFillBookmarksFill } from 'react-icons/bs';
import { FaMedal } from 'react-icons/fa';
import { MdEmojiEvents} from 'react-icons/md';
import { GiAerialSignal} from 'react-icons/gi';

import 'aos/dist/aos.css';
import Marquee from "react-fast-marquee";
import AOS from 'aos';
AOS.init();

function App() {



  return (
    <>


      <div className='my-6'>
        <Bannar></Bannar>
      </div>
      {/* add to the card section */}

      <div className='hero min-h-screen bg-gradient-to-r from-violet-200 to-yellow-200'  >

        <div className='grid  md:grid-cols-4 gap-4'data-aos="zoom-in">

          <div className='color1 mt-16'>
            <div className="card w-60 bg-violet-600 dark:bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <div className="rounded-full btn btn-circle">
                  <BsFillBookmarksFill className='text-2xl'></BsFillBookmarksFill>

                </div>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-white dark:text-black">Interactive Courses</h2>
                <p className='text-white dark:text-black'>Engaging multimedia courses with quizzes and discussions.</p>
               
              </div>
            </div>
            

          </div>
          <div className='color2'>
            <div className="card w-60 bg-base-100 dark:bg-violet-600 shadow-xl">
              <figure className="px-10 pt-10">
                <div className="rounded-full btn btn-circle">
                  <FaMedal className='text-2xl'></FaMedal>

                </div>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title dark:text-white">Personalized Learning Paths</h2>
                <p className='dark:text-white'>Tailored study plans and progress tracking.</p>
               
              </div>
            </div>
            

          </div>
          <div className='color3 mt-10'>
            <div className="card w-60 bg-violet-600 dark:bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <div className="rounded-full btn btn-circle">
                  <GiAerialSignal className='text-2xl'></GiAerialSignal>

                </div>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-white dark:text-black">Live Tutoring or Office Hours</h2>
                <p className='text-white dark:text-black'> Real-time support from tutors or instructors.</p>
               
              </div>
            </div>
            

          </div>
          <div className='color4'>
            <div className="card w-60 bg-base-100 dark:bg-violet-600 shadow-xl">
              <figure className="px-10 pt-10">
                <div className="rounded-full btn btn-circle">
                  <MdEmojiEvents className='text-2xl'></MdEmojiEvents>

                </div>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title dark:text-white">Community and Discussion Forums</h2>
                <p className='dark:text-white'> Interactive space for student collaboration and questions.</p>
               
              </div>
            </div>
            

          </div>
          

        </div>

      </div>

      {/* add to the fqu section */}
      <div className='my-12' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
        <div className="flex flex-col w-full lg:flex-row">
          <div className="grid flex-grow  card bg-violet-200 dark:bg-yellow-400  rounded-box place-items-center"><Lottie animationData={faq}></Lottie></div>
          <div className="divider lg:divider-horizontal"></div>
          <div className="grid flex-grow  card bg-violet-200 text-white rounded-box place-items-center dark:bg-yellow-400"><Fqu></Fqu></div>
        </div>
      </div>

      {/* add to the 2nd section  */}
      <div >
        <Marquee className=' m-6' speed={50} pauseOnHover={true} gradientWidth={200} direction='left' loop={0} autoFill={true} children>

        <img className='w-60 h-60 p-8 hover:-translate-y-6' src='https://i.ibb.co/KrBdhX3/pexels-keira-burton-6146978.jpg' />
        <img className='w-60 h-60 p-8 hover:-translate-y-6' src='https://i.ibb.co/2szSKLK/pexels-katerina-holmes-5905931.jpg' />
        <img className='w-60 h-60 p-8 hover:-translate-y-6' src='https://i.ibb.co/zmhbdh5/pexels-william-fortunato-6140610.jpg' />
        <img className='w-60 h-60 p-8 hover:-translate-y-6' src='https://i.ibb.co/SRSZtrg/pexels-monstera-production-6281919.jpg' />
        <img className='w-60 h-60 p-8 hover:-translate-y-6' src='https://i.ibb.co/brjLVJV/pexels-william-fortunato-6140707.jpg' />
        <img className='w-60 h-60 p-8 hover:-translate-y-6' src='https://i.ibb.co/VMQTVpZ/pexels-armin-rimoldi-5553051.jpg' />
        <img className='w-60 h-60 p-8 hover:-translate-y-6' src='https://i.ibb.co/Tqk8YKS/pexels-vanessa-loring-7869245.jpg' />
        <img className='w-60 h-60 p-8 hover:-translate-y-6' src='https://i.ibb.co/LNd4YTT/pexels-armin-rimoldi-5553069.jpg' />
        <img className='w-60 h-60 p-8 hover:-translate-y-6' src='https://i.ibb.co/SydZZjQ/pexels-marta-wave-6437494.jpg' />

        </Marquee>

      </div>

    </>
  )
}

export default App
