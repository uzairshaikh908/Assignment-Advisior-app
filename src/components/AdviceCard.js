import React from 'react';
import './AdviceCard.css';

const AdviceCard = ({ advice, loading, fetchAdvice }) => {
  return (
    <div className="advice-card">
      <h1 className="advice-text">{loading ? "Loading advice..." : `"${advice}"`}</h1>
      <button className="advice-button" onClick={fetchAdvice} disabled={loading}>
        {loading ? "Fetching..." : "Give Me Advice!"}
      </button>
    </div>
  );
};

export default AdviceCard;
