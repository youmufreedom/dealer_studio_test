import React, { useState } from "react";
import "./App.scss";
import Card from "./components/Card/Card";
import cardsData from './cardsData'; 

function App() {
  // Define state for active card
  const [activeCard, setActiveCard] = useState(2);

  // Handler for card click
  const handleCardClick = (id) => {
    setActiveCard(id);
  };

  return (
    <div className="app">
      {/* Banner Section */}
      <header className="banner">
        <div className="overlay">
          <h1>Welcome to G Automotive</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="contact-us">Contact Us</button>
        </div>
      </header>
      {/* Cards Section */}
      <div className="card-container">
        {cardsData.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            isActive={activeCard === card.id}
            imageSrc={card.imageSrc}
            header={card.header}
            bodyText={card.bodyText}
            extraContent={card.extraContent}
            onClick={handleCardClick}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
