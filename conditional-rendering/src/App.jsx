import UserGreeting from "./userGreeting"; 


function App(){
  return(
    <>
      <UserGreeting isLoggedIn={true} username="Suyog"/>
    </>
  );
}

export default App;