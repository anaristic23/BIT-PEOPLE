import rawUsers from '../data/user_data'
import User from '../entities/User'

const fetchUsers = () => {
    const users = rawUsers.map((rawUser) => {
        return new User(
            rawUser.picture.thumbnail,
            rawUser.name.first,
            rawUser.email,
            rawUser.dob.age
        )
    });
    
    return users;
};

export { fetchUsers };