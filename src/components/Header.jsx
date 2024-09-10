/* eslint-disable react/prop-types */

import { Plus } from "lucide-react";
import Button from "./BodyComponent/Button";
import Input from "./BodyComponent/Input";
import Title from "./HeaderComponents/Title";
import { useContact } from "../App";

export default function Header(){
     const context = useContact()
     return <>
          <Title text="CONTACTS_CLXT" />
          
          <form onSubmit={context.addContact} className="flex gap-1">
               <div className="flex flex-col">
                    <div>
                         <Input name="search" placeholder="Rechercher un contact" handleChange={context.searchContact}   />
                    </div>
                    <div className="flex gap-1">

                         <div className="flex gap-1">
                              <Input name="nom" isRequired placeholder="Saisir le nom" />
                              <Input name="contact" isRequired placeholder="Saisir le numéro" />
                         </div>

                         <Button className="btn-sm h-full">
                              <Plus />
                         </Button>
                    </div>
                    
               </div>
               
              
               
              
          </form>
          
     </>
}