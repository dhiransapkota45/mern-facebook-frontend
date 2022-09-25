import { useState } from "react"
import {createContext} from "react"

const NewContext = createContext()
const NewContext2 = createContext()

const ContextComponent = ({childern}) => {
    const [openModal, setOpenModal] = useState(false)
    
    return(
        
            <NewContext.Provider value={{openModal, setOpenModal}}>
                {childern}
            </NewContext.Provider>
        
    )
}

export default ContextComponent
export {NewContext, NewContext2}