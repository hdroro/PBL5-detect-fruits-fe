import { useState } from "react";
import images from "../../../assets/images";
import { ChevLeftIcon, ChevRightIcon } from "../../Icon/Icon";
import "./DetectionImage.scss";

function DetectionImage() {
  const [listImagesCapture, setListImagesCapture] = useState({
    main: {
      image: images.image_ex1,
    },
    second: [
      {
        image: images.image_ex2,
      },
      {
        image: images.image_ex3,
      },
    ],
  });

  // const handleBackImage = () => {
  //   setListImagesCapture((prevState) => {
  //     const currentMainIndex = Object.keys(prevState).indexOf("main");
  //     if (currentMainIndex > 0) {
  //       const newIndex = currentMainIndex - 1;
  //       const newMainKey = Object.keys(prevState)[newIndex];
  //       return {
  //         ...prevState,
  //         main: prevState[newMainKey],
  //       };
  //     }
  //     return prevState;
  //   });
  // };

  // const handleIncreaseImage = () => {
  //   setListImagesCapture((prevState) => {
  //     const keys = Object.keys(prevState);
  //     const currentMainIndex = keys.indexOf("main");
  //     if (currentMainIndex < keys.length - 1) {
  //       const newIndex = currentMainIndex + 1;
  //       const newMainKey = keys[newIndex];
  //       return {
  //         ...prevState,
  //         main: prevState[newMainKey],
  //       };
  //     }
  //     return prevState;
  //   });
  // };

  return (
    <div className="detection-image-container">
      <div className="top-content d-flex justify-content-between align-items-center">
        <div className="back-left">
          <ChevLeftIcon
            className="icon-action"
            // onClick={() => handleBackImage()}
          />
        </div>
        <div className="image-detect-main">
          <img src={listImagesCapture?.main?.image} alt="" />
        </div>
        <div className="back-right">
          <ChevRightIcon
            className="icon-action"
            // onClick={() => handleIncreaseImage()}
          />
        </div>
      </div>
      <div className="bottom-content mt-4 d-flex justify-content-center gap-3">
        {listImagesCapture?.second?.map((item, index) => (
          <>
            <div className="image-detect-small">
              <img src={item.image} alt="" />
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default DetectionImage;
