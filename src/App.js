import React, { useState } from "react";
import "./App.scss";
import Card from "./components/Card/Card";
import cardsData from './cardsData'; 

function App() {
  const [activeCard, setActiveCard] = useState(2);

  const handleCardClick = (id) => {
    if (cardsData.some(card => card.id === id)) {
      setActiveCard(id);
    } else {
      console.error(`Invalid card ID: ${id}`);
    }
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
