import React from "react";

const ShitBooked = () => {
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
          <tbody>
            <tr>
              <td>tôi ngu ngê</td>
              <td>tôi tồi tệ</td>
              <td>tôi dại khờ</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShitBooked;
