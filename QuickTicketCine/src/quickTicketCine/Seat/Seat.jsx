import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSeat } from '../../store/bookingSlice';
import { formatCurrency } from '../Price/formatCurrency';


export default function Seat({ seatInfo }) {
  const dispatch = useDispatch();
  const { selectedSeats, bookedSeats } = useSelector(state => state.booking);
  
  const seatId = seatInfo.soGhe;
  const isNumber = !isNaN(seatId); // Kiểm tra nếu là số (hàng trống)

  const getSeatStatus = () => {
    if (seatInfo.daDat || bookedSeats.includes(seatId)) return 'booked';
    if (selectedSeats.includes(seatId)) return 'selected';
    if (seatInfo.gia === 0) return 'unavailable';
    return 'available';
  };

  const getSeatClass = () => {
    const status = getSeatStatus();
    switch (status) {
      case 'booked':
        return 'bg-red-500 text-white cursor-not-allowed';
      case 'selected':
        return 'bg-blue-500 text-white cursor-pointer hover:bg-blue-600';
      case 'unavailable':
        return 'bg-gray-300 text-gray-500 cursor-not-allowed';
      case 'available':
        return 'bg-gray-200 text-gray-700 cursor-pointer hover:bg-gray-300';
      default:
        return 'bg-gray-200';
    }
  };

  const handleClick = () => {
    if (seatInfo.gia > 0 && !seatInfo.daDat) {
      dispatch(toggleSeat(seatId));
    }
  };

  const status = getSeatStatus();

  // Nếu là hàng số (lối đi), hiển thị khác
  if (isNumber) {
    return (
      <div className="w-8 h-8 flex items-center justify-center text-xs font-medium text-gray-400">
        {seatId}
      </div>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`w-8 h-8 text-xs font-medium rounded transition duration-200 ${getSeatClass()}`}
      disabled={status === 'booked' || status === 'unavailable'}
      title={`Ghế ${seatId} - ${formatCurrency(seatInfo.gia)} - ${
        status === 'booked' ? 'Đã đặt' : 
        status === 'selected' ? 'Đang chọn' : 
        status === 'unavailable' ? 'Không khả dụng' : 'Có thể chọn'
      }`}
    >
       {seatId.replace(/[A-Z]/g, '')}
    </button>
  );
}