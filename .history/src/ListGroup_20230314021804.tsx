const ListGroup = () => {
  const cities = ["Karachi", "Lahore"];
  return (
    <ul className="list-group">
      {cities.map((x) => (
        <li className="list-group-item">x</li>
      ))}
    </ul>
  );
};

export default ListGroup;
