import React from 'react';
import PropTypes from 'prop-types'

const UserCardItem = (props) => {

  const { userPicture, userName, userEmail, userAge, userGender } = props
  const colorFemale = userGender === 'female' ? 'red lighten-5' : '';

  return (
    <div className="col s12 m4">
      <div className={`card ${colorFemale}`}>
        <div className="card-image">
          <img src={userPicture} alt="" />
        </div>
        <div className="card-content">
          <p><span>Name: </span>{userName}</p>
          <p><span>E-mail: </span>{userEmail}</p>
          <p><span>Age: </span>{userAge}</p>
        </div>
      </div>
    </div>
  )
}

UserCardItem.propTypes = {
  userName: PropTypes.string,
  userPicture: PropTypes.string,
  userEmail: PropTypes.string,
  userAge: PropTypes.string
}

export { UserCardItem }