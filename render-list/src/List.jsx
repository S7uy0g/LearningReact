function List(props){
    const itemList=props.items;
    const itemCategory=props.category;
    itemList.sort((a,b)=> a.name.localeCompare(b.name));
    //reveerse
    // fruits.sort((a,b)=> b.name.localeCompare(a.name));

    const lowCalFruits=itemList.filter(fruit => fruit.calories>50);
    const listItems=lowCalFruits.map(fruit=><li key={fruit.id}>{fruit.name}: {fruit.calories}</li>)
    return(<>
    <h2 className="list-category">{itemCategory}</h2>
    <ul>{listItems}</ul>
    </>
    );
}

export default List