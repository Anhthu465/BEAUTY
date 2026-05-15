"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      image: "//theme.hstatic.net/200000868185/1001288884/14/showsliderimg1.png?v=1429",
      imageMobile: "//theme.hstatic.net/200000868185/1001288884/14/wsliderimgmobile1.png?v=1429",
      link: "https://lamthaocosmetics.vn/pages/lam-thao-cosmetics-sale-sieu-hoi-moi-thang",
      alt: "slider"
    },
    {
      id: 2,
      image: "//theme.hstatic.net/200000868185/1001288884/14/showsliderimg4.png?v=1429",
      imageMobile: "//theme.hstatic.net/200000868185/1001288884/14/wsliderimgmobile4.png?v=1429",
      link: "https://lamthaocosmetics.vn/pages/lam-thao-cosmetics-sale-sieu-hoi-moi-thang",
      alt: "slider"
    },
    {
      id: 3,
      image: "//theme.hstatic.net/200000868185/1001288884/14/showsliderimg5.png?v=1429",
      imageMobile: "//theme.hstatic.net/200000868185/1001288884/14/wsliderimgmobile5.png?v=1429",
      link: "https://lamthaocosmetics.vn/blogs/news/hang-thanh-vien-uu-dai-giam-dam-sau-tai-lam-thao-cosmetics",
      alt: "slider"
    }
  ];

  // Product data
  const products = [
    {
      id: "colorkey-soft-matte",
      name: "Son Kem Colorkey Soft Matte Water Tint 1.8gs",
      brand: "KISSMECUỐI HÀNG COSMETICS",
      price: 270000,
      originalPrice: 300000,
      discount: 20,
      stock: 14,
      sold: 0,
      rating: 4.5,
      reviewCount: 128,
      image: "/son-kem-colorkey-soft-matte-water-tint-18g.png",
      images: [
        "/son-kem-colorkey-soft-matte-water-tint-18g.png",
        "/z5878733599913-be585d20743c67b6f58037b298e6eb49.webp"
      ],
      description: "Son lì mềm mại, lên màu chuẩn, bền màu suốt 8h với kết cấu mượt nhẹ, không gây khô môi. Công thức water tint thấm nhanh, tạo lớp màu trong trẻo nhưng cực kỳ bám màu.",
      detail: "• Chất son: Soft Matte dạng nước, lên màu mượt mà\n• Độ bền màu: 8h trôi màu, không lem\n• Hương thơm: nhẹ nhàng, dễ chịu\n• Thương hiệu: Colorkey (Trung Quốc)\n• Dung tích: 1.8g\n• Công dụng: Dưỡng môi, cấp ẩm, lên màu chuẩn\n• Kết cấu: Mỏng nhẹ, không dính, không khô môi",
      ingredients: "Aqua, Dimethicone, Glycerin, Propylene Glycol, CI 15850, CI 77492, Fragrance, Phenoxyethanol, Caprylyl Glycol",
      howToUse: "1. Lắc đều trước khi dùng\n2. Thoa một lớp mỏng lên môi\n3. Chờ 10-15 giây để màu khô tự nhiên\n4. Có thể thoa thêm lớp thứ 2 để tăng độ đậm",
      colors: [
        { code: "B606", name: "Camel Brown", colorHex: "#C4A484", desc: "Cảm giác nhẹ nhàng, thanh lịch", stock: 15 },
        { code: "B607", name: "Chili Red", colorHex: "#E34A2F", desc: "Đỏ ớt cay nồng, nổi bật", stock: 12 },
        { code: "B608", name: "Rose Pink", colorHex: "#FF69B4", desc: "Hồng cánh sen ngọt ngào", stock: 8 },
        { code: "B609", name: "Orange Coral", colorHex: "#FF7F50", desc: "Cam san hô tươi trẻ, năng động", stock: 20 },
        { code: "B610", name: "Mauve Dust", colorHex: "#C08081", desc: "Mauve trầm ấm, sang trọng", stock: 5 },
        { code: "B611", name: "Berry Wine", colorHex: "#722F37", desc: "Đỏ berry quyến rũ, cuốn hút", stock: 10 }
      ]
    },
    {
      id: "romand-juicy",
      name: "JL 22 Pomelo Skin (Bare Nude) – Son Romand Juicy Lasting Tint",
      brand: "Romand",
      price: 370000,
      originalPrice: 400000,
      discount: 20,
      stock: 24,
      rating: 4.7,
      reviewCount: 95,
      image: "/Son-Romand-Juicy-Lasting-Tint-19-5-510x510.jpg",
      images: ["/Son-Romand-Juicy-Lasting-Tint-22-1-510x510.jpg"],
      description: "Son tint dạng sệt, cho đôi môi mọng nước, màu bánh trong trẻo, hương thơm ngọt ngào, bền màu 6h",
      detail: "• Chất son: Juicy lasting tint dạng sệt\n• Độ bền màu: 6h\n• Hương thơm: trái cây ngọt ngào\n• Thương hiệu: Romand (Hàn Quốc)\n• Dung tích: 4.5g",
      ingredients: "Water, Glycerin, Dimethicone, Fragrance",
      howToUse: "1. Lắc đều trước khi dùng\n2. Thoa lên môi\n3. Đợi khô tự nhiên",
      colors: [
        { code: "22", name: "Pomelo Skin", colorHex: "#FFD1B3", desc: "Màu bưởi hồng tự nhiên", stock: 24 }
      ]
    },
    {
      id: "into-you-airy",
      name: "Son Kem Lì Into You Customized Airy Lip Mud",
      brand: "Into You",
      price: 100000,
      originalPrice: 150000,
      discount: 30,
      stock: 6,
      rating: 4.6,
      reviewCount: 67,
      image: "/biaweb-ne-son-kem-bun-intoyou-01.webp",
      images: ["/biaweb-ne-son-kem-bun-intoyou-01.webp"],
      description: "Chất son kem bông mềm mại, che phủ tốt, cho đôi môi lì sang trọng, không gây vón cục",
      detail: "• Chất son: Airy Lip Mud dạng kem bông\n• Độ bền màu: 8h\n• Kết cấu: Mềm mại, không khô môi\n• Thương hiệu: Into You (Trung Quốc)",
      ingredients: "Dimethicone, Mica, Iron Oxides, Fragrance",
      howToUse: "1. Thoa trực tiếp lên môi\n2. Tán đều bằng đầu ngón tay hoặc cọ",
      colors: [
        { code: "EM01", name: "Red Bean", colorHex: "#C0604A", desc: "Đỏ đậm sang trọng", stock: 6 }
      ]
    },
    {
      id: "moi-dual-cream",
      name: "(DEAL SỐC) Má Hồng Kem 2 Màu M.O.I Dual Cream Blusher (Date: T4/2027)",
      brand: "M.O.I",
      price: 199000,
      originalPrice: 169000,
      discount: 30,
      stock: 6,
      rating: 4.8,
      reviewCount: 42,
      image: "/Ma-hong-kem-M.O.I-Dual-Cream-Blusher-No.2-cam-dao.jpg",
      images: ["/Ma-hong-kem-M.O.I-Dual-Cream-Blusher-No.2-cam-dao.jpg"],
      description: "Má hồng kem 2 tông màu cam đào, blend cực mượt, tạo lớp nền hồng tự nhiên, bền lên đến 8h",
      detail: "• Dạng: Kem\n• Màu: Cam đào\n• Độ bền: 8h\n• Thương hiệu: M.O.I (Việt Nam)",
      ingredients: "Jojoba Oil, Shea Butter, Vitamin E, Pigments",
      howToUse: "1. Lấy một lượng nhỏ\n2. Tán đều lên má\n3. Blend bằng tay hoặc mút",
      colors: [
        { code: "02", name: "Cam Đào", colorHex: "#FFA07A", desc: "Màu cam đào tự nhiên", stock: 6 }
      ]
    },
    {
      id: "judydoll-blush",
      name: "Bảng Phấn Má Hồng Judydoll Bắt Sáng 4 Ô Tông Lì Đa Năng Blush&Highlight Palette 9g",
      brand: "Judydoll",
      price: 150000,
      originalPrice: 100000,
      discount: 30,
      stock: 6,
      rating: 4.5,
      reviewCount: 38,
      image: "/judydoll_copy_c96c4d0143a543339524c0b5b010ca39_1024x1024.jpg",
      images: ["/judydoll_copy_c96c4d0143a543339524c0b5b010ca39_1024x1024.jpg"],
      description: "Bảng phấn 4 ô đa năng vừa má hồng vừa highlight, hạt mịn, bắt sáng tự nhiên, cho gương mặt rạng rỡ",
      detail: "• Dạng: Phấn\n• 4 ô: 2 màu má hồng, 2 màu highlight\n• Trọng lượng: 9g\n• Thương hiệu: Judydoll (Trung Quốc)",
      ingredients: "Talc, Mica, Silica, Dimethicone",
      howToUse: "1. Dùng cọ lấy phấn\n2. Phết nhẹ lên má hoặc vùng cần highlight",
      colors: []
    },
    {
      id: "xixi-blush",
      name: "Phấn Má Hồng XIXI Sunset 4 ô Nhũ Sáng Highlight #04",
      brand: "XIXI",
      price: 100000,
      originalPrice: 60000,
      discount: 40,
      stock: 6,
      rating: 4.4,
      reviewCount: 29,
      image: "/phan-ma-hong-xixi-sunset-4-o-nhu-sang-highlight-04.webp",
      images: ["/phan-ma-hong-xixi-sunset-4-o-nhu-sang-highlight-04.webp"],
      description: "Phấn má hồng 4 ô với hiệu ứng nhũ ánh kim, tạo khối bắt sáng, giúp gương mặt thêm sắc nét và tươi tắn",
      detail: "• Dạng: Phấn nhũ\n• 4 ô màu: Hồng, cam, vàng, highlight\n• Thương hiệu: XIXI (Trung Quốc)",
      ingredients: "Mica, Titanium Dioxide, Iron Oxides",
      howToUse: "1. Lấy phấn bằng cọ\n2. Tán đều lên gò má",
      colors: []
    },
    {
      id: "loreal-serum",
      name: "Serum L'Oreal Sáng Da, Mờ Thâm Mụn & Nám 30ml (Mới)",
      brand: "L'Oreal",
      price: 172800,
      originalPrice: 288000,
      discount: 40,
      stock: 22,
      rating: 4.9,
      reviewCount: 156,
      image: "/serum-l-oreal-duong-sang-va-mo-tham-nam-1_1.jpg",
      images: ["/serum-l-oreal-duong-sang-va-mo-tham-nam-1_1.jpg"],
      description: "Serum dưỡng sáng da, mờ thâm, giảm nám hiệu quả với thành phần Vitamin C và Axit Hyaluronic",
      detail: "• Dung tích: 30ml\n• Thành phần chính: Vitamin C, Hyaluronic Acid\n• Công dụng: Sáng da, mờ thâm, giảm nám\n• Thương hiệu: L'Oreal (Pháp)",
      ingredients: "Vitamin C, Hyaluronic Acid, Glycerin, Water",
      howToUse: "1. Làm sạch da\n2. Lấy 2-3 giọt serum\n3. Thoa đều lên da mặt\n4. Massage nhẹ nhàng",
      colors: []
    },
    {
      id: "colorkey-serum",
      name: "COLORKEY LUMINOUS Serum",
      brand: "Colorkey",
      price: 136000,
      originalPrice: 170000,
      discount: 20,
      stock: 10,
      rating: 4.6,
      reviewCount: 73,
      image: "/3_e52201b0-bd48-4f1c-ba54-0c0755f047e5.webp",
      images: ["/3_e52201b0-bd48-4f1c-ba54-0c0755f047e5.webp"],
      description: "Serum dưỡng da với kết cấu nhẹ, thẩm thấu nhanh, cấp ẩm và làm sáng da tức thì",
      detail: "• Dung tích: 30ml\n• Kết cấu: Nhẹ, thẩm thấu nhanh\n• Công dụng: Cấp ẩm, làm sáng da\n• Thương hiệu: Colorkey (Trung Quốc)",
      ingredients: "Niacinamide, Hyaluronic Acid, Glycerin",
      howToUse: "1. Vệ sinh da sạch\n2. Thoa serum lên da\n3. Massage nhẹ để thẩm thấu",
      colors: []
    },
    {
      id: "theordinary-niacinamide",
      name: "Serum The Ordinary Niacinamide 10% + Zinc 1% 30ml (Hàng Chính Hãng)",
      brand: "The Ordinary",
      price: 245000,
      originalPrice: 350000,
      discount: 30,
      stock: 18,
      rating: 4.8,
      reviewCount: 203,
      image: "/ee85b893d4e12e70a5991e62f4ae46b9-030a9e22-02e2-4b9e-b747-22ae2c9bcf18.webp",
      images: ["/the-ordinary-niacinamide-serum.jpg", "/the-ordinary-niacinamide-2.jpg"],
      description: "Serum chứa 10% Niacinamide cao cấp giúp giảm thâm mụn, thu nhỏ lỗ chân lông, kiểm soát dầu nhờn và cải thiện kết cấu da hiệu quả",
      detail: "• Dung tích: 30ml\n• Thành phần chính: Niacinamide 10%, Zinc PCA 1%\n• Công dụng: Giảm thâm mụn, kiểm soát dầu, se khít lỗ chân lông\n• Thương hiệu: The Ordinary (Canada)\n• Kết cấu: Dạng nước, thẩm thấu nhanh\n• Phù hợp: Da dầu, da mụn, da hỗn hợp",
      ingredients: "Aqua (Water), Niacinamide, Pentylene Glycol, Zinc PCA, Dimethyl Isosorbide, Tamarindus Indica Seed Gum, Xanthan Gum, Isoceteth-20, Ethoxydiglycol, Phenoxyethanol, Chlorphenesin",
      howToUse: "1. Rửa mặt sạch và lau khô\n2. Lấy 2-3 giọt serum\n3. Thoa đều lên toàn mặt, tránh vùng mắt\n4. Massage nhẹ nhàng cho serum thấm\n5. Sử dụng sáng và tối trước kem dưỡng ẩm",
      colors: []
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className={styles.container}>
      <Header/>
      
      {/* Animated Cosmetic Icons Background */}
      <div className={styles.cosmeticBg}>
        <div className={styles.floatingIcon}>💄</div>
        <div className={styles.floatingIcon}>⭐</div>
        <div className={styles.floatingIcon}>💅</div>
        <div className={styles.floatingIcon}>🌸</div>
        <div className={styles.floatingIcon}>✨</div>
        <div className={styles.floatingIcon}>💎</div>
        <div className={styles.floatingIcon}>🎀</div>
        <div className={styles.floatingIcon}>💖</div>
        <div className={styles.floatingIcon}>👄</div>
        <div className={styles.floatingIcon}>💕</div>
      </div>
      
      {/* Carousel Section */}
      <div className={styles.inslideron}>
        <div className={styles.vslieronmel}>
          <button className={styles.slickPrev} onClick={prevSlide}>
            <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.968 3L9.96802 15L21.968 27" stroke="#D0D0D0" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </button>
          
          <div className={styles.slickList}>
            <div className={styles.slickTrack} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {slides.map((slide, index) => (
                <div key={slide.id} className={styles.slickSlide}>
                  <div className={styles.viewoprelative}>
                    <a href={slide.link} target="_blank" rel="noopener noreferrer">
                      <picture>
                        <source media="(max-width:767px)" srcSet={slide.imageMobile} />
                        <img 
                          loading={index === 0 ? "eager" : "lazy"}
                          fetchPriority={index === 0 ? "high" : "auto"}
                          width="1920" 
                          height="500" 
                          src={slide.image} 
                          alt={slide.alt}
                        />
                      </picture>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button className={styles.slickNext} onClick={nextSlide}>
            <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.71216 3L21.7122 15L9.71216 27" stroke="#D0D0D0" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </button>
        </div>
        <div className={styles.carouselDots}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.carouselDot} ${currentSlide === index ? styles.active : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      <div className={styles.item2}>
        <div className={styles.mainContent}>
          <div className={styles.product}>
            <Link href={{
              pathname: "/chitietsanpham",
              query: { id: products[0].id }
            }}>
              <div className={styles.mainProduct}>
                <div className={styles.productImage}>
                  <Image src={products[0].image} alt="Product 1" layout="responsive" width={110} height={110} />
                </div>
                <div className={styles.productName}>
                  <h5>{products[0].name}</h5>
                </div>
                <div className={styles.productDescription}>
                  <p>{products[0].description}</p>
                </div>
                <div className={styles.productPrice}>
                  <strong className={styles.price}>{products[0].price.toLocaleString("vi-VN")}₫</strong>
                  <span className={styles.discount}>
                    <label className={styles.oldPrice}>{products[0].originalPrice.toLocaleString("vi-VN")}₫</label>
                    <small className={styles.percent}>-{products[0].discount}%</small>
                  </span>
                </div>
                <div className={styles.productRemain}>
                  <span>Còn {products[0].stock}/30 suất</span>
                </div>
              </div>
            </Link>
            <div className={styles.productActions}>
              <div className={styles.buyButton}>
                <Link href="/">Mua ngay</Link>
              </div>
              <div className={styles.cartButton}>
                <Link href="/">Thêm vào giỏ</Link>
              </div>
            </div>
          </div>

          <div className={styles.product}>
            <Link href={{
              pathname: "/chitietsanpham",
              query: { id: products[1].id }
            }}>
              <div className={styles.mainProduct}>
                <div className={styles.productImage}>
                  <Image src={products[1].image} alt="Product 2" layout="responsive" width={110} height={110} />
                </div>
                <div className={styles.productName}>
                  <h5>{products[1].name}</h5>
                </div>
                <div className={styles.productDescription}>
                  <p>{products[1].description}</p>
                </div>
                <div className={styles.productPrice}>
                  <strong className={styles.price}>{products[1].price.toLocaleString("vi-VN")}₫</strong>
                  <span className={styles.discount}>
                    <label className={styles.oldPrice}>{products[1].originalPrice.toLocaleString("vi-VN")}₫</label>
                    <small className={styles.percent}>-{products[1].discount}%</small>
                  </span>
                </div>
                <div className={styles.productRemain}>
                  <span>Còn {products[1].stock}/30 suất</span>
                </div>
              </div>
            </Link>
            <div className={styles.productActions}>
              <div className={styles.buyButton}>
                <Link href="/">Mua ngay</Link>
              </div>
              <div className={styles.cartButton}>
                <Link href="/">Thêm vào giỏ</Link>
              </div>
            </div>
          </div>

          {/* Continue with remaining products - map through products array */}
          {products.slice(2).map((product, idx) => (
            <div key={product.id} className={styles.product}>
              <Link href={{
                pathname: "/chitietsanpham",
                query: { id: product.id }
              }}>
                <div className={styles.mainProduct}>
                  <div className={styles.productImage}>
                    <Image src={product.image} alt={product.name} layout="responsive" width={110} height={110} />
                  </div>
                  <div className={styles.productName}>
                    <h5>{product.name}</h5>
                  </div>
                  <div className={styles.productDescription}>
                    <p>{product.description}</p>
                  </div>
                  <div className={styles.productPrice}>
                    <strong className={styles.price}>{product.price.toLocaleString("vi-VN")}₫</strong>
                    <span className={styles.discount}>
                      <label className={styles.oldPrice}>{product.originalPrice.toLocaleString("vi-VN")}₫</label>
                      <small className={styles.percent}>-{product.discount}%</small>
                    </span>
                  </div>
                  <div className={styles.productRemain}>
                    <span>Còn {product.stock}/30 suất</span>
                  </div>
                </div>
              </Link>
              <div className={styles.productActions}>
                <div className={styles.buyButton}>
                  <Link href="/">Mua ngay</Link>
                </div>
                <div className={styles.cartButton}>
                  <Link href="/">Thêm vào giỏ</Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Story Section */}
        <div className={styles.brandStory}>
          <div className={styles.storyContent}>
            <h3 className={styles.storyTitle}>✨ BEAUTY Cosmetics - Nâng tầm vẻ đẹp Việt ✨</h3>
            <p className={styles.storyText}>
              Với sứ mệnh mang đến những sản phẩm làm đẹp chất lượng cao, nguồn gốc rõ ràng cùng giá cả hợp lý, 
              BEAUTY Cosmetics tự hào là địa chỉ tin cậy của hàng ngàn khách hàng yêu làm đẹp. 
              Từ son môi, kem nền, phấn má hồng đến các dòng serum dưỡng da cao cấp, tất cả đều được chúng tôi 
              chọn lọc kỹ lưỡng từ những thương hiệu uy tín trong và ngoài nước. Hãy để BEAUTY đồng hành 
              cùng bạn trên hành trình tỏa sáng mỗi ngày! 💖
            </p>
            <div className={styles.storyStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>10,000+</span>
                <span className={styles.statLabel}>Khách hàng hài lòng</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>500+</span>
                <span className={styles.statLabel}>Sản phẩm chất lượng</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>24/7</span>
                <span className={styles.statLabel}>Hỗ trợ tận tâm</span>
              </div>
            </div>
          </div>
        </div>       
      </div>
      <Footer/>
    </div>
  );
}