function Button(){

    // const handleClick=()=> console.log("OUCH");
    // const handleClick2=(name)=> console.log(`${name} stop clicking me`)

    // return(<>
    // <button onClick={()=>handleClick2("Suyog")}>Click Me</button>
    // </>)

    // let count=0;
    // const increaseCount=()=>{
    //     count++;
    //     console.log(`count:${count}`);
    // };
    // return(<>
    // <button onClick={()=>increaseCount()}>Click Me</button>
    // </>)


    const handleClick=(e)=>e.target.textContent=`OUCH`;
    return(<>
    <button onDoubleClick={(e)=>handleClick(e)}>Click ME</button>
    </>)
}

export default Button