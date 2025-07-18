import React from 'react';
import SeatRow from './SeatRow';

export default function SeatMap() {
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const seatsPerRow = 8;

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-700 text-center">
        Sơ đồ ghế
      </h2>
      
      {/* Màn hình */}
       <div className="relative mb-10">
  <div className="bg-gradient-to-b from-gray-950 via-gray-800 to-gray-950 text-white text-center py-6 mx-6 rounded-t-[2rem] rounded-b-xl shadow-[0_0_40px_rgba(0,0,0,0.6)] transform hover:scale-[1.03] transition-transform duration-500 perspective-[1000px]">
    {/* Hiệu ứng ánh sáng động overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-t-[2rem] rounded-b-xl animate-pulse"></div>

    {/* Nội dung chính */}
    <div className="relative z-10">
      <div className="text-2xl font-extrabold tracking-widest mb-1 text-yellow-400 drop-shadow-md"> MÀN HÌNH </div>
     
    </div>
  </div>

  {/* Hiệu ứng ánh sáng đáy */}
  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-40 h-1.5 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent rounded-full blur-md"></div>
</div>

      {/* Dãy ghế */}
      <div className="space-y-2 mb-4">
        {rows.map(row => (
          <SeatRow key={row} row={row} seatsPerRow={seatsPerRow} />
        ))}
      </div>

      {/* Chú thích */}
      <div className="bg-white p-4 rounded border">
        <h3 className="font-semibold mb-2 text-gray-700 text-sm">Chú thích:</h3>
        <div className="flex flex-wrap gap-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-200 rounded"></div>
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
        </div>
      </div>
    </div>
  );
}