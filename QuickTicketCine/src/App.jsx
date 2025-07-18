import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import TicketBookingApp from './quickTicketCine';


export default function App() {
  return (
    <Provider store={store}>
      <TicketBookingApp />
    </Provider>
  );
}