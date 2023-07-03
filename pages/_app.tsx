import type { AppContext, AppProps } from 'next/app'

import { CssBaseline, ThemeProvider } from '@mui/material'

import '@/styles/globals.css'
import { customTheme, darkTheme, lightTheme } from '@/themes'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'

interface MyAppProps extends AppProps {
  theme: string
}

export default function App({ Component, pageProps }: MyAppProps) {
  const [currentTheme, setCurrentTheme] = useState(lightTheme)

  useEffect(() => {
  const theme = Cookies.get("theme") || "light"
  const selectedTheme = theme === "light" ? lightTheme : theme === "dark" ? darkTheme : customTheme
  setCurrentTheme(selectedTheme)
  
  }, [])
  


  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

// App.getInitialProps = async (appContext: AppContext) => {

//   const { theme } = appContext.ctx.req ? (appContext.ctx.req as any).cookies : { theme: "light" }
//   console.log('cookies', theme)


//   const validThemes = ["dark", "light", "custom"]


//   return {
//     theme: validThemes.includes(theme) ? theme : "light",
//   }
// }
