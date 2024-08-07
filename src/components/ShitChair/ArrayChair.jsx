import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadChair } from "../redux/bookingSlice";

const ArrayChair = ({ hangGhe, getChair }) => {
  const dispatch = useDispatch();

  const { arrChairBooking } = useSelector((state) => state.bookingSlice);
  return (
    <div>
      {hangGhe.danhSachGhe.map((i, j) => {
        console.log(i);
        console.log(arrChairBooking);

        //trạng thái đã đặt
        let cssGheDaDat = "";
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
        let indexGheDangChon =
          arrChairBooking.findIndex((item) => {
            return item.soGhe === i.soGhe;
          }) !== -1;
        console.log(indexGheDangChon);
        if (indexGheDangChon) {
          cssGheDangChon = "gheDangChon";
          console.log("choose");
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
