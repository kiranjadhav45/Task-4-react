import { useState, useEffect } from "react";
import "./Thumbnail.css";
import axios from "axios";

const Thumbnail = () => {
  const [data, setData] = useState("");
  const [image, setImage] = useState(" ");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=50"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log(data);

  return (
    <div className="thumb-container">
      <div className="tumb row ">
        <div className="col-2 imagescroll ">
          {data && (
            <div className="row ">
              {data.photos.map((item) => {
                return (
                  <div
                    className="col my-2 text-center  "
                    onClick={() => setImage(item.url)}
                  >
                    <img
                      // className="img-fluid"
                      width={150}
                      src={item.url}
                      alt={item.title}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="col-10">
          <img className="img-fluid main-image" src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
