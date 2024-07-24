import React from "react";
import RenderShit from "../ShitChair/RenderShit";
import "./homeTemp.scss";
import ShitBooked from "../ShitChair/ShitBooked";
const HomeTemplate = () => {
  return (
    <div>
      <div className="container bookTicket ">
        <div className="book_content flex">
          <div className="selectChair w-2/3">
            <h1 className="firstChair text-center">
              đặt vé xem phim cyberlearn.vn
            </h1>
            <h2 className="text-white mt-5 text-xl text-center">Màn hình</h2>
            <div className="flex justify-center mt-2">
              <div className="screen"></div>
            </div>
            <RenderShit />
          </div>
          <div className="bookedChair w-1/3">
            <h1 className=" uppercase text-3xl">danh sách ghế bạn chọn</h1>
            <ShitBooked />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTemplate;
