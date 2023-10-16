import React from 'react';

const Button = ({ children }) => {
  return (
    <button className="btn-primary mt-8">
      {children}
    </button>
  );
};

export default Button;