'use client'

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image"; // Import thẻ Image của Next.js
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "./simpleslider.module.css";

export default function SimpleSlider({ images = [] }) {
  const [navIndex, setNavIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || !images || images.length === 0) {
    return <div className={styles.loadingPlaceholder}>Đang tải ảnh...</div>;
  }

  const settings = {
    dots: false,
    infinite: images.length > 1,
    speed: 500,
    slidesToShow: images.length >= 3 ? 3 : images.length,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    afterChange: (index) => setNavIndex(index),
  };

  return (
    <div className={styles.verticalStack}>
      {/* 1. KHUNG ẢNH CHÍNH Ở TRÊN */}
      <div className={styles.mainImageContainer}>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <Image 
            src={images[navIndex]} 
            alt="Main Product"
            fill // Tự động lấp đầy khung cha
            style={{ objectFit: 'contain' }} // Đảm bảo không bị méo ảnh cây son
            priority // Ưu tiên load ảnh này trước
          />
        </div>
      </div>

      {/* 2. SLIDER ẢNH NHỎ Ở DƯỚI */}
      <div className={styles.bottomSlider}>
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className={styles.thumbItem} onClick={() => setNavIndex(index)}>
              <div className={`${styles.thumbBox} ${navIndex === index ? styles.activeThumb : ''}`}>
                <Image 
                  src={img} 
                  alt={`Thumb ${index}`} 
                  width={80} // Khớp với kích thước thumbBox trong CSS
                  height={80} 
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}