import {createContext, ReactNode, useEffect, useState} from 'react'
import {ThemeController} from "../../store";

export const ThemeContext = createContext({
    style:'',
    setStyleHandler: (_style:string)=>{ }
    // setStyleHandler: ()=>{}
})

export const ThemeContextProvider = ({children}:{children:ReactNode}) => {

    // const [style, setStyle] = useState('light');
    const [style, setStyle] = useState(ThemeController.getTheme() ?? 'light');


    console.log(style,'초기값?')

    const setStyleHandler = (style:string) => {
        if(style==='light'){
            setStyle('dark')
            ThemeController.change({color: 'dark'})
            document.body.className='dark'
        }else{
            setStyle('light')
            ThemeController.change({color: 'light'})
            document.body.className='light'
        }
    }

    useEffect(()=>{
        // ThemeController.change('light')
        document.body.className=style
    },[style])

    return (
        <ThemeContext.Provider value={{style,setStyleHandler}}>
            {children}
        </ThemeContext.Provider>
    );
};
