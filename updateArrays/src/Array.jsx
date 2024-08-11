import { useState } from "react";

function updateArray(){
    const[list,updateList]=useState(["Apple","Oranges","Mango"]);


    function addToList(){
        const item=document.getElementById("item").value;
        if(item===""){
            document.getElementById("item").setAttribute("placeholder", "Input Items");
        }else{
            document.getElementById("item").value="";
            updateList(l=>[...l,item]);
        }
    }

    function removeFromList(index){
        updateList(list.filter((_,i) => i!==index));
    }


    return(
        <>
        <div>
            <ul>
                {list.map((lists,index)=>
                    <li key={index} onClick={()=>removeFromList(index)}>{lists}</li>
                )}
            </ul>
        </div>
        <div>
            <input type="text" id="item" placeholder="Items"/>
            <input type="button" value="Add To List" onClick={addToList}/>
        </div>
        </>
    )
}
export default updateArray