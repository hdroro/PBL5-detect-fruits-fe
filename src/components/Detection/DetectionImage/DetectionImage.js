import { useRef } from "react";
import images from "../../../assets/images";
import { ChevLeftIcon, ChevRightIcon } from "../../Icon/Icon";
import "./DetectionImage.scss";

function DetectionImage({ images }) {
  const imageRef = useRef();
  // const changeSrcImage1 = () => {
  //   console.log("imaeg1");
  //   imageRef.current.src = `data:image/png;base64,${images.image1}`;
  // };
  const changeSrcImage = (image_path) => {
    console.log("image");
    imageRef.current.src = `data:image/png;base64,${image_path}`;
  };
  return (
    <div className="detection-image-container">
      <div className="top-content d-flex justify-content-between align-items-center">
        <div className="back-left">
          <ChevLeftIcon className="icon-action" />
        </div>
        <div className="image-detect-main">
          <img
            ref={imageRef}
            src={
              images &&
              `data:image/png;base64,${images["list_images"][0]["image_path"]}`
            }
            alt=""
          />
        </div>
        <div className="back-right">
          <ChevRightIcon className="icon-action" />
        </div>
      </div>
      <div className="bottom-content mt-4 d-flex justify-content-center gap-3">
        {images &&
          images["list_images"].map((item, index) => {
            return (
              <div
                key={index}
                className="image-detect-small"
                onClick={() => changeSrcImage(item["image_path"])}
              >
                <img
                  src={images && `data:image/png;base64,${item["image_path"]}`}
                  alt=""
                />
              </div>
            );
          })}
        {/* <div className="image-detect-small" onClick={changeSrcImage1}>
          <img
            src={images && `data:image/png;base64,${images.image1}`}
            alt=""
          />
        </div>
        <div className="image-detect-small" onClick={changeSrcImage2}>
          <img
            src={images && `data:image/png;base64,${images.image2}`}
            alt=""
          />
        </div> */}
      </div>
    </div>
  );
}

export default DetectionImage;
