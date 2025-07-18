import React from 'react';
import { useSelector } from 'react-redux';
import BookingStats from './BookingStats';
import { formatCurrency } from '../Price/formatCurrency';


export default function BookingTable() {
  const { bookings } = useSelector(state => state.booking);

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        Danh sách đặt vé
      </h2>
      
      <BookingStats />
      
      {bookings.length > 0 ? (
        <div className="overflow-x-auto mt-4">
          <table className="w-full border-collapse border border-gray-300 bg-white">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-left">STT</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Tên khách hàng</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Số ghế</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Ghế đã đặt</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Tổng tiền</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Thời gian đặt</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
                  <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                  <td className="border border-gray-300 px-4 py-2 font-medium">{booking.name}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">
                      {booking.seats.length}
                    </span>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <div className="flex flex-wrap gap-1">
                      {booking.seats.map(seat => (
                        <span key={seat} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          {seat}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-bold">
                      {formatCurrency(booking.totalAmount)}
                    </span>
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm text-gray-600">
                    {booking.bookingTime}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-8 mt-4">
          <div className="text-gray-400 text-6xl mb-4">🎫</div>
          <p className="text-gray-500">Chưa có vé nào được đặt</p>
          <p className="text-gray-400 text-sm mt-2">Hãy chọn ghế và đặt vé đầu tiên!</p>
        </div>
      )}
    </div>
  );
}