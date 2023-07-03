import React from 'react'

import { AppBar, IconButton, Toolbar, Link as StyleLink, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <AppBar
      position='sticky'
      elevation={0}
    >
      <Toolbar>
        <IconButton size='large' edge='start'>
          <MenuIcon />
        </IconButton>

        <Link className='home-link nav-link' href={"/"} >
          CookieMaster
        </Link>

        <div style={{ flex: 1 }} />

        <Link className='home-link nav-link' href={"/theme-changer"} >
          Cambiar tema
        </Link>

      </Toolbar>

    </AppBar>
  )
}
