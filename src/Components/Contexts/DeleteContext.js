import { createContext, useContext } from "react"

export const DeleteContext=createContext({
   deleteValue:-1,setDeleteValue:()=>{},
});

export const DeleteContextProvider=DeleteContext.Provider;

export default function useDeleteContext(){
    return useContext(DeleteContext);
}