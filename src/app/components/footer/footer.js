"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";
// Đường dẫn này khớp với cấu trúc thư mục src/app/components/header/header.js


export default function Footer() {
  return (
             <div className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.gridTemplateFooter}>
            <div className={styles.gridTemplateFooter1}>
              <div className={styles.gridTemplatt}>
                <div className={styles.gridTemplatt1}>
                
                </div>
                <div className={styles.gridTemplatt2}>
                  <h3>BEAUTY</h3>
                  <div className={styles.bdestion}>
                    ⭐️ Địa chỉ: <br /> <br /> 
                    Chi nhánh: <a href="https://maps.app.goo.gl/n7NUrqJiS7dthxpHA" target="_blank" rel="noopener noreferrer">123 Hiệp Thành, Quận 12, Thành Phố Hồ Chí Minh</a><br /> <br />
                    ☎️ Hotline: 028 888 99913<br />
                    Email: lyngocanhthu@gmail.com
                  </div>
                </div>
              </div>
              <div className={styles.gridTemplattContent}>
                Thiên đường Mỹ phẩm Chính hãng giá tốt. Với hơn 100+ Thương hiệu đồng hành. Là chuỗi cửa hàng uy tín hàng đầu của các bạn trẻ tại TP.HCM.<br /><br />
                Công ty TNHH BEAUTY - Giấy phép kinh doanh số 12453, cấp ngày 06/10/2026 bởi Sở kế Hoạch và Đầu Tư TP.HCM.
              </div>

              <div className={styles.griDoftheAnhtoan}>
                <div>
                  <img alt="footer img" src="//theme.hstatic.net/200000868185/1001288884/14/linthanhtoicon1.png?v=1429" loading="lazy" />
                </div>
                <div>
                  <img alt="footer img" src="//theme.hstatic.net/200000868185/1001288884/14/linthanhtoicon2.png?v=1429" loading="lazy" />
                </div>
                <div>
                  <img alt="footer img" src="//theme.hstatic.net/200000868185/1001288884/14/linthanhtoicon3.png?v=1429" loading="lazy" />
                </div>
                <div>
                  <img alt="footer img" src="//theme.hstatic.net/200000868185/1001288884/14/linthanhtoicon4.png?v=1429" loading="lazy" />
                </div>
                <div>
                  <img alt="footer img" src="//theme.hstatic.net/200000868185/1001288884/14/linthanhtoicon5.png?v=1429" loading="lazy" />
                </div>
                <div>
                  <img alt="footer img" src="//theme.hstatic.net/200000868185/1001288884/14/linthanhtoicon6.png?v=1429" loading="lazy" />
                </div>
              </div>

              <div className={styles.logoBct}>
                <a href="http://online.gov.vn/Website/chi-tiet-135275" target="_blank" rel="noopener noreferrer">
                  <img width="200" alt="bct" src="//theme.hstatic.net/200000868185/1001288884/14/cotbctimage_medium.png?v=1429" loading="lazy" />
                </a>
              </div>
            </div>

            <div className={styles.gridTemplateFooter2}>
              <div className={styles.gridTemplatRight}>
                <div>
                  <img alt="image" src="//theme.hstatic.net/200000868185/1001288884/14/er2iconicheckimg1.png?v=1429" loading="lazy" />
                </div>
                <div>
                  <img alt="image" src="//theme.hstatic.net/200000868185/1001288884/14/er2iconicheckimg2.png?v=1429" loading="lazy" />
                </div>
                <div>
                  <img alt="image" src="//theme.hstatic.net/200000868185/1001288884/14/er2iconicheckimg3.png?v=1429" loading="lazy" />
                </div>
                <div>
                  <img alt="image" src="//theme.hstatic.net/200000868185/1001288884/14/er2iconicheckimg4.png?v=1429" loading="lazy" />
                </div>
                <div>
                  <img alt="image" src="//theme.hstatic.net/200000868185/1001288884/14/er2iconicheckimg5.png?v=1429" loading="lazy" />
                </div>
              </div>

              <div className={styles.gridMenuList}>
                <div className={styles.gridMenuListTitl}>
                  <h3>CHĂM SÓC KHÁCH HÀNG</h3>
                  <ul>
                    <li><Link href="/pages/chinh-sach-doi-tra">Chính sách đổi trả</Link></li>
                    <li><Link href="/pages/chinh-sach-bao-mat">Chính sách bảo mật</Link></li>
                    <li><Link href="/pages/chinh-sach-thanh-toan">Chính sách thanh toán</Link></li>
                    <li><Link href="/pages/dieu-khoan-dich-vu">Điều khoản dịch vụ</Link></li>
                    <li><Link href="/pages/huong-dan-mua-hang">Hướng dẫn mua hàng</Link></li>
                    <li><Link href="/pages/huong-dan-thanh-toan-vnpay">Hướng dẫn thanh toán VNPAY</Link></li>
                    <li><Link href="/pages/lien-he">GÓP Ý - KHIẾU NẠI</Link></li>
                    <li><Link href="/pages/hdgtgt">Hóa Đơn GTGT</Link></li>
                  </ul>
                </div>

                <div className={styles.gridMenuListTitl}>
                  <h3>GIỜ MỞ CỬA</h3>
                  <div className={styles.descot2}>
                    Từ 9:00 - 21:30 tất cả các ngày trong tuần (bao gồm cả các ngày lễ, ngày Tết).
                  </div>
                  <h3>GÓP Ý - KHIẾU NẠI</h3>
                  <div className={styles.descot2}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                      <g clipPath="url(#clip0_47547_18893)">
                        <path d="M12.7293 9.74408C11.8835 9.02072 11.0252 8.58256 10.1899 9.30482L9.69108 9.74135C9.32613 10.0582 8.64757 11.5388 6.02404 8.52082C3.40105 5.50666 4.96195 5.03735 5.32745 4.7232L5.82899 4.28613C6.65998 3.56223 6.34638 2.65093 5.74704 1.71286L5.38536 1.14466C4.7833 0.208782 4.12769 -0.405852 3.29452 0.316958L2.84433 0.710323C2.4761 0.978577 1.44679 1.85054 1.19711 3.50705C0.896623 5.49464 1.84453 7.77069 4.01623 10.268C6.18521 12.7664 8.30884 14.0214 10.3205 13.9995C11.9923 13.9815 13.0019 13.0844 13.3177 12.7582L13.7695 12.3643C14.6005 11.6421 14.0842 10.9067 13.2379 10.1817L12.7293 9.74408Z" fill="#030104"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_47547_18893">
                          <rect width="14" height="14" fill="white" transform="translate(0.666748)"></rect>
                        </clipPath>
                      </defs>
                    </svg> 0769 661 668 - 0288 889 9913
                  </div>
                </div>

                <div className={styles.gridMenuListTitl}>
                  <h3>Thông tin công ty</h3>
                  <ul>
                    <li><Link href="/pages/about-us">Giới thiệu</Link></li>
                    <li><Link href="/pages/lien-he-hop-tac">Liên hệ hợp tác</Link></li>
                    <li><Link href="https://lamthaocosmetics.talent.vn/">Tuyển dụng</Link></li>
                    <li><Link href="/pages/giay-chung-nhan-dai-ly">Giấy Chứng Nhận Đại Lý</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}