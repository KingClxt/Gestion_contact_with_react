import Button from "./Button";
import Modal from "./Modal";


/* eslint-disable react/prop-types */
export default function Contact({contact, deleteContact, toggle, editContact}){
     return (
          <>
           <div className="flex items-center justify-between">
               <div className="flex flex-col gap-1">
                    <p>{contact.nom}</p>
                    <em>{contact.contact}</em>
               </div>
               <div className="flex gap-1">
                    <Button onClick={toggle}>
                         Modifier
                    </Button>
                    <Button isRed onClick={deleteContact}>
                         Supprimer
                    </Button>
               </div>
          </div>
          {
               contact.isShow && <Modal toggle={toggle} editContact={editContact} contact={contact} />
          }
          </>
         

     )
}