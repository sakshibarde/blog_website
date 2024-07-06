import React from 'react';
import './CardSection.css';
import { Form, useNavigate } from 'react-router-dom';

import cover1 from '../../../assets/Cards/cover1.jpg';
import cover2 from '../../../assets/Cards/cover2.jpg';
import cover3 from '../../../assets/Cards/cover3.jpg';
import cover4 from '../../../assets/Cards/cover4.png';
import cover5 from '../../../assets/Cards/cover5.jpg';
import cover6 from '../../../assets/Cards/cover6.jpg';
import cover7 from '../../../assets/Cards/cover7.jpg';


export const cards = [
  {
    id: 1,
    title: '7 CSS tools you should be using ',
    category: 'development',
    subCategory: ['frontend', 'ui/ux', 'design'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    authorName: 'John Doe',
    authorAvatar: '/assets/images/author.jpg',
    createdAt: 'June 03, 2021',
    cover: cover1,
  },
  {
    id: 2,
    title: 'Milan Places That Highlight The City',
    category: 'travel',
    subCategory: ['vacation', 'holidays', 'sight seeing'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    authorName: 'John Doe',
    authorAvatar: '/assets/images/author.jpg',
    createdAt: 'June 03, 2021',
    cover: cover2,
  },
  {
    id: 3,
    title: 'Online Shopping – An Alternative to Shopping in the Mall',
    category: 'shopping',
    subCategory: ['e-commerce store', 'clothing', 'shopping store'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    authorName: 'John Doe',
    authorAvatar: '/assets/images/author.jpg',
    createdAt: 'June 03, 2021',
    cover: cover3,
  },
  {
    id: 4,
    title: 'ADVENTURE IN YOU',
    category: 'adventure',
    subCategory: ['adrenaline', 'stay-fit', 'lifestyle'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    authorName: 'John Doe',
    authorAvatar: '/assets/images/author.jpg',
    createdAt: 'June 03, 2021',
    cover: cover4,
  },
  {
    id: 5,
    title: 'Loaded BBQ Baked Potatoes',
    category: 'cooking',
    subCategory: ['bbq', 'food', 'lifestyle'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    authorName: 'John Doe',
    authorAvatar: '/assets/images/author.jpg',
    createdAt: 'June 03, 2021',
    cover: cover5,
  },
  {
    id: 6,
    title: 'Beyond the Beach',
    category: 'travel',
    subCategory: ['beaches', 'sea', 'holidays'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    authorName: 'John Doe',
    authorAvatar: '/assets/images/author.jpg',
    createdAt: 'June 03, 2021',
    cover: cover6,
  },
  {
    id: 7,
    title: 'Art & Perception',
    category: 'art',
    subCategory: ['skill', 'design', 'passion'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    authorName: 'John Doe',
    authorAvatar: '/assets/images/author.jpg',
    createdAt: 'June 03, 2021',
    cover: cover7,
  },
];

function CardSection() {
  const navigate= useNavigate();
  return (
    <section className="card-section">
      <h2 className="section-title">Latest Reads</h2>
      <div className="cards-container">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <img src={card.cover} alt="cover image" className="card-image" />
            <h3 className='card-title'>{card.title}</h3>
            <button className="read-more-button" onClick={()=>navigate(`/BlogPage/${card.id}`)}>Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CardSection;

