import React from 'react';
import { useSelector } from 'react-redux';
import { formatCurrency } from './formatCurrency';


export default function BookingStats() {
  const { bookings, bookedSeats, seatData } = useSelector(state => state.booking);
  
  const allSeats = seatData.flatMap(hang => hang.danhSachGhe).filter(ghe => ghe.gia > 0);
  const totalSeats = allSeats.length;
  const availableSeats = totalSeats - bookedSeats.length;
  const totalRevenue = bookings.reduce((sum, booking) => sum + booking.totalAmount, 0);

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border">
      <h3 className="font-semibold mb-2 text-gray-700">Thống kê:</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
        <div className="text-center">
          <div className="text-lg font-bold text-blue-600">{totalSeats}</div>
          <div className="text-gray-600">Tổng ghế</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-green-600">{availableSeats}</div>
          <div className="text-gray-600">Ghế trống</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-red-600">{bookedSeats.length}</div>
          <div className="text-gray-600">Đã đặt</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-purple-600">{bookings.length}</div>
          <div className="text-gray-600">Khách hàng</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-yellow-600">{formatCurrency(totalRevenue)}</div>
          <div className="text-gray-600">Doanh thu</div>
        </div>
      </div>
    </div>
  );
}