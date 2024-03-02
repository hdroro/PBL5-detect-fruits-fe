import ContainerWrapper from "../ContainerWrapper/ContainerWrapper";
import {
  DoubleCheckIcon,
  FilterIcon,
  FruitIcon,
  IncreaseIcon,
} from "../Icon/Icon";
import ColumnChart from "./ColumnChart";
import PieChart from "./PieChart";
import "./Statistic.scss";

function Statistic() {
  return (
    <div className="statistic-container pt-4">
      <div className="container">
        <div className="filer d-flex align-items-center gap-2">
          <FilterIcon />
          <div className="lg-2">
            <select className="form-select w-2">
              <option selected>--Chọn--</option>
              <option value="1">Ngày</option>
              <option value="2">Tuần</option>
              <option value="3">Tháng</option>
              <option value="4">Năm</option>
            </select>
          </div>
        </div>

        <div className="cell-statistics mt-3">
          <div className="row">
            <div className="col-lg-4 col-sm-6 ">
              <div className="card-box bg-total">
                <div className="inner">
                  <h3>17777</h3>
                  <p>
                    <b>Tổng</b> số quả
                  </p>
                </div>
                <div className="icon">
                  <FruitIcon className="icon-i" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 ">
              <div className="card-box bg-ok">
                <div className="inner">
                  <h3>67%</h3>
                  <p>
                    Tỉ lệ <b>ĐẠT</b>
                  </p>
                </div>
                <div className="icon">
                  <IncreaseIcon className="icon-i" />
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-sm-6 ">
              <div class="card-box bg-not-ok">
                <div class="inner">
                  <h3>33%</h3>
                  <p>
                    Tỉ lệ <b>KHÔNG ĐẠT</b>
                  </p>
                </div>
                <div class="icon">
                  <DoubleCheckIcon className="icon-i" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="chart-statictis mt-3">
          <div className="row">
            <div class="col-lg-8 col-md-8 col-sm-12">
              <ContainerWrapper className="border-0">
                <span className="title-chart fst-italic ms-4 text-center">
                  Biểu đồ thể hiện số lượng quả Đạt/Không Đạt 4 tháng gần nhất
                </span>
                <ColumnChart />
              </ContainerWrapper>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-0 d-flex flex-column mt-3">
              {/* <ContainerWrapper className="border-0"> */}
              <span className="title-chart fst-italic mb-3 d-flex justify-content-center text-center">
                Biểu đồ thể hiện tỉ lệ các loại không đạt 4 tháng gần nhất
              </span>
              <PieChart />
              {/* </ContainerWrapper> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistic;
