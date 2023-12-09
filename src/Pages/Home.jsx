// import React from 'react'
import AuthImg from '../assets/Auth.png'
function Home() {
  return (
    <div className="flex justify-center gap-2 items-center min-w-full min-h-min">
      <div className=" min-h-screen p-12 w-fit flex gap-4 flex-col justify-center items-start ">
        <h1 className='font-bold text-6xl'>MERN Auth Web App With <span className='text-red-500 uppercase underline'>JSON WebToken</span></h1>
        <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In facere sequi praesentium error veniam doloremque deserunt mollitia fugiat inventore. Cumque nam aut distinctio voluptas blanditiis optio ut sit ipsa modi.
        Necessitatibus quae, porro numquam molestiae modi vero facere nostrum, dolores cum sunt delectus a aperiam consequatur aliquam, quis recusanda</p>

        <button className='rounded-md p-4 hover:bg-gray-400 text-white font-bold bg-gray-700 hover:scale-95 '>Download CV</button>
      </div>
      <div className="">
        <img src={AuthImg} alt="" className=''/>
      </div>

    </div>
  )
}

export default Home