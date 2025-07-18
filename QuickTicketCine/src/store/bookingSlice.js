import { createSlice } from '@reduxjs/toolkit';

const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    customerName: '',
    selectedSeats: [],
    bookings: [],
    bookedSeats: []
  },
  reducers: {
    setCustomerName: (state, action) => {
      state.customerName = action.payload;
    },
    toggleSeat: (state, action) => {
      const seatId = action.payload;
      if (state.bookedSeats.includes(seatId)) return;
      
      if (state.selectedSeats.includes(seatId)) {
        state.selectedSeats = state.selectedSeats.filter(seat => seat !== seatId);
      } else {
        state.selectedSeats.push(seatId);
      }
    },
    addBooking: (state, action) => {
      const { name, seats } = action.payload;
      const newBooking = {
        id: Date.now(),
        name,
        seats: [...seats],
        bookingTime: new Date().toLocaleString('vi-VN')
      };
      
      state.bookings.push(newBooking);
      state.bookedSeats.push(...seats);
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