/* eslint-disable react/prop-types */
import clsx from "clsx";

export default function Button({children, onClick, className, isRed}){
     const style = className?className:''
     return (
          <>
               <button 
                    onClick={onClick} 
                    className={clsx("btn",isRed?"btn-error":"bg-black", "font-semibold", 
                                   'text-white', !isRed?'hover:bg-black':null, style
                                   )}>
                    {children}
               </button>
          </>
     )
}