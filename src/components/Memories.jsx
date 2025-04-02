import { useState } from 'react';

export default function Memories({ photos, onForgive }) {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);
  const [extraPromises, setExtraPromises] = useState(false);

  const nextPhoto = () => setCurrentPhoto((prev) => (prev + 1) % photos.length);

  const handleNeedConvincing = () => {
    setExtraPromises(true);
  };

  const handleShowPhoneNumber = () => {
    setShowPhoneNumber(true);
  };

  return (
    <div className="memories">
      <h2>Our Beautiful Memories</h2>
      <div className="photo-gallery">
        <img 
          src={`/assets/images/${photos[currentPhoto]}`} 
          alt="Our memory" 
          onClick={nextPhoto}
          style={{
            maxWidth: '100%',
            borderRadius: '10px',
            margin: '20px 0',
            cursor: 'pointer',
            maxHeight: '300px',
            objectFit: 'cover'
          }}
        />
        <p>Click photo to see more</p>
      </div>

      <div className="final-message">
        <p>No argument can change how much I love you</p>
        <p>Will you forgive me?</p>

        <div className="response-buttons">
          <button onClick={onForgive}>Yes, I forgive you ❤️</button>
          <button onClick={handleNeedConvincing}>I need more convincing</button>
        </div>

        {/* Extra Promises Section */}
        {extraPromises && (
          <div className="extra-promises">
            <h3>I Promise You More...</h3>
            <ul>
    
              <li>🤗 I'll always hug you first after arguments</li>
              <li>🎁 I'll properly listen to you</li>
              <li>Always with you </li>
            </ul>
            
            <button 
              onClick={handleShowPhoneNumber}
              style={{ background: '#4CAF50' }}
            >
              Call Me to Talk
            </button>
          </div>
        )}

        {/* Phone Number Section */}
        {showPhoneNumber && (
          <div className="phone-section">
            <p>I'm waiting for your call...</p>
            <a 
              href="tel:+916371497383" 
              className="call-button"
            >
              📞 +91 63714 97383
            </a>
            <small>(Tap to call instantly)</small>
          </div>
        )}
      </div>
    </div>
  );
}