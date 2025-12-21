// import React, { useState } from 'react'
// import { useNavigate  } from 'react-router-dom'

// const Login = () => {
//   const[credentials,setCredentials]=useState({ëmail:"",password:""})
//   let history= useNavigate();

//     const handleSubmit=async (e)=>{
//         e.preventDefault();
//         const response = await fetch("http://localhost:5000/auth/Login", {
//             method: "POST", // *GET, POST, PUT, DELETE, etc.
//             headers: {
//               "Content-Type": "application/json",
//                // 'Content-Type': 'application/x-www-form-urlencoded',
//             },
//             body: JSON.stringify({email:credentials.email,password:credentials.password})
//         });
//         const json=await response.json();
//         console.log(json)
//         if (json){
//           localStorage.setItem('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU3YWZkNjFkNmMwMjgwNjE4ZjUwZmYyIn0sImlhdCI6MTcwMjU1OTIxNX0.cBhf9nFQqu_HGXRPUWG0bntrryCvbnCDb8aRerGXMl8',json.authtoken)
//           history("/");

//             }else{
//               alert("invalid credentials")
//             }
//           }
//                 const onChange=(e)=>{
//       setCredentials({...credentials,[e.target.name]:e.target.value})
//     }
  
//   return (

//     <div>
//       <div>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlfor="email" className="form-label">
//             Email address
//           </label>
//           <input
//           value={credentials.email} onChange={onChange}
//             type="email"
//             className="form-control"
//             id="email"
//             name="email"
//             placeholder="name@example.com"
//           />
//           <label htmlfor="password" className="form-label">
//             Password
//           </label>
//           <input
//           value={credentials.password} onChange={onChange}
//             type="password"
//             id="password"
//             className="form-control"
//             aria-describedby="passwordHelpBlock"
//             name="password"
//           />

//           <button type="submit" className="btn btn-primary">Submit</button>
//         </div>
//       </form>
//     </div>
//     </div>
//   )
// }

// export default Login;
