import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteBooking } from "../redux/bookingSlice.js";
const ShitBooked = () => {
  const { arrChairBooking } = useSelector((state) => state.bookingSlice);
  console.log(arrChairBooking);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteBooking(id));
  };
  const renderChair = () => {
    return arrChairBooking.map((item, index) => (
      <tr key={index}>
        <td>{item.soGhe}</td>
        <td>{item.gia}</td>
        <td className="text-center">
          <button
            onClick={() => {
              handleDelete(item.soGhe);
              console.log("xóa");
            }}
            className="text-red-500 font-bold text-center"
          >
            X
          </button>
        </td>
      </tr>
    ));
  };
  const tinhTongTien = () => {
    return arrChairBooking.reduce((total, item) => {
      return total + item.gia;
    }, 0);
  };
  return (
    <div>
      <button className="gheDuocChon"></button>{" "}
      <span className>Ghế đã đặt</span> <br />
      <button className="gheDangChon"></button>{" "}
      <span className>Ghế đang chọn</span> <br />
      <button className="gheChuaChon"></button>{" "}
      <span className>Ghế chưa đặt</span>
      <div>
        <table class="tbTinhTien table-fixed ">
          <thead>
            <tr>
              <th>Số Ghế</th>
              <th>Giá</th>
              <th>Hủy</th>
            </tr>
          </thead>
          <tbody id="tbListBooking">
            {renderChair()}
            {/* <tr>
              <td>{arrChairBooking.soGhe}</td>
              <td>{arrChairBooking.gia}</td>
              <td className="text-red-500 font-bold text-center">X</td>
            </tr> */}
          </tbody>
          <tfoot>
            <tr>
              <td span>Tổng tiền:</td>
              <td>{tinhTongTien()}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ShitBooked;
