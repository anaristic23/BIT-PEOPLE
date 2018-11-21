import React from 'react'
import PropTypes from 'prop-types'
import { UserListItem } from './UserListItem';
// import User from "../entities/User"

const UsersList = ({ listOfUsers }) => {

    const userItems = listOfUsers.map((user, index) => {
        return (
            <UserListItem 
                key={index} 
                userName={user.name} 
                userEmail={user.email} 
                userAge={user.age} 
                userPicture={user.picture} 
            />
        );
    })

    return (
        <div className="container">
            {userItems}
        </div>
    )
}

UsersList.propTypes = {
    listOfUsers: PropTypes.arrayOf(PropTypes.any)
};

export { UsersList }