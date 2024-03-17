import { useState } from "react";
import Item from "./Item";

function PackingeList({ items, onDeleteItem, onToggelItem, onClearList }) {
  const [sotrBy, setSortBy] = useState("input");
  let sortedList;
  if (sotrBy === "input") sortedList = items;

  if (sotrBy === "description")
    (sortedList = items.slice()).sort((a, b) =>
      a.description.localeCompare(b.description)
    );

  if (sotrBy === "packed")
    sortedList = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedList.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggelItem={onToggelItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sotrBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input Order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by Packed status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}

export default PackingeList;
