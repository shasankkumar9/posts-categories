import React from 'react'
import { makeStyles } from '@mui/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const useStyles = makeStyles({
  singleItem: {
    margin: '0.25rem',
    display: 'flex',
    flexDirection: 'row',
  },
  ids: {
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'hotpink',
  },
  body: {
    '&::first-letter': {
      textTransform: 'uppercase',
    },
  },
})

function SingleInfo({ id, title, body }) {
  const classes = useStyles()
  return (
    <Card className={classes.singleItem}>
      <Typography
        variant='h2'
        className={classes.ids}
        sx={{ marginRight: 0, paddingRight: 0 }}
        gutterBottom>
        {id}.
      </Typography>
      <CardHeader />
      <CardContent>
        <Typography
          variant='h5'
          className='capitalize'
          color='primary'
          sx={{ marginBottom: 2 }}>
          {title}
        </Typography>
        <Typography variant='body1' component='div' className={classes.body}>
          {body}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default SingleInfo
