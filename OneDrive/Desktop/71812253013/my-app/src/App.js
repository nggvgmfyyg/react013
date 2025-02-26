import { useState } from "react"; // ✅ Import useState
import Header from "./Header.js"; // ✅ Import Header
import AddItem from "./AddItem.js";
import ListItems from "./ListItems.js";
import Footer from "./Footer.js";

function App() {
  const [items, setItems] = useState([]);

  function addItemFun(newItem) {
    const updatedItem = {
        ...newItem,
        id: Date.now(),
        quantity: Number(newItem.quantity) || 0,
        price: Number(newItem.price) || 0,
        selected: false,
    };

    setItems((prevItems) => [...prevItems, updatedItem]);
    console.log("Updated Items:", updatedItem);
}

  

  function itemSelected(id) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  }

  function deleteItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  return (
    <div>
      <Header /> {/* ✅ Ensure this component exists in your src folder */}
      <AddItem addItemFun={addItemFun} />
      <ListItems items={items} itemSelected={itemSelected} deleteItem={deleteItem} />
      <Footer items={items} />
    </div>
  );
}

export default App;
