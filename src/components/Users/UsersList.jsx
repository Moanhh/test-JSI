import React,{useState} from 'react';
import {AiFillDelete} from 'react-icons/ai';
import Card from '../UI/Card';
import classes from './UsersList.module.css';



const UsersList = (props) => {
  const [usersList, setUsersList] = useState([]);
 
  const removeUserHandler = (index) => {
    // console.log(user);
    // const index = usersList.findIndex(x => x.id === user.id);
    console.log(index);
    if (index === -1) return
      else {
      let newUsersList = [...usersList];
      newUsersList.splice(index,1)
      setUsersList([...newUsersList]);
    }

    
  } 

//   const filteredData = UsersList.filter((el) => {
//     //if no input the return the original
//     if (props.input === '') {
//         return el;
//     }
//     //return the item which contains the user input
//     else {
//         return el.text.toLowerCase().includes(props.input)
//     }
// })

  return (
    <div>
      <Card className={classes.users}>
      <ul>
        {props.users.map((user,index) => (
          
                    <li key={user.id} className = "userTag" >
                    {user.name} - ({user.age} years old)
                    
                    <AiFillDelete className="userIcon" onClick={() => removeUserHandler(index)}/>
                   
                  </li>

        ))}
      </ul>
      
    </Card>
    
    </div>

  );
};

export default UsersList;