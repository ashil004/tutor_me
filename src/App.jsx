
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
                <h2 className="card-title text-white dark:text-black">Shoes!</h2>
                <p className='text-white dark:text-black'>If a dog chews shoes whose shoes does he choose?</p>
               
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
                <h2 className="card-title dark:text-white">Shoes!</h2>
                <p className='dark:text-white'>If a dog chews shoes whose shoes does he choose?</p>
               
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
                <h2 className="card-title text-white dark:text-black">Shoes!</h2>
                <p className='text-white dark:text-black'>If a dog chews shoes whose shoes does he choose?</p>
               
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
                <h2 className="card-title dark:text-white">Shoes!</h2>
                <p className='dark:text-white'>If a dog chews shoes whose shoes does he choose?</p>
               
              </div>
            </div>
            

          </div>
          

        </div>

      </div>

      {/* add to the fqu section */}
      <div className='my-12'>
        <div className="flex flex-col w-full lg:flex-row">
          <div className="grid flex-grow  card bg-violet-200 dark:bg-yellow-400  rounded-box place-items-center"><Lottie animationData={faq}></Lottie></div>
          <div className="divider lg:divider-horizontal"></div>
          <div className="grid flex-grow  card bg-violet-200 text-white rounded-box place-items-center dark:bg-yellow-400"><Fqu></Fqu></div>
        </div>
      </div>

      {/* add to the 2nd section  */}
      <div >

      </div>

    </>
  )
}

export default App
