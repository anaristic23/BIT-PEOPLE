import rawUsers from '../data/user_data';
import User from '../entities/User';
import { BASE_ENDPOINT } from './../shared/constants';

const fetchUsersData = () => {

    return fetch(BASE_ENDPOINT)
        .then((response) => {
            return response.json()
        })
        .then((response) => {
            return response.results
        })
        .then((rawUsers) => {
            const users = rawUsers.map((rawUser) => {
                return new User(
                    rawUser.picture.large,
                    rawUser.name.first,
                    rawUser.email,
                    rawUser.dob.date.toLocaleString('en-GB').slice(0, 10),
                    rawUser.gender
                )
            });

            return users;
        })
}


// const loadUsersData = () => {
//     const users = rawUsers.map((rawUser) => {
//         return new User(
//             rawUser.picture.large,
//             rawUser.name.first,
//             rawUser.email,
//             rawUser.dob.age
//         )
//     });

//     return users;
// };

export { fetchUsersData };