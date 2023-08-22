import React from 'react';
import './Community.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
const cardData = [
  {
    id: 1,
    title: 'Trivandrum',
    imageUrl: 'https://images.unsplash.com/photo-1614090699960-b4c81be49f3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80', // Replace with your image URLs
    description: 'A community of trivians dedicated to keeping the city clean.',
  },
  {
    id: 2,
    title: 'Kollam',
    imageUrl: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80',
    description: 'Join us and help keep kollam clean.',
  },
  {
    id: 3,
    title: 'Kannur',
    imageUrl: 'https://images.unsplash.com/photo-1606619071892-b37a5d615297?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80',
    description: 'Discover new places and clean kannur.',
  },
  {
    id: 4,
    title: 'Wayanad',
    imageUrl: 'https://images.unsplash.com/photo-1607054931379-95e37fc6684b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    description: 'The pride of wayanad is cleanliness, help us maintain it.',
  },
  // Add more card data as needed
];

const Card = ({ title, imageUrl, description }) => (
  <div className="card">
    <img src={imageUrl} alt={title} className="card-image" />
    <div className="card-content">
      <h3>{title}</h3>
      <p>{description}</p>
      <button className='b1'><Link to={"/chat"} className='nog' style={{textDecoration: 'none'}} >Chat</Link></button>
    </div>
  </div>
);

const Community = () => (
    
  <div className="CardPage">
    <Navbar/>
    <h1 className='h1'>COMMUNITIES</h1><br></br>
    <h2 className='h2'>Find your place.</h2>
    <div className="card-list">
    
      {cardData.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          imageUrl={card.imageUrl}
          description={card.description}
          
        />
        
        
      ))}
    
    </div>
  </div>
);

export default Community;
