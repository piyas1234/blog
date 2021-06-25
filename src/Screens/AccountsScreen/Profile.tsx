import React from 'react'

function Profile(props:any) {
    const {data} = props
    return (
        <div>
            <h1 className="text-center font-medium text-3xl">Profile Page</h1>
               <button onClick={()=>data({})} className="text-center m-auto p-2 bg-red-700 text-yellow-50 " type="submit">Logout</button>
        </div>
    )
}

export default Profile
