/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

/* eslint-disable react/prop-types */
export default function Input({value, handleChange,name, placeholder, isRequired}){
     return <>
     {
          isRequired?
                    <input 
                         placeholder={placeholder }
                         type="text" 
                         className="input input-bordered w-full my-1"
                         name={name}
                         value={value}
                         onChange={handleChange}
                         required
                    /> 
                    :
                    <input 
                         placeholder={placeholder }
                         type="text" 
                         className="input input-bordered w-full my-1"
                         name={name}
                         value={value}
                         onChange={handleChange}
                    /> 
     }
          
     </>
}