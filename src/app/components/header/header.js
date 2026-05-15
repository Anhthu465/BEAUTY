"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";
// Đường dẫn này khớp với cấu trúc thư mục src/app/components/header/header.js


export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(3); // Example cart count, you can connect to your cart state

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <>
      {/* Header Top - Logo và Search */}
      <div className={styles.headerTop}>
        <div className={styles.logoWrapper}>
          <Image src="/next.svg" alt="Vercel Logo" width={100} height={24} />
        </div>

        <div className={styles.searchWrapper}>
          <form onSubmit={handleSearch} className={styles.searchForm}>
            <input
              type="text"
              placeholder="Bạn cần tìm sản phẩm gì hôm nay?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
            <button type="submit" className={styles.searchButton}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
        </div>

        {/* New: User Actions - Login and Cart */}
        <div className={styles.userActions}>
          <Link href="/login" className={styles.loginButton}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 21V19C20 16.8 18.2 15 16 15H8C5.8 15 4 16.8 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
              <path d="M17 3.5L19 5.5L22 2.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Đăng nhập</span>
          </Link>
          
          <Link href="/cart" className={styles.cartButton}>
            <div className={styles.cartIconWrapper}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6L8 18H18L20 6H6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 6H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M10 10V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M14 10V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="8" cy="20" r="1.5" fill="currentColor"/>
                <circle cx="16" cy="20" r="1.5" fill="currentColor"/>
              </svg>
              {cartCount > 0 && (
                <span className={styles.cartBadge}>{cartCount}</span>
              )}
            </div>
            <span>Giỏ hàng</span>
          </Link>
        </div>

        <div className={styles.placeholderRight}></div>
      </div>

      {/* Header Bottom - Menu */}
      <div className={styles.headerBottom}>
        <nav className={styles.nav}>
          <ul>
            <li className={styles.hasDropdown}>
              <span className={styles.menuTitle}>DANH MỤC SẢN PHẨM</span>
              <div className={styles.dropdownMenu}>
                <div className={styles.dropdownHeader}>
                  <h3>DANH MỤC SẢN PHẨM</h3>
                </div>
                <div className={styles.dropdownContent}>
                  <div className={styles.menuColumn}>
                    <ul>
                      <li>
                        <img loading="lazy" src="//theme.hstatic.net/200000868185/1001288884/14/iconmenucheckmin1.png?v=1429" alt="" />
                        <span className={styles.menuItem}>CHĂM SÓC DA MẶT</span>
                        <span className={styles.arrow}></span>
                      </li>
                      <li>
                        <img loading="lazy" src="//theme.hstatic.net/200000868185/1001288884/14/iconmenucheckmin2.png?v=1429" alt="" />
                        <span className={styles.menuItem}>CHĂM SÓC CƠ THỂ</span>
                        <span className={styles.arrow}></span>
                      </li>
                      <li>
                        <img loading="lazy" src="//theme.hstatic.net/200000868185/1001288884/14/iconmenucheckmin3.png?v=1429" alt="" />
                        <span className={styles.menuItem}>CHĂM SÓC TÓC</span>
                        <span className={styles.arrow}></span>
                      </li>
                      <li>
                        <img loading="lazy" src="//theme.hstatic.net/200000868185/1001288884/14/iconmenucheckmin4.png?v=1429" alt="" />
                        <span className={styles.menuItem}>CHĂM SÓC RĂNG MIỆNG</span>
                        <span className={styles.arrow}></span>
                      </li>
                      <li>
                        <img loading="lazy" src="//theme.hstatic.net/200000868185/1001288884/14/iconmenucheckmin5.png?v=1429" alt="" />
                        <span className={styles.menuItem}>TRANG ĐIỂM</span>
                        <span className={styles.arrow}></span>
                      </li>
                      <li>
                        <img loading="lazy" src="//theme.hstatic.net/200000868185/1001288884/14/iconmenucheckmin6.png?v=1429" alt="" />
                        <span className={styles.menuItem}>PHỤ KIỆN/DỤNG CỤ LÀM ĐẸP</span>
                        <span className={styles.arrow}></span>
                      </li>
                      <li>
                        <img loading="lazy" src="//theme.hstatic.net/200000868185/1001288884/14/iconmenucheckmin7.png?v=1429" alt="" />
                        <span className={styles.menuItem}>DƯỢC MỸ PHẨM</span>
                        <span className={styles.arrow}></span>
                      </li>
                      <li>
                        <img loading="lazy" src="//theme.hstatic.net/200000868185/1001288884/14/iconmenucheckmin8.png?v=1429" alt="" />
                        <span className={styles.menuItem}>THỰC PHẨM CHỨC NĂNG</span>
                        <span className={styles.arrow}></span>
                      </li>
                      <li className={styles.bestSeller}>
                        <img loading="lazy" src="//theme.hstatic.net/200000868185/1001288884/14/iconmenucheckmin9.png?v=1429" alt="" />
                        <span className={styles.menuItem}>BEST SELLER</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>SẢN PHẨM MỚI</li>
            <li className={styles.hasDropdown}>
              <span className={styles.menuTitle}>GÓC LÀM ĐẸP</span>
              <div className={styles.dropdownMenu}>
                <div className={styles.dropdownHeader}>
                  <h3>GÓC LÀM ĐẸP</h3>
                  <div className={styles.subHeader}>
                  </div>
                </div>
                <div className={styles.dropdownContent}>
                  <div className={styles.menuColumn}>
                    <ul>
                      <li>
                        <span className={styles.menuItem}>Cẩm Nang Làm Đẹp</span>
                      </li>
                      <li>
                        <span className={styles.menuItem}>Reviews Mỹ Phẩm</span>
                      </li>
                      <li>
                        <span className={styles.menuItem}>Make Up Xinh Mỗi Ngày</span>
                      </li>
                      <li>
                        <span className={styles.menuItem}>Chuyện Về Tóc</span>
                      </li>
                      <li>
                        <span className={styles.menuItem}>Tin Tức Lam Thảo</span>
                      </li>
                      <li>
                        <span className={styles.menuItem}>Tuyển dụng</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.dropdownFooter}>
                  <span className={styles.cosmetics}>COSMETICS</span>
                </div>
              </div>
            </li>
            <li>BEAUTY</li>
          </ul>
        </nav>
      </div>
    </>
  );
}