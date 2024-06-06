import List from './List.jsx'


function App() {
  const fruits=[
    {id:1, name:"apple", calories:95},
    {id:2, name:"orange", calories:45},
    {id:3, name:"banana", calories:55},
    {id:4, name:"pineapple", calories:75},
    {id:5, name:"coconut", calories:85}];

    const nice=[
      {id:1, name:"apple", calories:95},
      {id:2, name:"orange", calories:45},
      {id:3, name:"banana", calories:55},
      {id:4, name:"pineapple", calories:75},
      {id:5, name:"coconut", calories:85}];

  return(<>
    <List items={fruits} category="fruits"/>
    <List items={nice} category="nice"/>
  </>)
}

export default App
