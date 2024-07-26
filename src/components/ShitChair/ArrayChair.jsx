import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadChair } from "../redux/bookingSlice";

const ArrayChair = ({ hangGhe, getChair }) => {
  const dispatch = useDispatch();
  const { arrChairBooking } = useSelector((state) => state.bookingSlice);
  return (
    <div>
      {hangGhe.danhSachGhe.map((i, j) => {
        let cssGheDaDat = "";
        //trạng thái đã đặt

        if (i.daDat) {
          cssGheDaDat = "gheDuocChon";
        }

        //trạng thái đang đặt
        let cssGheDangChon = "";
        if (hangGhe.hang === "") {
          return (
            <button key={j} className="rowNumber">
              {i.soGhe}
            </button>
          );
        }
        const indexGheDangChon =
          arrChairBooking.findIndex((item) => {
            item.soGhe === i.soGhe;
          }) !== -1;
        if (indexGheDangChon) {
          cssGheDaDat = "gheDangChon";
        }
        return (
          <button
            key={j}
            onClick={() => {
              if (!i.daDat) {
                dispatch(uploadChair(hangGhe.danhSachGhe[j]));
              }
            }}
            disabled={i.daDat}
            className={`${cssGheDangChon} ghe ${cssGheDaDat} `}
          >
            {i.soGhe}
          </button>
        );
      })}
    </div>
  );
};

export default ArrayChair;
