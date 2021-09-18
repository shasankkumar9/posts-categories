import React from 'react'
import Container from '@mui/material/Container'
import { makeStyles } from '@mui/styles'
import Typography from '@mui/material/Typography'

const useStyles = makeStyles({
  errorContainer: {
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 180,
  },

  errorText: {
    marginTop: 40,
    textAlign: 'center',
    color: '#1976d2',
  },
})

function Error() {
  const classes = useStyles()
  return (
    <Container className={classes.errorContainer}>
      <Typography variant='h4' className={classes.errorText}>
        Something went wrong!
      </Typography>
    </Container>
  )
}

export default Error
