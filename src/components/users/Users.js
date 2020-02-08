import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';


const Users = ({ users, loading}) => {
// The Component UserItem.js is built to show how an individual UserItem is to be displayed on the app.
// The Component Users.js is responsible for outputting UserItem.js, and uses functions/methods to determine how many times it's supposed to be outputted.
// UserItem is the constructing
// Users is the presentation

    if(loading) {
        return <Spinner />
    } else {
        return (
            <div style={userStyle}>
                {users.map(user => (
                    <UserItem key={user.id} user={user}/>
                ))}
            </div>
        )
    }
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users
