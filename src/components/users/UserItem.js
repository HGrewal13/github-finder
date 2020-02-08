import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'


// UserItem was deconstructed. user: login, avatar_url, etc. is all being retrieved from props
const UserItem = ({user: {login, avatar_url, html_url}}) =>  {
// The Component UserItem.js is built to show how an individual UserItem is to be displayed on the app.
// The Component Users.js is responsible for outputting UserItem.js, and uses functions/methods to determine how many times it's supposed to be outputted.
// UserItem is the constructing
// Users is the presentation

    return (
        <div className="card text-center">
            <img 
                src={avatar_url} 
                alt="" 
                className="round-img" 
                style={{width: '60px'}}
            />
            <h3>{login}</h3>

            <div>
                <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
                    More
                </Link>
            </div>
        </div>
    );
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
};

export default UserItem
