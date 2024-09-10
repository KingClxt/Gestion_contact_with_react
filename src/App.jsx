/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-case-declarations */

import { createContext, useContext, useState } from "react";
import AllContacts from "./components/AllContacts"
import Header from "./components/Header"
import _ from "lodash";
import {v4 as uuid} from "uuid"
import { SetLocalStorage } from "./functions";
// Recuperer le tableau stocker dans localStorage si il exite dans le cas contraire recuperer un tableau vide
let initialState = localStorage.getItem('contacts')
                    // Convertie le tab sous forme de str contenue dans le storage en tableau JS
                    ?JSON.parse(localStorage.getItem('contacts'))
                    // on retourne un tableau JS et cree un tableau vide dans notre storage
                    :(localStorage.setItem('contacts', '[]'))?'':[]


const contactContext = createContext(null)

export const useContact = ()=>{
  const context = useContext(contactContext)
  if(!context)return null
  return context
}
function App() {
        const [contacts, setContacts] = useState(initialState)

        // Fonctions de gestion des contacts
        const addContact = (e)=>{
          e.preventDefault()
          const formData = new FormData(e.currentTarget)
          const newContact = {
               id:uuid(),
               nom : formData.get('nom'),
               contact:formData.get('contact'),
               isShow:false
          }
          const newContacts = [...contacts, newContact]
          // Sauvegarde la nouvelle liste de contact dans le storage
          SetLocalStorage(newContacts)
          setContacts(newContacts)
}
          const deleteContact = (id)=>{
            const deletedContacts = contacts.filter(contact=>contact.id !== id)
            SetLocalStorage(deletedContacts)
            setContacts(deletedContacts)
          }
          const toggle = (id) =>{
            const newContacts = contacts.map(contact=>(
              contact.id === id?{
                ...contact,
                isShow:!contact.isShow
              }:contact
            ))
            SetLocalStorage(newContacts)
            setContacts(newContacts)
          }
          const editContact = (e,id)=>{
            e.preventDefault()
            const formData = new FormData(e.currentTarget)
            
            const newContacts = contacts.map(contact=>(
              contact.id === id?{
                ...contact,
                nom : formData.get('nom'),
                contact:formData.get('contact'),
                isShow:false
              }:contact
            ))
            // Sauvegarde la nouvelle liste de contact dans le storage
            SetLocalStorage(newContacts)
            setContacts(newContacts)
          }
          const searchContact = (e)=>{
            if(e.target.value !== ''){

                const newContact = contacts.filter(contact=>{
                   return contact.nom.toLowerCase().includes(e.target.value.toLowerCase())
                  })
                setContacts(newContact)
            }
            else{
              setContacts(JSON.parse(localStorage.getItem('contacts')))
            }
          }
        return (
           <contactContext.Provider value={{
                contacts,
                addContact,
                deleteContact,
                toggle,
                editContact,
                searchContact
           }}>
            <div className="flex items-center justify-center flex-col h-screen">
              <Header />
              <AllContacts />
            </div>
              
           </contactContext.Provider>
            
        )
            

}
export default App
