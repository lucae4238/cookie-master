import { Layout } from "@/components/layouts/"
import { Box, Typography, useTheme } from "@mui/material"


export default function Home() {
  const theme = useTheme()
  return (

    <Layout>
      <Box sx={{ bgcolor: theme.palette.background.default }}>
        <Typography variant="h1">hola mundo</Typography>
      </Box>
    </Layout>
  )
}
