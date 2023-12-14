import {Link} from 'react-router-dom'

function SignUp() {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <form action="" className='flex h-[450px] flex-col border-2 p-4 justify-around rounded-lg'>
        <div className="Name_input_box flex flex-col  justify-start">
          <label htmlFor=""  className='text-gray-700 font-bold'>Name:</label>
          <input type="text"
          required
           className='border-b-2 outline-none focus-within:border-green-500 focus-within:border-2 rounded-md px-2 font-medium  h-10 w-80' />
        </div>
        <div className="Name_input_box flex flex-col  justify-start">
          <label htmlFor="" className='text-gray-700 font-bold'>Email:</label>
          <input type="email"
           required
           className='border-b-2 outline-none focus-within:border-green-500 focus-within:border-2 rounded-md px-2 font-medium  h-10' />
        </div>
        <div className="Name_input_box flex flex-col justify-start">
          <label htmlFor="" className='text-gray-700 font-bold'>Password:</label>
          <input type="password"
          required
           className='border-b-2 outline-none focus-within:border-green-500 focus-within:border-2 rounded-md px-2 font-medium  h-10' />
        </div>
        <div className="Name_input_box flex flex-col justify-start">
          <label htmlFor="" className='text-gray-700 font-bold'>Confirm Password:</label>
          <input type="password"
          required 
          className='border-b-2 outline-none focus-within:border-green-500 focus-within:border-2 rounded-md px-2 font-medium  h-10' />
        </div>
        <button type="submit" 
        className='px-4 bg-red-400 hover:bg-red-300 text-white font-bold py-2 rounded-md my-4 '
        >Sign Up
        </button>
       <p>Already a User?  
        <Link to='/sign' className='text-blue-500 font-medium underline '>
          SignIn
        </Link>
       </p>
      </form>
    </div>
  )
}

export default SignUp