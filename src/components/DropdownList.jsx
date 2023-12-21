import { useState } from "react";
import { Down, Search } from "../assets";
import ListItem from "./ListItem";
import Icon from "./Icon";

const DropdownList = ({ values, defaultSelected = 0 }) => {
  const [selected, setSelected] = useState(values[defaultSelected]);
  const [list, setList] = useState(values);
  const [isOpen, setIsOpen] = useState(false);

  function handlesSelect(value) {
    setSelected(value);
    setIsOpen(false);
  }

  function handleSearch(key) {
    setList(values.filter((v) => v.toLowerCase().includes(key.toLowerCase())));
  }

  return (
    <nav aria-label="faculties" className="group relative" open={isOpen}>
      <button
        className="w-full group-open:bg-secondary/50 hover:group-open:bg-secondary/50 text-dark flex justify-between items-center border border-primary-200 rounded-md shadow-md group-open:shadow-inner py-1.5 px-3 focus:outline-0"
        onClick={() => setIsOpen((is) => !is)}
      >
        {selected}
        <Icon name={Down} size={16} />
      </button>
      <div className="absolute top-full left-0 right-0 bg-light overflow-clip h-0 group-open:h-[248px] transition-all duration-300">
        <label className="flex items-center border border-primary-200 rounded-lg shadow-m py-1.5 px-3">
          <span className="sr-only">Search</span>
          <input
            type="text"
            autoFocus={isOpen}
            onChange={(e) => handleSearch(e.target.value)}
            className="flex-1 bg-transparent focus:outline-0"
          />
          <Icon name={Search} size={20} />
        </label>
        <ul className="grid place-content-start grid-cols-1 gap-0.5 h-[210px] px-1.5 py-2 rounded-b-lg overflow-y-scroll">
          {list.length ? (
            list.map((item) => (
              <ListItem
                key={item}
                isSelected={item === selected}
                onSelect={handlesSelect}
              >
                {item}
              </ListItem>
            ))
          ) : (
            <div className="h-full grid place-content-center text-secondary text-sm uppercase">
              not data found
            </div>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default DropdownList;
