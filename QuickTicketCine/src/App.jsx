import React from "react";
import { Provider } from "react-redux";

import TicketBookingApp from "./quickTicketCine/_index";
import { store } from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <TicketBookingApp />
    </Provider>
  );
}
