import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSeat } from '../store/bookingSlice';

export default function Seat({ seatId }) {
  const dispatch = useDispatch();
  const { selectedSeats, bookedSeats } = useSelector(state => state.booking);

  const getSeatStatus = () => {
    if (bookedSeats.includes(seatId)) return 'booked';
    if (selectedSeats.includes(seatId)) return 'selected';
    return 'available';
  };

  const getSeatClass = () => {
    const status = getSeatStatus();
    switch (status) {
      case 'booked':
        return 'bg-red-500 text-white cursor-not-allowed';
      case 'selected':
        return 'bg-blue-500 text-white cursor-pointer hover:bg-blue-600';
      case 'available':
        return 'bg-gray-200 text-gray-700 cursor-pointer hover:bg-gray-300';
      default:
        return 'bg-gray-200';
    }
  };

  const handleClick = () => {
    dispatch(toggleSeat(seatId));
  };

  const seatNumber = seatId.slice(1);
  const status = getSeatStatus();

  return (
    <button
      onClick={handleClick}
      className={`w-8 h-8 text-xs font-medium rounded transition duration-200 ${getSeatClass()}`}
      disabled={status === 'booked'}
      title={`Ghế ${seatId} - ${status === 'booked' ? 'Đã đặt' : status === 'selected' ? 'Đang chọn' : 'Có thể chọn'}`}
    >
      {seatNumber}
    </button>
  );
}