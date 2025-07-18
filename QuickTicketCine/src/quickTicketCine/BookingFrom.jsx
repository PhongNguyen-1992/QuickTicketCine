import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCustomerName, addBooking, clearSelection } from '../store/bookingSlice';

export default function BookingForm() {
  const dispatch = useDispatch();
  const { customerName, selectedSeats } = useSelector(state => state.booking);

  const handleNameChange = (e) => {
    dispatch(setCustomerName(e.target.value));
  };

  const handleBooking = () => {
    if (!customerName.trim()) {
      alert('Vui lòng nhập tên khách hàng');
      return;
    }
    if (selectedSeats.length === 0) {
      alert('Vui lòng chọn ít nhất một ghế');
      return;
    }

    dispatch(addBooking({ name: customerName, seats: selectedSeats }));
  };

  const handleClearSelection = () => {
    dispatch(clearSelection());
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        Thông tin đặt vé
      </h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tên khách hàng
          </label>
          <input
            type="text"
            value={customerName}
            onChange={handleNameChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Nhập tên khách hàng"
          />
        </div>
        <div>
          <p className="text-sm font-medium text-gray-700 mb-2">
            Ghế đã chọn ({selectedSeats.length}): 
          </p>
          <div className="min-h-[40px] p-2 bg-white border rounded-md">
            {selectedSeats.length > 0 ? (
              <div className="flex flex-wrap gap-1">
                {selectedSeats.map(seat => (
                  <span key={seat} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                    {seat}
                  </span>
                ))}
              </div>
            ) : (
              <span className="text-gray-400 text-sm">Chưa chọn ghế nào</span>
            )}
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleBooking}
            className="flex-1 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-200 font-medium"
          >
            Đặt vé
          </button>
          <button
            onClick={handleClearSelection}
            className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-200"
            disabled={selectedSeats.length === 0}
          >
            Xóa chọn
          </button>
        </div>
      </div>
    </div>
  );
}