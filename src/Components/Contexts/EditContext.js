import { createContext, useContext } from "react";

const EditContext=createContext({editValue:-1,setEditValue:()=>{},});

export const EditContextProvider=EditContext.Provider;

export default function useEditContext(){
    return useContext(EditContext);
}