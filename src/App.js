import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingeList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far away </h1>;
}

// controlled elements we create state fro the elements in the form

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handelSubmit(e) {
    e.preventDefault();

    if (!description) return;
    const newItem = { id: Date.now(), description, quantity, packed: false };
    console.log(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handelSubmit}>
      <h3>What do you need for trip</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Items..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}

function PackingeList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have x items in your list you have packed x items</em>
    </footer>
  );
}

export default App;

// state vs props
// state is the internal memory of the component , updating state cause rerender the component
// props is the variable passed by the parent to the child , when the props passed in the child is updates both the parent and child rerender
