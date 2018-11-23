import React from 'react'
import PropTypes from 'prop-types'
import { UserListItem } from './UserListItem';
import { UserCardItem } from './UserCardItem';
// import User from "../entities/User"

const UsersList = (props) => {
    const { listOfUsers, isGrid } = props;
    const userItems = listOfUsers.map((user, index) => {
        return (
            <UserListItem
                key={index}
                userName={user.name}
                userEmail={user.getHiddenEmail()}
                userAge={user.age}
                userPicture={user.picture}
                userGender={user.gender}
            />
        );
    })

    const userCards = listOfUsers.map((user, index) => {
        return (
            <UserCardItem
                key={index}
                userName={user.name}
                userEmail={user.email}
                userAge={user.age}
                userPicture={user.picture}
                userGender={user.gender}
            />
        );
    })

    return (
        <div className="container">
            <div className="row">
                {isGrid ? userCards : userItems}
            </div>
        </div>
    )
}

UsersList.propTypes = {
    listOfUsers: PropTypes.arrayOf(PropTypes.any)
};

export { UsersList }