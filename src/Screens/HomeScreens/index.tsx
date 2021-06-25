import  { useContext } from 'react'
 
import Thumbnail from './Thumbnail'
import 'tailwindcss/tailwind.css'
import { NavbarContext } from '../../Global/Context'

 

export default function HomeScreens() {
     const {data} = useContext(NavbarContext)
 
    return (
        <div className="px-5 my-10  sm:grid  md:grid-cols-2 xl:grid-cols-3">
            {data.map((result:any)=>(
                <Thumbnail   result={result}/>
            ))}
        </div>
    )
}