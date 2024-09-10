/* eslint-disable react/jsx-key */

import { useContact } from "../App"
import Contact from "./BodyComponent/Contact"


export default function AllContact(){
     const context = useContact()
     return (
          <div className="flex-col flex w-1/3 mx-auto">
               <p>Nombre de contact: {context.contacts.length}</p>
                    <div className="flex flex-col gap-2">
                         {context.contacts.map(contact=>(
                              <Contact 
                              key={contact.id} 
                              contact={contact}
                              deleteContact={()=>context.deleteContact(contact.id)}
                              toggle={()=>context.toggle(contact.id)}
                              editContact={(e)=>context.editContact(e, contact.id)}
                              />
                         ))}
                    </div>
                    
          </div>
          
         
          
         
     )
}