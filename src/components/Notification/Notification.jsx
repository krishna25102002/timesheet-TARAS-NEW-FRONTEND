import React, { useEffect } from 'react';
import './NotificationStyles.css';

const Notification = ({ message, type = 'success', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`notification ${type}`}>
      {type === 'success' && <span className="icon">✓</span>}
      {type === 'error' && <span className="icon">⚠</span>}
      <p>{message}</p>
    </div>
  );
};

export default Notification;
