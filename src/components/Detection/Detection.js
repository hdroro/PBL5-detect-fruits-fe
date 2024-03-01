import ContainerWrapper from "../ContainerWrapper/ContainerWrapper";
import "./Detection.scss";
import DetectionImage from "./DetectionImage/DetectionImage";
import ListResultDetection from "./ListResultDetection/ListResultDetection";

function Detection() {
  return (
    <div className="detection-container pt-5 pb-3">
      <div className="container">
        <div className="row">
          <div class="col-lg-9 col-md-9 col-sm-12">
            <ContainerWrapper>
              <div className="p-4 pb-0">
                <div className="time-detection text-center mb-4 ">
                  <span className="fst-italic">
                    Thời gian nhận diện: 17:50:13 21-02-2024
                  </span>
                </div>
                <DetectionImage />
                <div className="final-result text-center mt-3">
                  <b>Kết quả: </b>Đạt
                </div>
              </div>
            </ContainerWrapper>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-0">
            <ContainerWrapper>
              <ListResultDetection />
            </ContainerWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detection;
