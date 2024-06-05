import { Fragment } from "react";
import { useState } from "react";
// import { MouseEvent } from "react";

interface Names {
  list: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
function ListGroup({ list, heading, onSelectItem }: Names) {
  // let selectedIndex = 0; //We have to tell the react that the data of this component might change overtime
  // Hook function
  // const arr = useState(-1); //useState is one of the built-in function for this
  // arr[0] //variable (selectedIndex)
  // arr[1] //updater function

  const [selectedIndex, setSelectedIndex] = useState(-1);
  //Here the selectedIndex will contain the data till the index gets updsated into setSelectedIndex

  // Event handler
  // const handleClick = (event: MouseEvent) => console.log(event)

  const getMessage = () => {
    return list.length === 0 && <p> No item found</p>;
    // return list.length === 0 ? <p> No item found </p> : null;
  };

  return (
    <Fragment>
      <h1> {heading} </h1>
      {getMessage()}
      <ul className="list-group">
        {list.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
