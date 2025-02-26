import "./App.css";

export default function ListItems({ items = [], itemSelected, deleteItem }) {
    console.log("Updated items:", items);

    // ✅ Fix totalPrice calculation
    const totalPrice = items.reduce(
        (acc, item) => acc + (Number(item.price) * Number(item.quantity)), 
        0
    );

    console.log("Total Price Calculation:", totalPrice);

    if (!items.length) return <h2>No items. Please add items!</h2>;

    return (
        <div>
            <h3>Item List</h3>
            {items.map((item) => (
                <ItemDisplay key={item.id} item={item} itemSelected={itemSelected} deleteItem={deleteItem} />
            ))}
            <div><strong>Total Price:</strong> {totalPrice.toFixed(2)}</div>
        </div>
    );
}



function ItemDisplay({ item, itemSelected, deleteItem }) {
    return (
        <div className="item">
            <input 
                type="checkbox" 
                checked={item.selected} 
                onChange={() => itemSelected(item.id)} 
            />
            <div>{item.name}</div>
            <div>{item.quantity}</div>
            <div>{Number(item.price).toFixed(2)}</div>
            <div>{(Number(item.quantity) * Number(item.price)).toFixed(2)}</div>
            <button onClick={() => deleteItem(item.id)}>x</button>
        </div>
    );
}

