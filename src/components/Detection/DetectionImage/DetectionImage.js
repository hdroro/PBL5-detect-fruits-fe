import images from "../../../assets/images";
import { ChevLeftIcon, ChevRightIcon } from "../../Icon/Icon";
import "./DetectionImage.scss";

function DetectionImage() {
  return (
    <div className="detection-image-container">
      <div className="top-content d-flex justify-content-between align-items-center">
        <div className="back-left">
          <ChevLeftIcon className="icon-action" />
        </div>
        <div className="image-detect-main">
          <img src={images.image_ex1} alt="" />
        </div>
        <div className="back-right">
          <ChevRightIcon className="icon-action" />
        </div>
      </div>
      <div className="bottom-content mt-4 d-flex justify-content-center gap-3">
        <div className="image-detect-small">
          <img src={images.image_ex2} alt="" />
        </div>
        <div className="image-detect-small">
          <img src={images.image_ex3} alt="" />
        </div>
      </div>
    </div>
  );
}

export default DetectionImage;
