import { ThemeProvider } from 'styled-components';
import { useState } from 'react'
// import theme from "../themes/default";
import { light } from '../themes/light'
import { dark } from '../themes/dark'
import GlobalStyles from './globals';
import { ToggleButton } from './ToggleBtn'
// import usePersistedState from '../utils/usePersistedState'




const Theme = ({ children }) => {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }
  
  return (
  <ThemeProvider theme={theme}>
    <ToggleButton toggleTheme={toggleTheme}/>
    <GlobalStyles />
    {children}
  </ThemeProvider>
  )
};

export default Theme;