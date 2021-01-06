import React from 'react';

export default function Card({ value, color }) {
  const className = 'card';

  return (
    <div className={className}>
      {value} - {color}
    </div>
  );
}
