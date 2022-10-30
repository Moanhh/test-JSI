import React, { useState } from 'react';
// import SearchBar from './components/UI/SearchBar'
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  //TODO: Work on the sorting user algorithms here


  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  
  

  function SortAge(usersList) {
    usersList.sort((a, b) => a.age-b.age)
  };

  SortAge(usersList);
  

  return (
    <div>
      {/* <SearchBar/> */}
      <AddUser onAddUser={addUserHandler} />
      <UsersList  users={usersList} />
    </div>
  );
}

export default App;