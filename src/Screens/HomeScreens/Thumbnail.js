import { ThumbUpIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
 
export default function Thumbnail({ result }) {
  
  return (
    <div  className="group p-2 cursor-pointer transition duration-200 ease-in transform sm:hover:scale-x-105 hover:z-50">
      <Link to={`/details/${result._id}`}>
      <img
        layout="responsive"
        src={result.image}
        height="200px"
        width="300px"
      />
      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h1>{result.title}</h1>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          <p>20-21-2021</p>
          <ThumbUpIcon width="20px" />
        </p>
      </div></Link>
    </div>
  );
}
