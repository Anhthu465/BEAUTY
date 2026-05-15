"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import SimpleSlider from "../components/slider/slider.js"; 
import Link from "next/link";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import styles from "./chitietsp.module.css";

// Product database (same as homepage)
const productsDatabase = {
  "colorkey-soft-matte": {
    id: "colorkey-soft-matte",
    name: "Son Kem Colorkey Soft Matte Water Tint 1.8gs",
    brand: "KISSMECUỐI HÀNG COSMETICS",
    price: 270000,
    originalPrice: 300000,
    discount: 20,
    stock: 30,
    sold: 0,
    rating: 4.5,
    reviewCount: 128,
    image: "/son-kem-colorkey-soft-matte-water-tint-18g.png",
    images: [
      "/son-kem-colorkey-soft-matte-water-tint-18g.png",
      "/z5878733599913-be585d20743c67b6f58037b298e6eb49.webp",
      "/son colorkey.png",
      "/son colorkey2.png"
    ],
    description: "Son lì mềm mại, lên màu chuẩn, bền màu suốt 8h với kết cấu mượt nhẹ, không gây khô môi. Công thức water tint thấm nhanh, tạo lớp màu trong trẻo nhưng cực kỳ bám màu.",
    detail: "• Chất son: Soft Matte dạng nước, lên màu mượt mà\n• Độ bền màu: 8h trôi màu, không lem\n• Hương thơm: nhẹ nhàng, dễ chịu\n• Thương hiệu: Colorkey (Trung Quốc)\n• Dung tích: 1.8g\n• Công dụng: Dưỡng môi, cấp ẩm, lên màu chuẩn\n• Kết cấu: Mỏng nhẹ, không dính, không khô môi",
    ingredients: "Aqua, Dimethicone, Glycerin, Propylene Glycol, CI 15850, CI 77492, Fragrance, Phenoxyethanol, Caprylyl Glycol",
    howToUse: "1. Lắc đều trước khi dùng\n2. Thoa một lớp mỏng lên môi\n3. Chờ 10-15 giây để màu khô tự nhiên\n4. Có thể thoa thêm lớp thứ 2 để tăng độ đậm",
    colors: [
      { code: "P307", name: "Cánh hồng khô", colorHex: "#c04c54", desc: "Cảm giác nhẹ nhàng, thanh lịch", stock: 15 },
      { code: "R301", name: "Hoa anh đào", colorHex: "#b44c5a", desc: "Nhẹ nhàng, thuần khiết và tươi mới", stock: 10 },
      { code: "0308", name: "Đỏ cam đất", colorHex: "#942b35", desc: "Cam trẻ trung, đỏ quyền lực và nâu đất trầm ấm", stock: 12 },
      { code: "R300", name: "Đỏ hồng đất", colorHex: "#8d162c", desc: "Đỏ ngọt ngào", stock: 8 },
      { code: "0311", name: "Hoa sơn trà đỏ", colorHex: "#a23d2d", desc: " Màu đỏ rực rỡ, tươi sáng và đầy cuốn hút", stock: 20 },
      { code: "B305", name: "Đỏ rượu nho", colorHex: "#852d2c", desc: "Màu đỏ thuần với một chút sắc tím hoặc nâu", stock: 5 }
      
    ]
  },
  "romand-juicy": {
    id: "romand-juicy",
    name: "Son Romand Juicy Lasting Tint",
    brand: "Romand",
    price: 370000,
    originalPrice: 400000,
    discount: 20,
    stock: 24,
    rating: 4.7,
    reviewCount: 95,
    image: "/Son-Romand-Juicy-Lasting-Tint-19-5-510x510.jpg",
    images: [
      "/Son-Romand-Juicy-Lasting-Tint-22-1-510x510.jpg",
      "/Son-Romand-Juicy-Lasting-Tint-19-3.jpg",
      "/Son-Romand-Juicy-Lasting-Tint-19-5-510x510.jpg",
      "/Son-Romand-Juicy-Lasting-Tint-19-2-510x510.jpg",
      "/son-romand-juicy-lasting-tint2romad.jpg",
      "/vn-11134207-820l4-mgm0wbno3j7sbb_256a8dac093b4f9388b02d77e4d4e4dc.jpg"
    ],
    description: "Son tint dạng sệt, cho đôi môi mọng nước, màu bánh trong trẻo, hương thơm ngọt ngào, bền màu 6h",
    detail: "• Chất son: Juicy lasting tint dạng sệt\n• Độ bền màu: 6h\n• Hương thơm: trái cây ngọt ngào\n• Thương hiệu: Romand (Hàn Quốc)\n• Dung tích: 4.5g",
    ingredients: "Water, Glycerin, Dimethicone, Fragrance",
    howToUse: "1. Lắc đều trước khi dùng\n2. Thoa lên môi\n3. Đợi khô tự nhiên",
    colors: [
      { code: "01", name: "Juicy Oh", colorHex: "#c5623b", desc: "Màu cam vàng rực rỡ", stock: 24 },
      { code: "02", name: "Ruby Red", colorHex: "#ba2c2a", desc: "Màu đỏ cam tươi tắn", stock: 24 },
      { code: "03", name: "Summer Scent", colorHex: "#d1253b", desc: "Màu đỏ hồng dưa hấu", stock: 10 },
      { code: "04", name: "Dragon Pink", colorHex: "#c61959", desc: " Màu hồng cánh sen đậm", stock: 10 },
      { code: "05", name: "Peach Me", colorHex: "#e65857", desc: "Màu cam đào sữa", stock: 10 },
      { code: "06", name: "Fig Fig", colorHex: "#b9484a", desc: "Màu hồng tím đất (Best-seller cho da tông lạnh)", stock: 10 },

    ]
  },
  "into-you-airy": {
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
    images: [
      "/biaweb-ne-son-kem-bun-intoyou-01.webp",
      "/screenshot-2024-10-16-093559.webp",
      "/ava-san-pham-tren-website-9-614e688f-0f6e-4e6e-a49f-8090010b7c03.webp",
      "/bang-mau-93d3533d-fdeb-4e8b-9bf6-d6f5be73f15d.webp"
    ],
    description: "Chất son kem bông mềm mại, che phủ tốt, cho đôi môi lì sang trọng, không gây vón cục",
    detail: "• Chất son: Airy Lip Mud dạng kem bông\n• Độ bền màu: 8h\n• Kết cấu: Mềm mại, không khô môi\n• Thương hiệu: Into You (Trung Quốc)",
    ingredients: "Dimethicone, Mica, Iron Oxides, Fragrance",
    howToUse: "1. Thoa trực tiếp lên môi\n2. Tán đều bằng đầu ngón tay hoặc cọ",
    colors: [
      { code: " C1 ", name: "Pink Peach", colorHex: "#c65a67", desc: "Hồng cam hoặc hồng đào", stock: 6 },
      { code: "N2", name: "Cherry Red", colorHex: "#c9435c", desc: " Đỏ cherry hoặc đào đỏ", stock: 6 },
      { code: "N4", name: "Sunset Peach", colorHex: "#d76974", desc: "Cam đào hoàng hôn", stock: 6 },
      { code: "W3 ", name: "Terracotta Red", colorHex: "#902f38", desc: "Đỏ hồng san hô nhẹ hoặc đỏ hồng đất", stock: 6 },  
      { code: " W8 ", name: "Spring Pink", colorHex: "#b95c64", desc: "Hồng MLBB (My Lips But Better) hoặc hồng nude", stock: 6 },  
    ]
  },
  "moi-dual-cream": {
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
    images: [
      "/Ma-hong-kem-M.O.I-Dual-Cream-Blusher-No.2-cam-dao.jpg",
      "/1c2dc694-7d78-42f4-baab-c15dc04b0ae2.webp",
      "/1001_1769678912_677298802486901845503470362477.png",
      "/pro_dual_cream_blusher_2_56c2397f0ceb450bbc5e06c189d1af3d_master.jpg",
      "/vn-11134207-7r98o-lxknbxd0180pd7.jpg",
    
    ],
    description: "Má hồng kem 2 tông màu cam đào, blend cực mượt, tạo lớp nền hồng tự nhiên, bền lên đến 8h",
    detail: "• Dạng: Kem\n• Màu: Cam đào\n• Độ bền: 8h\n• Thương hiệu: M.O.I (Việt Nam)",
    ingredients: "Jojoba Oil, Shea Butter, Vitamin E, Pigments",
    howToUse: "1. Lấy một lượng nhỏ\n2. Tán đều lên má\n3. Blend bằng tay hoặc mút",
    colors: [
      { code: "02", name: "Cam Đào", colorHex: "#FFA07A", desc: "Màu cam đào tự nhiên", stock: 6 },
      { code: "04", name: "Rose Pink", colorHex: "#FF69B4", desc: "Hồng phấn ngọt ngào", stock: 8 }
    ]
  },
  "judydoll-blush": {
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
    images: [
      "/judydoll_copy_c96c4d0143a543339524c0b5b010ca39_1024x1024.jpg",
      "/cn-11134207-7ras8-md3b5pc28rnkbb.jpg",
      "/download__5__8c39dbafeae341dfb306161b2a5e93ad_1024x1024.jpeg",
      "/download__1__27462ec589d74dba81b88de90b58f85e_1024x1024.jpeg",
      "/screenshot_2025-04-17_115611_copy.jpg",
      "/vn-11134207-7r98o-lwu4om2m7qvvb4.webp",
      "/size-anh-noi-dung-web-2025-03-30t203432-203.webp",
    ],
    description: "Bảng phấn 4 ô đa năng vừa má hồng vừa highlight, hạt mịn, bắt sáng tự nhiên, cho gương mặt rạng rỡ",
    detail: "• Dạng: Phấn\n• 4 ô: 2 màu má hồng, 2 màu highlight\n• Trọng lượng: 9g\n• Thương hiệu: Judydoll (Trung Quốc)",
    ingredients: "Talc, Mica, Silica, Dimethicone",
    howToUse: "1. Dùng cọ lấy phấn\n2. Phết nhẹ lên má hoặc vùng cần highlight",
    colors: []
  },
  "xixi-blush": {
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
  "loreal-serum": {
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
  "colorkey-serum": {
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
  "theordinary-niacinamide": {
    id: "theordinary-niacinamide",
    name: "Serum The Ordinary Niacinamide 10% + Zinc 1% 30ml (Hàng Chính Hãng)",
    brand: "The Ordinary",
    price: 245000,
    originalPrice: 350000,
    discount: 30,
    stock: 18,
    rating: 4.8,
    reviewCount: 203,
    image: "/the-ordinary-niacinamide-serum.jpg",
    images: [
      "/the-ordinary-niacinamide-serum.jpg", 
      "/the-ordinary-niacinamide-2.jpg",
      "/the-ordinary-serum-3.jpg"
    ],
    description: "Serum chứa 10% Niacinamide cao cấp giúp giảm thâm mụn, thu nhỏ lỗ chân lông, kiểm soát dầu nhờn và cải thiện kết cấu da hiệu quả",
    detail: "• Dung tích: 30ml\n• Thành phần chính: Niacinamide 10%, Zinc PCA 1%\n• Công dụng: Giảm thâm mụn, kiểm soát dầu, se khít lỗ chân lông\n• Thương hiệu: The Ordinary (Canada)\n• Kết cấu: Dạng nước, thẩm thấu nhanh\n• Phù hợp: Da dầu, da mụn, da hỗn hợp\n• Không chứa: Cồn, dầu, silicon, hương liệu",
    ingredients: "Aqua (Water), Niacinamide, Pentylene Glycol, Zinc PCA, Dimethyl Isosorbide, Tamarindus Indica Seed Gum, Xanthan Gum, Isoceteth-20, Ethoxydiglycol, Phenoxyethanol, Chlorphenesin",
    howToUse: "1. Rửa mặt sạch và lau khô\n2. Lấy 2-3 giọt serum\n3. Thoa đều lên toàn mặt, tránh vùng mắt\n4. Massage nhẹ nhàng cho serum thấm\n5. Sử dụng sáng và tối trước kem dưỡng ẩm",
    colors: []
  }
};

export default function ChiTietSanPham() {
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");
  
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("detail");
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(null);
  const [isColorMenuOpen, setIsColorMenuOpen] = useState(false);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load product based on ID from URL
    if (productId && productsDatabase[productId]) {
      setProduct(productsDatabase[productId]);
      // Set default selected color
      if (productsDatabase[productId].colors && productsDatabase[productId].colors.length > 0) {
        setSelectedColor(productsDatabase[productId].colors[0]);
      }
    }
    setLoading(false);
  }, [productId]);

  const formatPrice = (price) => price?.toLocaleString("vi-VN") + "₫";
  const currentStock = selectedColor ? selectedColor.stock : (product?.stock || 0);

  const renderStars = () => {
    if (!product) return "";
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 !== 0;
    let stars = [];
    for (let i = 0; i < fullStars; i++) stars.push("★");
    if (hasHalfStar) stars.push("½");
    while (stars.length < 5) stars.push("☆");
    return stars.join("");
  };

  const handleBuyNow = () => {
    if (!selectedColor && product?.colors?.length > 0) {
      alert("Vui lòng chọn mã màu son!");
      return;
    }
    alert(`✅ Đã đặt mua thành công!\n\nSản phẩm: ${product?.name}\n${selectedColor ? `Màu: ${selectedColor.name} (${selectedColor.code})\n` : ''}Số lượng: ${quantity}\nTổng tiền: ${formatPrice(product?.price * quantity)}\n\nChúng tôi sẽ liên hệ xác nhận đơn hàng trong ít phút!`);
  };

  const handleAddToCart = () => {
    if (!selectedColor && product?.colors?.length > 0) {
      alert("Vui lòng chọn mã màu son!");
      return;
    }
    alert(`🛒 Đã thêm vào giỏ hàng!\n\n${product?.name}\n${selectedColor ? `Màu: ${selectedColor.name} (${selectedColor.code})\n` : ''}Số lượng: ${quantity}\nThành tiền: ${formatPrice(product?.price * quantity)}`);
  };

  const handleSelectColor = (color) => {
    setSelectedColor(color);
    setIsColorMenuOpen(false);
    setSelectedImage(0);
  };

  if (loading) {
    return (
      <div className={styles.container}>
        <Header />
        <div style={{ textAlign: "center", padding: "100px" }}>Đang tải sản phẩm...</div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className={styles.container}>
        <Header />
        <div style={{ textAlign: "center", padding: "100px" }}>
          <h2>Không tìm thấy sản phẩm</h2>
          <Link href="/">Quay lại trang chủ</Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Related products (exclude current product)
  const relatedProducts = Object.values(productsDatabase)
    .filter(p => p.id !== product.id)
    .slice(0, 3);

  return (
    <div className={styles.container}>
      <Header />
      
      <div className={styles.productDetailWrapper}>
        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <Link href="/">Trang chủ</Link>
          <span className={styles.separator}>/</span>
          <Link href="/">Sản phẩm</Link>
          <span className={styles.separator}>/</span>
          <span className={styles.current}>{product.name}</span>
        </div>

        <div className={styles.productMain}>
          
          <div className={styles.leftColumn}>
        <SimpleSlider 
          images={product.images} 
          productName={product.name} 
        />
            <div className={styles.productGallery}>
              <div className={styles.mainImage}>
                <img 
                  src={product.images[selectedImage] || product.image} 
                  alt={product.name}
                  className={styles.mainImg}
                />
              </div>
              {product.images.length > 1 && (
                <div className={styles.thumbnailList}>
                  {product.images.map((img, idx) => (
                    <div 
                      key={idx}
                      className={`${styles.thumbnail} ${selectedImage === idx ? styles.activeThumb : ''}`}
                      onClick={() => setSelectedImage(idx)}
                    >
                      <img src={img} alt={`${product.name} ${idx + 1}`} />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* DELIVERY INFO - ĐẶT DƯỚI ẢNH SẢN PHẨM */}
            <div className={styles.deliveryInfoBelow}>
              <div className={styles.deliveryTitle}>📦 THÔNG TIN GIAO HÀNG</div>
              <div className={styles.deliveryItem}>🚚 Miễn phí vận chuyển cho đơn từ 299k</div>
              <div className={styles.deliveryItem}>🔄 Đổi trả trong 7 ngày</div>
              <div className={styles.deliveryItem}>💳 Thanh toán khi nhận hàng (COD)</div>
              <div className={styles.deliveryItem}>⭐ Cam kết hàng chính hãng 100%</div>
              <div className={styles.deliveryItem}>🎁 Quà tặng hấp dẫn khi mua 2 sản phẩm</div>
            </div>
          </div>

          {/* ========== CỘT PHẢI: THÔNG TIN CHI TIẾT SẢN PHẨM ========== */}
          <div className={styles.productInfo}>
            <div className={styles.brand}>{product.brand}</div>
            <h1 className={styles.productName}>{product.name}</h1>
            
            <div className={styles.rating}>
              <span className={styles.stars}>{renderStars()}</span>
              <span className={styles.reviewCount}>({product.reviewCount} đánh giá)</span>
            </div>

            {/* Price Box */}
            <div className={styles.priceBox}>
              <div className={styles.priceRow}>
                <span className={styles.currentPrice}>{formatPrice(product.price)}</span>
                <span className={styles.oldPrice}>{formatPrice(product.originalPrice)}</span>
                <span className={styles.discountBadge}>-{product.discount}%</span>
              </div>
              <div className={styles.savedAmount}>
                💰 Tiết kiệm {formatPrice(product.originalPrice - product.price)}
              </div>
            </div>

            {/* Dropdown chọn mã màu son - chỉ hiển thị nếu có colors */}
            {product.colors && product.colors.length > 0 && (
              <div className={styles.colorDropdownSection}>
                <div className={styles.colorDropdownLabel}>
                  🎨 Mã màu son:
                </div>
                
                <div className={styles.customDropdown}>
                  <div 
                    className={styles.dropdownHeader}
                    onClick={() => setIsColorMenuOpen(!isColorMenuOpen)}
                  >
                    <div className={styles.dropdownSelected}>
                      {selectedColor ? (
                        <>
                          <div 
                            className={styles.dropdownColorSwatch}
                            style={{ backgroundColor: selectedColor.colorHex }}
                          />
                          <span>{selectedColor.name} ({selectedColor.code})</span>
                          {selectedColor.stock < 10 && (
                            <span className={styles.stockWarning}>🔥 Sắp hết</span>
                          )}
                        </>
                      ) : (
                        <span>Chọn mã màu</span>
                      )}
                    </div>
                    <span className={`${styles.dropdownArrow} ${isColorMenuOpen ? styles.arrowUp : ''}`}>▼</span>
                  </div>
                  
                  {isColorMenuOpen && (
                    <>
                      <div className={styles.dropdownOverlay} onClick={() => setIsColorMenuOpen(false)} />
                      <div className={styles.dropdownMenu}>
                        {product.colors.map((color) => (
                          <div
                            key={color.code}
                            className={`${styles.dropdownItem} ${selectedColor?.code === color.code ? styles.dropdownItemActive : ''}`}
                            onClick={() => handleSelectColor(color)}
                          >
                            <div className={styles.itemSwatch} style={{ backgroundColor: color.colorHex }} />
                            <div className={styles.itemInfo}>
                              <div className={styles.itemName}>
                                {color.name} 
                                <span className={styles.itemCode}>({color.code})</span>
                              </div>
                              <div className={styles.itemDesc}>{color.desc}</div>
                            </div>
                            {color.stock < 10 && <div className={styles.itemStockLow}>Còn {color.stock}</div>}
                            {selectedColor?.code === color.code && <div className={styles.itemCheck}>✓</div>}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
                
                {/* Hiển thị mô tả màu đã chọn */}
                {selectedColor && (
                  <div className={styles.colorDescBox}>
                    <span>💄</span>
                    <span>{selectedColor.desc}</span>
                  </div>
                )}
              </div>
            )}

            {/* Stock Info */}
            <div className={styles.stockInfo}>
              <span className={styles.stockBadge}>
                <span className={styles.greenDot}></span>
                Còn hàng
              </span>
              <span className={styles.separator}>|</span>
              <span className={styles.remainCount}>
                🔥 Còn {currentStock}/{product.stock} suất
              </span>
            </div>

            {/* Mô tả ngắn */}
            <div className={styles.shortDesc}>{product.description}</div>

            {/* Số lượng */}
            <div className={styles.quantityBox}>
              <span className={styles.quantityLabel}>Số lượng:</span>
              <div className={styles.quantityControl}>
                <button 
                  className={styles.qtyBtn} 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <input 
                  type="number" 
                  className={styles.qtyInput}
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, Math.min(currentStock, parseInt(e.target.value) || 1)))}
                  min="1"
                  max={currentStock}
                />
                <button 
                  className={styles.qtyBtn} 
                  onClick={() => setQuantity(Math.min(currentStock, quantity + 1))}
                  disabled={quantity >= currentStock}
                >
                  +
                </button>
              </div>
            </div>

            {/* Nút hành động */}
            <div className={styles.actionButtons}>
              <button className={styles.buyNowBtn} onClick={handleBuyNow}>
                🛒 Mua ngay
              </button>
              <button className={styles.addToCartBtn} onClick={handleAddToCart}>
                📦 Thêm vào giỏ
              </button>
            </div>
          </div>
        </div>

        {/* Tabs chi tiết sản phẩm */}
        <div className={styles.productTabs}>
          <div className={styles.tabHeaders}>
            <button 
              className={`${styles.tabBtn} ${activeTab === 'detail' ? styles.activeTab : ''}`} 
              onClick={() => setActiveTab('detail')}
            >
              📝 Chi tiết sản phẩm
            </button>
            <button 
              className={`${styles.tabBtn} ${activeTab === 'ingredients' ? styles.activeTab : ''}`} 
              onClick={() => setActiveTab('ingredients')}
            >
              🔬 Thành phần
            </button>
            <button 
              className={`${styles.tabBtn} ${activeTab === 'howtouse' ? styles.activeTab : ''}`} 
              onClick={() => setActiveTab('howtouse')}
            >
              💄 Hướng dẫn dùng
            </button>
          </div>
          
          <div className={styles.tabContent}>
            {activeTab === 'detail' && (
              <div className={styles.detailContent}>
                {product.detail.split('\n').map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            )}
            {activeTab === 'ingredients' && (
              <div className={styles.ingredientsContent}>
                <p><strong>Thành phần:</strong> {product.ingredients}</p>
                <p className={styles.note}>* Công thức an toàn, không chứa paraben, không gây kích ứng da</p>
              </div>
            )}
            {activeTab === 'howtouse' && (
              <div className={styles.howtouseContent}>
                {product.howToUse.split('\n').map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
                <p className={styles.note}>✨ Mẹo: Thoa son sau khi dưỡng môi để có đôi môi căng mọng và màu son lên chuẩn hơn!</p>
              </div>
            )}
          </div>
        </div>

        {/* Sản phẩm liên quan */}
        <div className={styles.relatedProducts}>
          <div className={styles.relatedHeader}>
            <h2 className={styles.relatedTitle}>✨ Có thể bạn cũng thích</h2>
            <Link href="/" className={styles.viewAllLink}>
              Xem tất cả <span className={styles.arrowIcon}>→</span>
            </Link>
          </div>
          
          <div className={styles.relatedGrid}>
            {relatedProducts.map((related) => (
              <Link href={`/chitietsanpham?id=${related.id}`} key={related.id} className={styles.relatedCard}>
                <div className={styles.relatedImageWrapper}>
                  <div className={styles.discountBadgeSmall}>-{related.discount}%</div>
                  <img src={related.image} alt={related.name} className={styles.relatedImage} />
                </div>
                
                <div className={styles.relatedInfo}>
                  <h3 className={styles.relatedName}>{related.name}</h3>
                  
                  <div className={styles.relatedPriceBox}>
                    <span className={styles.relCurrent}>{formatPrice(related.price)}</span>
                    <span className={styles.relOld}>{formatPrice(related.originalPrice)}</span>
                  </div>
                  
                  <div className={styles.relatedStock}>
                    <span className={styles.stockIcon}>🔥</span>
                    <span className={styles.stockText}>Còn {related.stock}/30 suất</span>
                  </div>
                  
                  <button className={styles.relatedBtn}>
                    Xem chi tiết
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}







