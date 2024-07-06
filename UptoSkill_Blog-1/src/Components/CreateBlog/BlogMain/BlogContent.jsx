import React from 'react'
import './BlogContent.css';
import { useParams } from 'react-router-dom';
import { cards } from '../../LandingPage/Cards/CardSection';



const BlogContent = () => {
  const { id } = useParams(); // Get the card ID from the route parameter
  const card = cards.find(card => card.id === parseInt(id, 10)); // Find the specific card by ID


  return (
    <div className='blog-content-container'>
          <div className='blogContent' >
          <div className='details'>
              <div className='blog-img'>
                  <img src={card.cover} alt="" />
              </div>
              <h2 className='blog-title'>{card.title}</h2>
              <p className='author-date'>
              <span className="user-icon">
                <i className="fas fa-user"></i>
              </span>
              <p>{card.authorName} | {card.createdAt}</p>
              </p>
              <div className='mainContent'>{card.description}</div>
          </div>
          </div>
    </div>
  );
}

export default BlogContent