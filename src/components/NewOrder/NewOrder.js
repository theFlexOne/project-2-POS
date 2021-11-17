import TopBar from '../TopBar/TopBar';
import Menu from '../Menu/Menu';
import Cart from '../Cart/Cart';
import './NewOrder.css';

const NewOrder = ({ menu }) => {
  console.log(menu);

  const TopBar = () => {
    return (
      <header className="Top-Bar">
        <div className="Top-Bar-cell">
          <p>TIME</p>
        </div>
        <div className="Top-Bar-cell">
          <p>DATE</p>
        </div>
        <div className="Top-Bar-cell"></div>
        <div className="Top-Bar-cell"></div>
        <div className="Top-Bar-cell"></div>
        <div className="Top-Bar-cell"></div>
      </header>
    );
  };

  return (
    <div>
      <TopBar />
      <Menu menu={menu} />
      <Cart />
    </div>
  );
};

export default NewOrder;
