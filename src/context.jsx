import React, { useState, useContext } from "react"

const Appcontext = React.createContext()
const AppProvivider = ({children})=>{
    
    const [projectId, setProjectId ]= useState(1)
    const handleProject = (id)=>{
        return setProjectId(id)
    }
    return(
       <Appcontext.Provider value= { {projectId, handleProject}}>
         {children}
       </Appcontext.Provider>
    )
}
export const useGlobalContext = ()=>{
    return useContext(Appcontext)
}
export {AppProvivider, Appcontext}