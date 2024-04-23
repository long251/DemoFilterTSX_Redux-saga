import React, { useState } from 'react';
import './DemoCSS.css'; // Import CSS file

// Danh sách các danh mục sản phẩm
const categories = [
  { id: 1, name: 'Ăn uống', icon: '🍔' },
  { id: 2, name: 'Dép', icon: '🥿' },
  { id: 3, name: 'Đồ chơi', icon: '🎲' },
  { id: 4, name: 'Điện tử', icon: '📱' },
  { id: 5, name: 'Sách', icon: '📚' },
  { id: 6, name: 'Quần áo', icon: '👕' },
  { id: 7, name: 'Thể thao', icon: '⚽' },
  { id: 8, name: 'Mỹ phẩm', icon: '💄' },
  { id: 9, name: 'Đồ gia dụng', icon: '🛋️' },
  { id: 10, name: 'Xe cộ', icon: '🚗' },
];

function InfiniteLoop() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const listLength = categories.length;
  const sublistLength = 5;

  // Tạo danh sách con từ danh sách sản phẩm
  const generateList = () => {
    const start = (currentIndex + listLength - 2) % listLength;
    const sublist = [];
    for (let i = 0; i < sublistLength; i++) {
      sublist.push(categories[(start + i) % listLength]);
    }
    return sublist;
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % listLength);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex + listLength - 1) % listLength);
  };

  return (
    <div>
      <div className="container">
        <button className="prevButton" onClick={handlePrev}>Prev</button>
        {generateList().map((category, index) => (
          <div key={category.id} className="item" style={{ zIndex: index === 0 || index === sublistLength - 1 ? '1' : '0' }}>
            <span className="icon">{category.icon}</span>
            <span className="name">{category.name}</span>
          </div>
        ))}
        <button className="nextButton" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default InfiniteLoop;
