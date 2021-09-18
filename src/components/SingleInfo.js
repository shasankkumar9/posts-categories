import React from 'react'
import './styles/SingleInfo.css'
import { pink } from '@mui/material/colors'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

function SingleInfo({ id, title, body }) {
  return (
    <Card className='single-item'>
      <Typography
        variant='h2'
        color={pink[500]}
        align='center'
        className='ids'
        sx={{ marginRight: 0, paddingRight: 0 }}
        gutterBottom>
        {id}
      </Typography>
      <CardHeader />
      <CardContent sx={{ marginTop: 3.5, marginLeft: 0, paddingLeft: 0 }}>
        <Typography
          variant='h5'
          className='capitalize'
          color='primary'
          sx={{ marginBottom: 2 }}>
          {title}
        </Typography>
        <Typography variant='body1' component='div' className='body'>
          {body}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default SingleInfo
