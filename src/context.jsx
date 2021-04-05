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
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Coding Class</title>
</head>
<body>
    
</body>
</html>