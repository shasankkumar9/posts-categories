import * as React from 'react'
import { Link } from 'react-router-dom'
import { styled, alpha } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded'
import SearchIcon from '@mui/icons-material/Search'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import { pink } from '@mui/material/colors'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

const useStyles = makeStyles({
  btngrp: {
    margin: 0,
    '& a': {
      fontSize: 18,
      textDecoration: 'none',
      color: 'white',
      padding: 18,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '&:hover': {
        backgroundColor: 'rgb(106, 174, 237)',
      },
      '&:active': {
        backgroundColor: 'rgb(13, 82, 147)',
      },
      '&:click': {
        backgroundColor: 'rgb(13, 82, 147)',
      },
    },
  },
})

export default function SearchAppBar({ searchTerm, setSearchTerm }) {
  const classes = useStyles()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <CategoryRoundedIcon fontSize='large' sx={{ color: pink[500] }} />
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{
              flexGrow: 1,
              marginLeft: 2,
              display: { xs: 'none', sm: 'block' },
            }}>
            Posts Categorized
          </Typography>
          <ButtonGroup
            variant='text'
            aria-label='text button group'
            className={classes.btngrp}
            sx={{ margin: 0 }}>
            <Link to='/'>All</Link>
            <Link to='/two'>Two</Link>
            <Link to='five'>Five</Link>
          </ButtonGroup>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Search…'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
