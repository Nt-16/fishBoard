// ResourceCard.jsx
// import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, CardActions, Button, CardMedia } from '@mui/material';

const ResourceCard = ({ title, description, link, image}) => {
  return (
    <Card sx={{
      height: '100%',
      backgroundColor: '#f0f8ff', // Light background color
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow
      borderRadius: '10px', // Rounded corners
      transition: 'transform 0.3s, box-shadow 0.3s', // Smooth transition for hover effect
      zIndex: 1,
      '&:hover': {
        transform: 'scale(1.05)', // Slightly enlarge the card on hover
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)', // Increase shadow depth on hover
        zIndex: 2,
      },
    }}>
      {image && (
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={title}
          sx={{ borderRadius: '10px 10px 0 0' }} // Rounded corners for the image
        />
      )}
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={link} target="_blank">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

ResourceCard.propTypes = {
    title: PropTypes.string.isRequired,      // Expect title to be a string
    description: PropTypes.string.isRequired, // Expect description to be a string
    link: PropTypes.string.isRequired,        // Expect link to be a string
    image: PropTypes.string,
  };

export default ResourceCard;
