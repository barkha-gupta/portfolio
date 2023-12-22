import React, { useState } from "react";
const Context= React.createContext();

function ContextProvider({children }){
    const [navToggle, setNavToggle]= useState(false);
    function handleNavToggle(){
        setNavToggle(pre => !pre);
    }
    return(
        <Context.Provider value={{setNavToggle, handleNavToggle, navToggle}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context};