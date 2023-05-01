import { useState } from "react";

const ListGroup = () => {
  const cities = ["Karachi", "Lahore", "Hyderabad"];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <ul className="list-group">
      {cities.map((x, index) => (
        <li
          className={
            selectedIndex === index
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => setSelectedIndex(index)}
        >
          {x}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
