import React, { useState } from 'react';
import './App.css';
import { motion } from 'framer-motion';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the email submission logic
    alert(`Thank you! We'll notify you at ${email} when the site is ready.`);
    setShowPopup(false);
  };

  return (
    <div className="App">
      <div className="container">
        <motion.h1
          className="title"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Work in Progress
        </motion.h1>

        <motion.p
          className="subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Our future is coming soon...
        </motion.p>

        <motion.div
          className="neon-bar"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ delay: 1.5, duration: 2 }}
        />

        <motion.div
          className="neon-circle"
          animate={{ scale: [1, 1.5, 1], rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 4 }}
        />

        <button className="animated-button" onClick={handleButtonClick}>
          Avvisami quando attivo
        </button>

        {showPopup && (
          <div className="popup-overlay">
            <div className="popup">
              <button className="close-button" onClick={handleClosePopup}>X</button>
              <h2>Stay Updated</h2>
              <form onSubmit={handleFormSubmit}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;