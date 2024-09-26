// import React from 'react';
import { Typography } from '@mui/material';
import ResourceCard from './components/ResourceCard'; // Import the card component
import './App.css'; // Import your custom CSS

const resources = [
  {
    title: 'Aquascaping Workshop',
    description: 'Learn the art of aquascaping in this hands-on workshop.',
    link: 'https://shop.aquaria-usa.com/product-category/workshops/?_gl=1*jajvz2*_ga*NzE4MTcwNzM4LjE3MjczMTcwNzE.*_ga_FMLJ508QX8*MTcyNzMxNzA3My4xLjAuMTcyNzMxNzA3My4wLjAuMA..',
    image: './images/workshop.jpg',
  },
  {
    title: 'Cherry Shrimp Care Guide',
    description: 'Tips on keeping and breeding cherry shrimp.',
    link: 'https://www.aquariumcoop.com/blogs/aquarium/cherry-shrimp-care?srsltid=AfmBOoqop90KbTY9rAhoUXjSzBNs7V6aUhz-151ID03EbV8jArwq9Eqv',
    image: './images/shrimp.jpg',
  },
  {
    title: 'Guppy Breeding Tips',
    description: 'A comprehensive guide on breeding guppies.',
    link: '#',
    image: './images/guppy.jpg',
  },
  {
    title: 'Aquarium Water Quality',
    description: 'Maintain ideal water parameters in your planted tank.',
    link: 'https://www.aqueon.com/articles/freshwater-aquarium-water-quality',
    image: './images/waterQuality.jpg',
  },
  {
    title: 'Planted Tank Fertilizers',
    description: 'Top fertilizers to help your plants thrive.',
    link: 'https://www.aquariumcoop.com/blogs/aquarium/which-aquatic-fertilizer-is-right-for-you?srsltid=AfmBOorFAykxBG3aUvnG89ix1AlzS7-Yg7v0aeCBcF8xyeH3A8n7IlJj',
    image: './images/plantedTank.jpg',
  },
  {
    title: 'Lighting for Aquariums',
    description: 'How to choose the right lighting for your tank.',
    link: 'https://greenaqua.hu/en/blog/post/what-to-know-about-aquarium-lighting#:~:text=For%20freshwater%20aquariums%2C%20the%20general,temperature%20of%2010%2D15%2C000%20Kelvin.',
    image: './images/light.jpg',
  },
  {
    title: 'Filtration Systems',
    description: 'Best filtration options for a clean and healthy aquarium.',
    link: 'https://buceplant.com/blogs/aquascaping-guides-and-tips/beginners-guide-to-aquarium-filters-and-types-of-filtration?srsltid=AfmBOoo6GSIvYOR0D380FtEgJEiz9lb2vZxqqwMX40fCCLh_SdM80xOS',
    image: './images/filter.jpg',
  },
  {
    title: 'Aquarium Expo',
    description: 'Join the upcoming expo showcasing aquascaping designs and gear.',
    link: 'https://reefapaloozashow.net/pages/new-york',
    image: './images/expo.jpg',
  },
  {
    title: 'Shrimp Tank Setup',
    description: 'Guide to setting up a tank specifically for shrimp.',
    link: 'https://buceplant.com/blogs/aquascaping-guides-and-tips/a-beginners-guide-to-keeping-shrimp?srsltid=AfmBOorfC9Cr-U_hbn0vuUtSSRu7L0N69fWPh7I0Da8Xf_iB8c20gxCb',
    image: './images/shrimpTank.jpg',
  },
  {
    title: 'Fishkeeping for Beginners',
    description: 'A beginner’s guide to starting a freshwater tank.',
    link: 'https://aquariuminfo.org/beginner.html',
    image: './images/betta.jpg',
  },
];

const App = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom align="center" margin='2rem'
        sx={{
          fontSize: '3rem', // Make the font larger
          fontWeight: 'bold', // Make the text bold
          textShadow: '2px 4px 6px rgba(0, 0, 0, 0.3)', // Add shadow
          color: '#333', // Dark color for better contrast
        }}
      >
        Aquarium Enthusiasts Board
      </Typography>
      <div className="card-container">
        {resources.map((resource, index) => (
          <ResourceCard
            key={index}
            title={resource.title}
            description={resource.description}
            link={resource.link}
            image={resource.image}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
