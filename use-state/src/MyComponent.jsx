import React, {useState} from "react";


function MyComponent(){
    const[name, setName]=useState("Guest");
    const[age, setAge]=useState(0);
    const[isEmployed, setIsEmployed]=useState(false);

    const updateName=()=>{
        setName("Suyog Rai");
    }
    const updateAge=()=>{
        setAge(age+1);
    }
    const decrementAge=()=>{
        setAge(age-1);
    }
    const employmentStatus=()=>{
        setIsEmployed(!isEmployed);
    }

    return(
        <div>
            <p>Name:{name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>Name:{age}</p>
            <button onClick={updateAge}>Set Age+</button>
            <button onClick={decrementAge}>Set Age-</button>
            <p>Is Employed:{isEmployed?"Yes":"No"}</p>
            <button onClick={employmentStatus}>Set Employment</button>
        </div>
    );
}

export default MyComponent