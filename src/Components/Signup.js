// import React,{useState} from "react";
// import { useNavigate  } from 'react-router-dom';
// const Signup = () => {
//   const[credentials,setCredentials]=useState({name:"",ëmail:"",password:"",cpassword:""})
//   let history= useNavigate();
  
//   const handleSubmit=async (e)=>{
//     e.preventDefault()
//     const {name,email,password}=credentials;
//     const response = await fetch("http://localhost:5000/auth/createuser", {
//         method: "POST", // *GET, POST, PUT, DELETE, etc.
//         headers: {
//           "Content-Type": "application/json",
//            // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: JSON.stringify({name,email,password})
//     });
//     const json=await response.json();
//     console.log(json)

//     localStorage.setItem('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU3YWZkNjFkNmMwMjgwNjE4ZjUwZmYyIn0sImlhdCI6MTcwMjU1OTIxNX0.cBhf9nFQqu_HGXRPUWG0bntrryCvbnCDb8aRerGXMl8',json.authtoken)
//       history("/");
//    }
     

// const onChange=(e)=>{
//   setCredentials({...credentials,[e.target.name]:e.target.value})
// }

//   return (
//     <div className="container">
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlfor="email" className="form-label">
//             Name
//           </label>
//           <input
//         type="text"
//             className="form-control"
//             id="name"
//             name="name"
//             placeholder="name@example.com"
//             onChange={onChange}
//           />
//           <label htmlfor="email" className="form-label">
//             Email address
//           </label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             name="email"
//             placeholder="name@example.com"
//             onChange={onChange}
//           />
//           <label htmlfor="password" className="form-label">
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             className="form-control"
//             aria-describedby="passwordHelpBlock"
//             name="password"
//             onChange={onChange}
//             required
//             minLength={5}
//           />
//           <label htmlfor="password" className="form-label">
//             Password
//           </label>
//           <input
//             type="password"
//             id="cpassword"
//             className="form-control"
//             aria-describedby="passwordHelpBlock"
//             name="cpassword"
//             onChange={onChange}
//             required
//             minLength={5}
//           />

//           <button type="submit" className="btn btn-primary"onSubmit={handleSubmit}>Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Signup;
