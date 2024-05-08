import PropTypes from 'prop-types'


function UserGreeting(props){
    return (props.isLoggedIn ? <h2 className='welcome'>Welcome {props.username}</h2>:<h2 className='login'>Please Log in</h2>); 
}

UserGreeting.PropTypes={
    isLoggedIn: PropTypes.bool,
    username:PropTypes.string
}

UserGreeting.defaultProps={
    isLoggedIn:false,
    username:"Guest"
}

export default UserGreeting;