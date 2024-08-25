import { useState } from "react";

function ArrayObject(){

    const [items,setItems]=useState([]);
    const [itemName,setName]=useState("");
    const [itemDate,setDate]=useState(new Date());
    const [itemQuantity,setQuantity]=useState("");

    function addItem(){
        const newItem={
            name:itemName,
            date:itemDate,
            quantity:itemQuantity
        }
        setItems(i=>[...i,newItem]);
        setName("");
        setDate("");
        setQuantity("");
    }
    function removeItem(index){
        setItems(i=>i.filter((_,i)=>i!=index));
    }

    return(
    <>
    <div>
        <h1>List Of Items</h1>
        <table border="1">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, index) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.date}</td>
                        <td>{item.quantity}</td>
                        <td onClick={()=>removeItem(index)}>Delete</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    <div>
        <h2>Add Items</h2>
        <input type="text" placeholder="Add Item Name" id="name" onChange={(e) => setName(e.target.value)}/><br />
        <input type="date" id="date" onChange={(e) => setDate(e.target.value)}/><br />
        <input type="number" id="number" placeholder="Input Quantity" onChange={(e) => setQuantity(e.target.value)}/><br />
        <input type="button" value="Add" onClick={addItem} />
    </div>
    </>
    )
}
export default ArrayObject;