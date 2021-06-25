import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Api from '../../Axios/Api'
import { NavbarContext } from '../../Global/Context'

const  BlogDetailsScreen=()=>{
    const [data, setData]:any = useState([])
    const id:any = useParams()
    
    useEffect(() => {
        ServerRequest()
    }, [])

    const ServerRequest = async ()=>{
        const Productdata = await Api.get(`/product/${id.id}`)
        setData(Productdata.data[0])
    }
    
    return (
        <div>
             <p className=" font-extrabold text-3xl">{data.title}</p>
             <img src={data.image} alt=""   />
             <p>{data.description}</p>
        </div>
    )
}

export default BlogDetailsScreen