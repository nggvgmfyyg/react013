import "./App.css";
export default function Footer({items}){
    const totalPrice=items.reduce((acc,item)=>{
        return (acc=acc+item.price*item.quantity)
    },0);
    const selectedItems=items.reduce((acc,item)=>{
        return(acc=acc+(item.selected?1:0));
    },0);
    return(
        <div className="footer"> 
            <div>Total Items:{items.length}</div>
            <div>Total Price:{totalPrice}</div>
            <div>Selected Items:{selectedItems}</div>
        </div>
    );
}