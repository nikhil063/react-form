
// const validate = (e) => {
//     let name = e.target.name;
//     let value = e.target.value;
//     SetError((prev) => {
//         const obj = { ...prev, [name]: "" };
//         switch (name) {
//             case "email":
//                 let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//                 if (!mailformat.test(inputValue.email)){
//                     obj[name]="Invalid email format";
//                 }
//                 break;

//                 case "password":
//                     if(inputValue.password.length<6){
//                         obj[name]="Password must contain at least 6 characters"
//                     }
//                     break;
//                     case "cpassword":
//                         if(inputValue.password!==inputValue.cpassword){
//                             obj[name]="Both passwords must match"
//                         }
//                         break;
//                         default:
//                             break;
//         }
//         return obj;
//     })
// }

// export default validation;