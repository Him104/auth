import React, {useState} from 'react'
import axios from 'axios'
const Login = () => {

    const [email, setEmail] = useState()
const [password, setPassword] = useState()

const handlesubmit = () => {

    const payload = {
email:email,
password:password

    }

    console.log(payload)




axios.post("https://api.escuelajs.co/api/v1/auth/login", payload)
.then((res) => {

localStorage.setItem("token", JSON.stringify(res.data.access_token) )

    console.log("Login success", res)
})
.catch((err) => {
console.log("Login failed", err)
})
}
  return (
    <div className='bg-sky-200 space-y-4 rounded-md shadow-md m-10 w-64'>

        <p className='font-semibold text-lg text-center'>Login Page</p>

        <div>
            <p>Email</p>
            <input onChange={(e) =>setEmail(e.target.value)} type='email' className='border rounded-md shadow-md'></input>

            <p>Password</p>
            <input onChange={(e)=>setPassword(e.target.value)} type='password' className='border rounded-md shadow-md'></input>

        </div>
        <div className="flex justify-center">


        <button onClick={handlesubmit} className='bg-yellow-500 px-4 py-1 rounded-md text-white text-center'>Login</button>



        </div>


    </div>
  )
}

export default Login