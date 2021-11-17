import { useState, useEffect } from 'react';
// import TopBar from '../TopBar/TopBar';
import Menu from '../Menu/Menu';
import Cart from '../Cart/Cart';
import './NewOrder.css';

const NewOrder = () => {
  const [menu, setMenu] = useState(null);

  // const parseMenuData = data => {
  //   console.log(data);
  // };

  useEffect(() => {
    fetch('http://localhost:8000/menu')
      .then(res => res.json())
      .then(data => setMenu(data));
  }, []);

  const TopBar = () => {
    return (
      <header className="Top-Bar">
        <div className="Top-Bar-cell">
          <button>SETTINGS</button>
        </div>
        <div className="Top-Bar-cell">
          <button>ORDERS</button>
        </div>
        <div className="Top-Bar-cell">
          <button>BUTTON 3</button>
        </div>
        <div className="Top-Bar-cell">
          <button>BUTTON 4</button>
        </div>
        <div className="Top-Bar-cell">
          <p>TIME</p>
        </div>
        <div className="Top-Bar-cell">
          <p>DATE</p>
        </div>
      </header>
    );
  };

  return (
    <div>
      <TopBar />
      {menu && <Menu menu={menu} />}
      <Cart />
    </div>
  );
};

export default NewOrder;
