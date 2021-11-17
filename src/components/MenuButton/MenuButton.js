const MenuButton = ({ itemDetails }) => {
  console.log(itemDetails);
  const name = itemDetails[0];
  const sizes = itemDetails[1];

  const onItemTap = e => {};

  return (
    <button type="button" className={name} onClick={onItemTap}>
      {name}
    </button>
  );
};

export default MenuButton;
