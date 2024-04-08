import { useRef, useState } from "react";
import {
  Checkicon,
  ChevDownIcon,
  ChevRightIcon,
  CloseIcon,
} from "../../Icon/Icon";
import "./ListResultDetection.scss";
import ResultItem from "./ResultItem";

function ListResultDetection({ data }) {
  const [isToggleListResult, setIsToggleResult] = useState(true);

  const handleToggleListResult = () => {
    setIsToggleResult(!isToggleListResult);
  };
  return (
    <div className="list-results-container">
      <div
        className="title-results d-flex gap-2 justify-content-center align-items-center"
        onClick={() => handleToggleListResult()}
      >
        <span>Kết quả nhận diện</span>{" "}
        {isToggleListResult ? (
          <ChevDownIcon />
        ) : (
          <ChevRightIcon width="20" height="20" color="#e8b12d" />
        )}
      </div>
      {isToggleListResult && data ? (
        <div className="list-results mt-3">
          {/* <ResultItem leftIcon={<Checkicon color="#15CB53" />}>
            <div className="d-flex flex-column">
              <span className="text-start">Đạt</span>
              <span className="time">17:50:13 21-02-2024</span>
            </div>
          </ResultItem>
          <ResultItem leftIcon={<CloseIcon color="#E81919" />}>
            <div className="d-flex flex-column">
              <span className="text-start">Không đạt</span>
              <span className="time">17:50:13 21-02-2024</span>
            </div>
          </ResultItem> */}
          {data.map((item, index) => {
            return (
              <ResultItem leftIcon={<Checkicon color="#15CB53" />}>
                <div className="d-flex flex-column">
                  <span className="text-start">{item.status}</span>
                  <span className="time">{item.time}</span>
                </div>
              </ResultItem>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ListResultDetection;
