
import Lottie from 'lottie-react'
import './App.css'
import Bannar from './assets/Bannar/Bannar'
import Fqu from './assets/Fqu/Fqu'
import faq from './faq.json'

function App() {



  return (
    <>


      <div className='my-6'>
        <Bannar></Bannar>
      </div>
      {/* add to the card section */}

      <div className='hero min-h-screen bg-gradient-to-r from-violet-200 to-yellow-200'  >

        <div className='contaner'>

          <div>
            
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
