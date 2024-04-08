import ContainerWrapper from "../ContainerWrapper/ContainerWrapper";
import "./Detection.scss";
import DetectionImage from "./DetectionImage/DetectionImage";
import ListResultDetection from "./ListResultDetection/ListResultDetection";

import database from "../../config/firebaseConfig";
import { useEffect, useState } from "react";
import { getDatabase, ref, child, get, onValue } from "firebase/database";

function Detection() {
  const [images, setImages] = useState([]);
  const [latestImage, setLatestImage] = useState(null);

  useEffect(() => {
    const dbRef = ref(database);

    onValue(dbRef, (sns) => {
      get(child(dbRef, "images_info"))
        .then((snapshot) => {
          if (snapshot.exists()) {
            const imageData = snapshot.val();
            if (imageData) {
              const imageList = Object.values(imageData);
              setImages(imageList);

              // Lấy hình ảnh mới nhất từ danh sách
              const latestImageData = imageList[imageList.length - 1];
              setLatestImage(latestImageData);
            } else {
              setImages([]);
              setLatestImage(null);
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, []);

  console.log(images);
  console.log(latestImage);

  return (
    <div className="detection-container pt-5 pb-3">
      <div className="container mt-5">
        <div className="row">
          <div class="col-lg-9 col-md-9 col-sm-12">
            <ContainerWrapper>
              <div className="p-4 pb-0">
                <div className="time-detection text-center mb-4 ">
                  <span className="fst-italic">
                    Thời gian nhận diện: {latestImage && latestImage.time}
                  </span>
                </div>
                <DetectionImage images={latestImage && latestImage} />
                <div className="final-result text-center mt-3">
                  <b>Kết quả: </b>
                  {latestImage && latestImage.status}
                </div>
              </div>
            </ContainerWrapper>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-0">
            <ContainerWrapper>
              <ListResultDetection data={images} />
            </ContainerWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detection;
