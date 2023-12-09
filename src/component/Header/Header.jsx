import {Link} from 'react-router-dom'
function Header() {
  return (
    <div className="flex justify-around p-4 bg-gray-700 items-center">
        <div className="logo text-white font-bold text-2xl">
            <Link to="/" className='flex'>
                <div className="h-4 w-4 rounded-full bg-red-500 opacity-75"></div>
            <h1 className="">MERN<span className="text-red-500">Auth-App</span></h1>
            </Link>
        </div>
        <div className="flex gap-12 font-medium text-red-500 text-md items-center">
            <Link to="/">
            <a href="#">Home</a>
            </Link>
            <Link to="/about">
            <a href="#">About</a>
            </Link>
            <Link to="/Sign" className='border-2 px-2 py-1 bg-white rounded-md'>
            <a href="#">Sign In</a>
            </Link>
        </div>
    </div>
  )
}

export default Header