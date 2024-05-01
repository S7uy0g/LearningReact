function Food(){
    const food1="Momo";
    const food2="Chowmein";
    const food3="pizza";

    return(
        <ul>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
            <li>{food3.toLowerCase()}</li>
        </ul>
    );
}

export default Food