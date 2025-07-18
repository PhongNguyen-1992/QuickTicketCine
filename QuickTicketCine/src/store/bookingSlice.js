import { createSlice } from '@reduxjs/toolkit';
import {seatData} from '../quickTicketCine/seatData';


const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    customerName: '',
    selectedSeats: [],
    bookings: [],
    seatData: seatData,
    bookedSeats: seatData.flatMap(hang => 
      hang.danhSachGhe.filter(ghe => ghe.daDat).map(ghe => ghe.soGhe)
    )
  },
  reducers: {
    setCustomerName: (state, action) => {
      state.customerName = action.payload;
    },
    toggleSeat: (state, action) => {
      const seatId = action.payload;
      
      // Tìm ghế trong seatData
      const seatInfo = state.seatData
        .flatMap(hang => hang.danhSachGhe)
        .find(ghe => ghe.soGhe === seatId);
      
      // Không cho phép chọn ghế đã đặt hoặc ghế có giá 0
      if (!seatInfo || seatInfo.daDat || seatInfo.gia === 0) return;
      
      if (state.selectedSeats.includes(seatId)) {
        state.selectedSeats = state.selectedSeats.filter(seat => seat !== seatId);
      } else {
        state.selectedSeats.push(seatId);
      }
    },
    addBooking: (state, action) => {
      const { name, seats } = action.payload;
      
      // Tính tổng tiền dựa trên giá từng ghế
      const totalAmount = seats.reduce((sum, seatId) => {
        const seatInfo = state.seatData
          .flatMap(hang => hang.danhSachGhe)
          .find(ghe => ghe.soGhe === seatId);
        return sum + (seatInfo ? seatInfo.gia : 0);
      }, 0);

      const newBooking = {
        id: Date.now(),
        name,
        seats: [...seats],
        totalAmount,
        bookingTime: new Date().toLocaleString('vi-VN')
      };
      
      state.bookings.push(newBooking);
      state.bookedSeats.push(...seats);
      
      // Cập nhật trạng thái daDat trong seatData
      seats.forEach(seatId => {
        const seatInfo = state.seatData
          .flatMap(hang => hang.danhSachGhe)
          .find(ghe => ghe.soGhe === seatId);
        if (seatInfo) {
          seatInfo.daDat = true;
        }
      });
      
      state.selectedSeats = [];
      state.customerName = '';
    },
    clearSelection: (state) => {
      state.selectedSeats = [];
    }
  }
});

export const { setCustomerName, toggleSeat, addBooking, clearSelection } = bookingSlice.actions;
export default bookingSlice.reducer;
