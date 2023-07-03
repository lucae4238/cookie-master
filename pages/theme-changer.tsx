import { FC, useEffect, useState } from "react"
import { GetServerSideProps } from 'next'

import { Layout } from "@/components/layouts"

import { Button, Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material"
import Cookies from "js-cookie"
import axios from "axios"

interface Props {
  theme: string
  name: string
}

const ThemeChangerPage: FC<Props> = ({theme}) => {

  const [currentTheme, setCurrentTheme] = useState(theme)

  const onThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedTheme = e?.target?.value

    setCurrentTheme(selectedTheme)
    Cookies.set("theme", selectedTheme)
  }

  const onClick = async () => {
    const { data } = await axios.get("/api/hello")


  }

  useEffect(() => {
    console.log("LocalStorage", localStorage.getItem("theme"))
    console.log("Cookies", Cookies.get("theme"))
  }, [])


  return (
    <Layout>
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>Tema</FormLabel>
            <RadioGroup value={currentTheme} onChange={onThemeChange}>
              <FormControlLabel value={'light'} control={<Radio />} label="Light" />
              <FormControlLabel value={'dark'} control={<Radio />} label="Dark" />
              <FormControlLabel value={'custom'} control={<Radio />} label="Custom" />
            </RadioGroup>
          </FormControl>

          <Button onClick={onClick}>
            Request
          </Button>
        </CardContent>
      </Card>
    </Layout>
  )
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

  export const getServerSideProps: GetServerSideProps = async ({ req }) => {

    const { theme = 'light', name = 'no name' } = req.cookies

    const validThemes = ["dark", "light", "custom"]


    return {
      props: {
        theme: validThemes.includes(theme) ? theme : "light", 
        name
      }
    }
  }

export default ThemeChangerPage 