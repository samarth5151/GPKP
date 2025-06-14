import React from 'react';
import './StudentsCoOpStore.css';
import storeImage from '../../../Assets/studentscoopstoreImages/information-technology.jpg'; // Replace with your actual image path

export default function StudentsCoOpStore() {
  return (
    <div className="students-store-container">
      <h1 className="page-title">Students Co-operative Store</h1>
      <div className="store-image-wrapper">
        <img src={storeImage} alt="Students Co-op Store" />
      </div>
    </div>
  );
}
