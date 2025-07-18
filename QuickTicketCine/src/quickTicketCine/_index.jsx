import React from 'react';
import BookingForm from './Booking/BookingFrom';
import SeatMap from './Seat/SeatMap';
import BookingTable from './Booking/BookingTable';

function TicketBookingApp() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-100">
      {/* Khung chứa chính */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 text-center md:text-left">
          <img
            src="https://iguov8nhvyobj.vcdn.cloud/media/wysiwyg/news-offers/mua-ve_ngay.png"
            alt="Mua vé ngay"
            className="w-24 h-24 object-contain drop-shadow-lg animate-pulse"
          />
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight leading-snug drop-shadow-sm">
            🎟️ Hệ thống <span className="text-red-500">đặt vé</span> rạp chiếu phim
          </h1>
        </div>

        {/* Grid layout: form + ghế */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Cột trái: Form */}
          <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">📝 Nhập thông tin đặt vé</h2>
            <BookingForm />
          </div>

          {/* Cột phải: Sơ đồ ghế */}
          <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">🪑 Sơ đồ ghế</h2>
            <SeatMap />
          </div>
        </div>

        {/* Bảng đặt vé */}
        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">📋 Danh sách đặt vé</h2>
          <BookingTable />
        </div>
      </div>
    </div>
  );
}

export default TicketBookingApp;
