import React from 'react';
import './AppointmentCard.css';

const cardData = [
  {
    id: 1,
    title: 'Waste X',
    imageUrl: 'https://images.unsplash.com/photo-1605600659908-0ef719419d41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FyYmFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', // Replace with your image URLs
   
  },
  {
    id: 2,
    title: 'Eco Waste',
    imageUrl: 'https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FyYmFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
   
  },
  {
    id: 3,
    title: 'Waste Champ',
    imageUrl: 'https://images.unsplash.com/photo-1561503412-852800622772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2FyYmFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    
  },
  {
    id: 4,
    title: 'Garbage Boiz',
    imageUrl: 'https://images.unsplash.com/photo-1574974671999-24b7dfbb0d53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdhcmJhZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
   
  },
  // Add more card data as needed
];

const Card = ({ title, imageUrl, description }) => (
  <div className="card1">
    <img src={imageUrl} alt={title} className="card-image1" />
    <div className="card-content1">
      <h3>{title}</h3>
      <p>{description}</p>
      <button className='b1'>Book</button>
    </div>
  </div>
);

const AppointmentCard = () => (
    
  <div className="CardPage1">
    <div className="card-list1">
    
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

export default AppointmentCard;
