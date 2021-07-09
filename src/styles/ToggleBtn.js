import React, {useState} from 'react'
import { BsSun, BsMoon } from 'react-icons/bs'

export const ToggleButton = ({toggleTheme}) => {
    const [sunIcon, setSunIcon] = useState(false)

    const toggleIcon = () => {
        setSunIcon(!sunIcon);
        toggleTheme()
    }

    return (
        <button
            onClick={toggleIcon}
            style={{position: 'absolute', background: 'transparent', border:'0', color:"white", margin:'5px 5px', left:'96%'}}
        >
           {sunIcon ? <BsSun size="3rem"/> : <BsMoon size ="3rem"/>}
        </button>
    )
};