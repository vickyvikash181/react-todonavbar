// import React, {useState,useEffect} from "react";
// function Users() {
//     const [Users] = useState([]);

//     useEffect(() => {
//       fetch("http://localhost:3000/users/").then(res => {
        
//         if(res.ok) {
//                   return res.json()
//              }
//         }).then(jsonRes =>  (jsonRes.UsersList))
//     })
//  return (<div>

//      {Users.map(user => <li>{user}</li>)}
//     </div>)
// }
//  export default Users;