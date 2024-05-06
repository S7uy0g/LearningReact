import profilePicture from './assets/profile.png'

function Card(){
    return(
        <div className="card">
            <img className='card-image' src={profilePicture} alt="Profile Picture" />
            <h2 className='card-h2'>Suyog Rai <hr /></h2>
            <p className='card-p'>I am a esports caster who have worked for many projects</p>
        </div>
    );
}

export default Card