import React, { Fragment } from 'react';
// import PropTypes from 'prop-types'

import './App.css';
import { UsersList } from './users/UsersList';
// import { UserCardItem } from './users/UserCardItem';
import { Header } from './common/Header';
import { Footer } from './common/Footer';
// import { UserListItem } from './users/UserListItem';

import { fetchUsers } from '../services/UserService'


const App = () => {
  const users = fetchUsers();
  
  return (
    < Fragment >
        <header className="App-header">
          < Header />
        </header>
      < main className="App" >

        <UsersList listOfUsers={users} />
      </main >
      <footer className="App-footer">
        <Footer />
      </footer>
    </Fragment>
  );
}

export default App;
