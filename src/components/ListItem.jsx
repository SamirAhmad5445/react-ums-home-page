const ListItem = ({ isSelected, onSelect, children }) => {
  return (
    <li>
      <button
        className={`w-full text-start rounded-md py-1.5 px-3 focus:outline-0 ${
          isSelected ? "bg-primary-500 text-light" : ""
        } hover:bg-secondary/50`}
        onClick={() => onSelect(children)}
      >
        {children}
      </button>
    </li>
  );
};

export default ListItem;
