import React from 'react';
import './ApplicationItem.scss';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import ApplicationImage from '../../assets/images/webapp-icon.png';

const defaults = {
  name: 'Application Name',
  id: 'Application ID',
};
const ApplicationItem = ({ name, id, image }) => {
  return (
    <Card className='application-item' data-type='application'>
      <Box className='application-image'>
        <CardMedia
          component='img'
          image={image || ApplicationImage}
          alt='Application'
        />
      </Box>
      <Box className='application-main'>
        <CardContent sx={{ padding: '0' }}>
          <Typography>{name || defaults.name}</Typography>
          <Typography>{id || defaults.id}</Typography>
        </CardContent>
        <CardActions
          className='application-item-controls'
          sx={{ padding: '0' }}
        >
          <Button size='small' color='primary'>
            Edit
          </Button>
          <Button size='small' color='secondary'>
            Delete
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
};

export default ApplicationItem;
