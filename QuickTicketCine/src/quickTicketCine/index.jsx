import React from 'react';
import BookingForm from './BookingFrom';
import SeatMap from './SeatMap';
import BookingTable from './BookingTable';

function TicketBookingApp() {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-white min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          🎬 Hệ thống đặt vé rạp chiếu phim
        </h1>
        <p className="text-gray-600">Chọn ghế và đặt vé một cách dễ dàng</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Cột trái: Form đặt vé */}
        <div className="space-y-6">
          <BookingForm />
        </div>

        {/* Cột phải: Sơ đồ ghế */}
        <div>
          <SeatMap />
        </div>
      </div>

      {/* Bảng danh sách đặt vé */}
      <BookingTable />
    </div>
  );
}

// Export default để có thể import ở file khác
export default TicketBookingApp;