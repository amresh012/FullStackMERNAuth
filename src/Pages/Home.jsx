// import React from 'react'
import AuthImg from '../assets/Auth.png'
function Home() {
  return (
    <div className="flex justify-center gap-2 items-center border-2 min-w-full min-h-screen">
      <div className=" min-h-screen p-12 w-fit flex flex-col justify-center items-center ">
        <h1 className='font-bold text-6xl'>MERN Authentication With <span>JSON</span> WebToken</h1>
        <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In facere sequi praesentium error veniam doloremque deserunt mollitia fugiat inventore. Cumque nam aut distinctio voluptas blanditiis optio ut sit ipsa modi.
        Necessitatibus quae, porro numquam molestiae modi vero facere nostrum, dolores cum sunt delectus a aperiam consequatur aliquam, quis recusanda</p>
      </div>
      <div className="">
        <img src={AuthImg} alt="" className=''/>
      </div>
    </div>
  )
}

export default Home