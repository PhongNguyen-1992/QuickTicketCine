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
      <div className="bg-gray-800 text-white text-center py-2 mb-6 rounded">
        MÀN HÌNH
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