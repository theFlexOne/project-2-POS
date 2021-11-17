import React, { useState } from 'react';
import SignIn from '../SignIn/SignIn';
import NewOrder from '../NewOrder/NewOrder';
import Checkout from '../Checkout/Checkout';
// import Customer from '../Customer/Customer';
import NewCustomer from '../NewCustomer/NewCustomer';
import './App.css';

// import { menu } from '../../data/menuData.json';

const mainScreens = {
  NewOrder: <NewOrder />,
  // SignIn: <SignIn />,
  // Checkout: <Checkout />,
  // NewCustomer: <NewCustomer />,
};

function App() {
  const [activeScreen, setActiveScreen] = useState(mainScreens.NewOrder);

  console.log(activeScreen);
  return activeScreen;
}

export default App;
