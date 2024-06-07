function ProfilePicture(){
    const imageURL=`./src/assets/react.svg`;
    const anotherURL=`./src/assets/pic.png`;

    // const handleCick=(e)=>e.target.style.display=anotherURL;
    const handleCick=(e)=>console.log(e);

    return(<img onClick={(e)=>handleCick(e)} src={imageURL}></img>)
}

export default ProfilePicture