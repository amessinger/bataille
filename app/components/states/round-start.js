import React, { useEffect } from 'react';
import Loading from '../loading.js';

export default function RoundStart({ send }) {
  useEffect(() => {
    send('always');
  }, []);

  return <Loading />;
}