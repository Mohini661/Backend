import React from "react";
import v1 from "../assets/img/vendor-1.jpg";
import v2 from "../assets/img/vendor-2.jpg";
import v3 from "../assets/img/vendor-3.jpg";
import v4 from "../assets/img/vendor-4.jpg";
import v5 from "../assets/img/vendor-5.jpg";
import v6 from "../assets/img/vendor-6.jpg";
import v7 from "../assets/img/vendor-7.jpg";
import v8 from "../assets/img/vendor-8.jpg";

const Vendor = () => {
  return (
    <div className="container-fluid py-5">
      <div className="row px-xl-5">
        <div className="col">
          <div className="owl-carousel vendor-carousel d-flex">
            <div
              className="owl-item cloned"
              style={{ width: "192px", marginRight: "38px" }}
            >
              <div className="vendor-item border p-4">
                <img src={v1} alt="" />
              </div>
            </div>

            <div
              className="owl-item cloned"
              style={{ width: "192px", marginRight: "38px" }}
            >
              <div className="vendor-item border p-4">
                <img src={v2} alt="" />
              </div>
            </div>

            <div
              className="owl-item cloned"
              style={{ width: "192px", marginRight: "38px" }}
            >
              <div className="vendor-item border p-4">
                <img src={v3} alt="" />
              </div>
            </div>
            <div
              className="owl-item cloned"
              style={{ width: "192px", marginRight: "38px" }}
            >
              <div className="vendor-item border p-4">
                <img src={v4} alt="" />
              </div>
            </div>
            <div
              className="owl-item cloned"
              style={{ width: "192px", marginRight: "38px" }}
            >
              <div className="vendor-item border p-4">
                <img src={v5} alt="" />
              </div>
            </div>
            <div
              className="owl-item cloned"
              style={{ width: "192px", marginRight: "38px" }}
            >
              <div className="vendor-item border p-4">
                <img src={v6} alt="" />
              </div>
            </div>
            {/* <div
              className="owl-item cloned"
              style={{ width: "190.15px", marginRight: "29px" }}
            >
              <div className="vendor-item border p-4">
                <img src={v7} alt="" />
              </div>
            </div>
            <div
              className="owl-item cloned"
              style={{ width: "190.15px", marginRight: "29px" }}
            >
              <div className="vendor-item border p-4">
                <img src={v8} alt="" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vendor;
