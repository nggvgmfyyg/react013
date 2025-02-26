
import {useState} from "react";
import "./App.css"
export default function AddItem({ addItemFun }){
    const [name,setName]=useState("");
    const[quantity,setQuantity]=useState(0);
    const[price,setPrice]=useState(0);
    function onItemSubmit(e){
        e.preventDefault();
        console.log("Submitted");
        const item={name,quantity,price,selected:true,id: Date.now()};
        addItemFun(item);
        //console.log(item);
    }
    return(
    <div>
        <form className="add-item" onSubmit={onItemSubmit}>
            <div>
                <label >Item name  </label>
                <input type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                ></input>
            </div>
            <div>
                <label >Quantity  </label>
                <select value={quantity}
                onChange={(e)=>setQuantity(e.target.value)}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
            </div>
            <div>
                <label>Price  </label>
                <input type="number"
                value={price}
                onChange={(e)=>setPrice(e.target.value)}></input>
            </div>
            <button className="btn">Add Item</button>
        </form>
    </div>
    );
}