import axios from "axios";
import React, { useState } from "react";
import Api from "../../Axios/Api";

function CreatePosts() {
  const [msg, setMsg] = useState("");
  const [Auth, setAuth] = useState({});
  const [photoUrl, setPhotoUrl] = useState("");
  const [formData, setFormData] = useState({
    title: null,
    image: null,
    description: null,
  });
  const onchangeHandler = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };
  console.log(formData);

  const onChangeHandler = (event: any) => {
    const image = event.target.files[0];
    console.log(image);
    const imageData = new FormData();
    imageData.set("key", "292e93baf139ef4fb8b9f89680c2dc9a");
    imageData.append("image", image);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then((response) => {
        // setPhotoUrl(response.data.data.display_url);
        setFormData({ ...formData, image: response.data.data.display_url });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSubmit = async () => {
    if (
      formData.title === null ||
      formData.image === null ||
      formData.description === null
    ) {
      return setMsg("Fill all the fields");
    }
    const User = await Api.post(`/product`, formData);
    setAuth(User.data);
    setMsg("");
  };

  console.log(Auth);
  return (
    <div>
      {msg && (
        <div className="text-pink-600 text-center bg-green-400 p-2">{msg}</div>
      )}

      <form className="m-auto text-center" action="" method="post">
        <input
          className="w-3/4 m-5   bg-gray-200  p-2 text-black"
          placeholder="title"
          type="text"
          name="title"
          id=""
          onChange={onchangeHandler}
        />
        <input
          className="w-3/4 m-5   bg-gray-200  p-2"
          type="file"
          name="image"
          id=""
          onChange={onChangeHandler}
        />

        <textarea
          className="w-3/4 m-5 bg-gray-200 p-2 text-black"
          name="description"
          placeholder="Description....."
          id=""
          onChange={onchangeHandler}
        />

        <input
          className="w-3/4 m-5 bg-purple-700 text-white p-2 border-r-3"
          type="button"
          value="Create Post"
          onClick={onSubmit}
        />
      </form>
    </div>
  );
}

export default CreatePosts;
