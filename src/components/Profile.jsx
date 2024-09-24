import axios from "axios"
import { useState } from "react"

const Profile = () => {

    const [userData, setUserData] = useState()

const getProfileData = () => {

const token = JSON.parse(localStorage.getItem('token'))

const header = {

    headers : {
"Authorization": `Bearer ${token}`


    }


}


    axios.get("https://api.escuelajs.co/api/v1/auth/profile", header)
.then((res) => {

setUserData(res.data)
    console.log("profile data", res)
})
.catch((err) => {
console.log("Error occured", err)
})
}


const handleLogout = () => {
    setUserData()
localStorage.removeItem('token');


alert("Logout succcess")

}




  return (

    <div>
<button onClick={getProfileData}>Profile data Get</button>
<button onClick={handleLogout}>Logout</button>

{ userData &&
<div>

<p>Name: {userData?.name} </p>
<p>Email: {userData?.email} </p>
<p>Role: {userData.role} </p>
<img className="rounded-full h-30 w-30" src={userData.avatar}/>


</div>

}
    </div>
  )
}

export default Profile