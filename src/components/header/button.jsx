import React from 'react';
import "./button.css"
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='/Form'>
      <button className='btn'>Sign Up</button>
      </Link>
    
  );
}
 