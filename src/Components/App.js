import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingeList from "./PackageList";
import Stats from "./Stats";

function App() {
  const [items, setItems] = useState([]);

  function handelAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handelDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handelToggelItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handelClearList() {
    const confirmed = window.confirm(
      "are you sure you wan to clear the Packing List"
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handelAddItem} />
      <PackingeList
        items={items}
        onDeleteItem={handelDeleteItem}
        onToggelItem={handelToggelItem}
        onClearList={handelClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;

// state vs props
// state is the internal memory of the component , updating state cause rerender the component
// props is the variable passed by the parent to the child , when the props passed in the child is updates both the parent and child rerender
