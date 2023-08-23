import React from 'react';
import './CardPage.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
const cardData = [
  {
    id: 1,
    title: 'How To Begin.',
    imageUrl: 'https://images.unsplash.com/photo-1604187351574-c75ca79f5807?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', // Replace with your image URLs
    description: 'An informative primer on waste segmentation and responsible waste management practices.',
  },
  {
    id: 2,
    title: 'Organic Waste.',
    imageUrl: 'https://images.unsplash.com/photo-1537541412475-47335a7c1f9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    description: 'An insightful overview of organic waste management and essential practices for responsible handling.',
  },
  {
    id: 3,
    title: 'Plastic Waste.',
    imageUrl: 'https://images.unsplash.com/flagged/photo-1572213426852-0e4ed8f41ff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80',
    description: 'A concise guide to plastic waste management and key principles for conscientious handling.',
  },
  {
    id: 4,
    title: 'E-Waste.',
    imageUrl: 'https://images.unsplash.com/photo-1612965110667-4175024b0dcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80',
    description: 'A concise guide to dry waste management and key principles for conscientious handling.',
  },
  // Add more card data as needed
];

const Card = ({ title, imageUrl, description,id}) => (
  <div className="card">
    <img src={imageUrl} alt={title} className="card-image" />
    <div className="card-content">
      <h3 className='text-[90%] md:text-[100%]'>{title}</h3>
      <p className='text-[80%] md:text-[90%]'>{description}</p>
      <Link to={`guide${id}`} className='nog text-white text-[70%]' style={{textDecoration: 'none'}} >Read more.</Link>
    </div>
  </div>
);

const CardPage = () => (
  <div className="CardPage">
    <Navbar/>
    <h1 className='h1'>SEGMENTATION GUIDE</h1>
    <div className="card-list">
      {cardData.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          imageUrl={card.imageUrl}
          description={card.description}
          id={card.id}
        />
      ))}
    </div>
  </div>
);

export default CardPage;
