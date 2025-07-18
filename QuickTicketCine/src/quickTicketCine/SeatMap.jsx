import React from 'react';
import { useSelector } from 'react-redux';
import SeatRow from './SeatRow';
import PriceInfo from './PriceInfo';

export default function SeatMap() {
  const { seatData } = useSelector(state => state.booking);

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-700 text-center">
        Sơ đồ ghế
      </h2>
      
      {/* Màn hình */}
      <div className="relative mb-8">
        <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white text-center py-4 mx-4 rounded-t-3xl rounded-b-lg shadow-2xl transform perspective-1000 hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-t-3xl rounded-b-lg"></div>
          <div className="relative z-10">
            <div className="text-2xl font-extrabold tracking-widest mb-1 text-yellow-400 drop-shadow-md">MÀN HÌNH</div>
            <div className="text-xs opacity-70">CURVED CINEMA SCREEN</div>
          </div>
        </div>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent rounded-full blur-sm"></div>
      </div>

      {/* Dãy ghế */}
      <div className="space-y-2 mb-4">
        {seatData.map((hangData, index) => (
          <SeatRow key={`hang-${index}`} hangData={hangData} />
        ))}
      </div>

      {/* Chú thích */}
      <div className="bg-white p-4 rounded border">
        <h3 className="font-semibold mb-2 text-gray-700 text-sm">Chú thích:</h3>
        <div className="flex flex-wrap gap-4 text-xs mb-3">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-200 rounded border"></div>
            <span>Ghế trống</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-500 rounded"></div>
            <span>Ghế đang chọn</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-500 rounded"></div>
            <span>Ghế đã đặt</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-500 rounded opacity-60"></div>
            <span>Không khả dụng</span>
          </div>
        </div>
        <div className="border-t pt-2">
          <PriceInfo showTotal={false} showDetails={false} />
        </div>
      </div>
    </div>
  );
}