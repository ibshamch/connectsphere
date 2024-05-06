import { createContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({children}){
    const [darkTheme,setDarkTheme] = useState(false)
    function handleTheme (){
        setDarkTheme(!darkTheme)
    }

    const dataToShare = {
    darkTheme,
       handleTheme
    }

    return <ThemeContext.Provider value={dataToShare}>
        {children}
    </ThemeContext.Provider>
}

export {ThemeProvider};
export default ThemeContext;