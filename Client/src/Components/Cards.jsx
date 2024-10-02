// Card.jsx
import React from 'react';

const Card = ({ imgSrc, title, date, content }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt={title} />
      <h4>{title}</h4>
      <p>{date}</p>
      <p>{content}</p>
    </div>
  );
};

export default Card;

// CSS Styles (you can add this in your CSS file or inside your component)
// .card {
//   border: 1px solid #ddd;
//   border-radius: 5px;
//   padding: 20px;
//   width: 200px; /* Adjust as needed */
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
// }
// .card img {
//   max-width: 100%;
//   border-radius: 5px;
// }
