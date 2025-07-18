import React from 'react';
import Seat from './Seat';

export default function SeatRow({ row, seatsPerRow }) {
  return (
    <div className="flex justify-center items-center gap-2">
      <span className="w-8 text-center font-semibold text-gray-600">
        {row}
      </span>
      <div className="flex gap-1">
        {Array.from({ length: seatsPerRow }, (_, index) => {
          const seatNumber = index + 1;
          const seatId = `${row}${seatNumber}`;
          return <Seat key={seatId} seatId={seatId} />;
        })}
      </div>
    </div>
  );
}