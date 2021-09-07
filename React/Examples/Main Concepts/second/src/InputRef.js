import React from 'react'


// function InputRef() {
//     return (
//         <div>
//             <input/>
//         </div>
//     )
// }


const InputRef = React.forwardRef((props, ref) => {
  return (
   <div>
       <input ref = {ref}/>
   </div>
  )
})
export default InputRef