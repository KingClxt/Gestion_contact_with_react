/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createPortal } from "react-dom";
import Input from "./Input";
import Title from "../HeaderComponents/Title";
import Button from "./Button";
import { useState } from "react";

export default function Modal({contact, toggle, editContact}){
  const [inp1, setInput1] = useState(contact.nom)
  const [inp2, setInput2] = useState(contact.contact)
  const handleChange1=(e)=>{
    setInput1(e.target.value)
  }
  
  const handleChange2=(e)=>{
    setInput2(e.target.value)
  }

     return (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-10 relative">
            {/* Bouton pour fermer la modale */}
            <button
               onClick={toggle}
              className="btn btn-error absolute top-3 right-4"
            >
              &times;
            </button>
            <form onSubmit={editContact}>
                <Title text="Modifier le contact" />
                <Input handleChange={handleChange1} name="nom" value={inp1} />
                <Input handleChange2={handleChange2} name="contact" value={inp2} />
                <Button className="w-full">
                    Modifier
                </Button>
            </form>
            
          </div>
        </div>
     )
}