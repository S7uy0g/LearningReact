import { useState } from "react"

function myComponent(){

    const [artist,updateArtist]=useState({name:"Name",genre:"Genre",age:0})

    function handleNameChange(event){
        updateArtist(a=>({...a,name:event.target.value}));
    }
    function handleGenreChange(event){
        updateArtist(a=>({...a,genre:event.target.value}));
    }
    function handleAgeChange(event){
        updateArtist(a=>({...a,age:event.target.value}));
    }

    return(
        <div>
            <p>My Fav artist is {artist.name}, who makes {artist.genre} music and is {artist.age} years old</p>
            <label>Name</label>
            <input type="text" placeholder={artist.name} onChange={handleNameChange}/><br/>
            <label>Genre</label>
            <input type="text" placeholder={artist.genre} onChange={handleGenreChange}/><br/>
            <label>Age</label>
            <input type="number" placeholder={artist.age} onChange={handleAgeChange}/><br/>
        </div>
    )
}

export default myComponent