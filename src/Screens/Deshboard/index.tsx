import React, { useContext } from 'react'
import { NavbarContext } from '../../Global/Context'
import Card from './Card'
 
function Deshboard() {
    const {data , setLoading} = useContext(NavbarContext)

    return (
        <div>
            {data.map((item:any)=><Card setLoading={setLoading} data={item} />)}
        </div>
    )
}

export default Deshboard
