 
import Api from "../../Axios/Api";

function Card(props: any) {
  const { data, setLoading } = props;

  const deleteBlog = async () => {
    const response = await Api.delete(`/product/delete/${data._id}`);
    console.log(response);
    setLoading(true);
  };

  return (
    <div className="m-10">
      <div className="bg-pink-100 text-black">
        <h1 className="text-gray-700 text-2xl">{data.title}</h1>
        <div className="flex">
          <img width="100px" src={data.image} alt="" />
          <button
            onClick={deleteBlog}
            className="bg-blue-900 text-white w-200px"
            type="submit"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
