function List(){
    const fruits=["apple","orange","banana","pineapple","coconut"];
    fruits.sort();
    const listItems=fruits.map(fruit=><li>{fruit}</li>)
    return(<ul>{listItems}</ul>);
}

export default List