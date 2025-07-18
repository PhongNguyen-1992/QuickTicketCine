import React from 'react';
import Seat from './Seat';

export default function SeatRow({ hangData }) {
  const { hang, danhSachGhe } = hangData;
  
  return (
    <div className="flex justify-center items-center gap-2">
      <span className="w-8 text-center font-semibold text-gray-600">
        {hang}
      </span>
      <div className="flex gap-1">
        {danhSachGhe.map((seatInfo, index) => (
          <Seat key={`${hang}-${index}`} seatInfo={seatInfo} />
        ))}
      </div>
    </div>
  );
}