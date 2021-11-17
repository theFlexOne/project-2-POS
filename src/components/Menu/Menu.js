import { useState } from 'react';
import MenuButton from '../MenuButton/MenuButton';

const Menu = ({ menu }) => {
  const { pizzas, wings, pasta, sides, drinks, desert } = menu;
  const [section, setSection] = useState(Object.entries(pizzas.types));
  console.log(section);
  return (
    <main className="Menu">
      {section.map((item, i) => {
        return <MenuButton key={i} itemDetails={item} />;
      })}
    </main>
  );
};

// const pizzasToDisplay = Object.entries(pizza);
// console.log(pizzasToDisplay);

export default Menu;
