/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { 
  Home, 
  ChevronDown, 
  Search, 
  Menu, 
  X, 
  ChevronRight, 
  Facebook, 
  Mail, 
  Phone,
  FileText,
  Calendar,
  Users,
  UserPlus,
  ArrowUp
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // XỬ LÝ HIỆU ỨNG CUỘN (SCROLL EFFECT)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // XỬ LÝ HIỆU ỨNG XUẤT HIỆN KHI CUỘN (FADE-IN ON SCROLL)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="wrapper">
      {/* ===== HEADER (THANH ĐIỀU HƯỚNG) ===== */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <nav className="navbar">
            <div className="logo">
              {/* THAY LOGO TẠI ĐÂY */}
              <span className="logo-text">Hạt Giống Đỏ</span>
            </div>

            <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
              <li className="nav-item">
                <a href="#home" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                  <Home size={18} /> Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#thongbao" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                  Thông báo BCN
                </a>
              </li>
              <li className="nav-item">
                <a href="#vanban" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                  Văn bản
                </a>
              </li>
              <li className="nav-item has-dropdown">
                <span className="nav-link">
                  Ban Chủ nhiệm <ChevronDown size={14} />
                </span>
                <ul className="dropdown-menu">
                  <li className="dropdown-item"><a href="#banchunhiem" onClick={() => setIsMenuOpen(false)}>Đương nhiệm</a></li>
                  <li className="dropdown-item"><a href="#tiennhiem" onClick={() => setIsMenuOpen(false)}>Tiền nhiệm</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#sukien" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                  Sự kiện nổi bật
                </a>
              </li>
              <li className="nav-item">
                <a href="#dangky" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                  Đăng ký thành viên
                </a>
              </li>
              <li className="nav-item">
                <button className="nav-link search-btn" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                  <Search size={18} />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="main-grid">
        {/* ===== LEFT COLUMN: HERO & INTRO ===== */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <section id="home" className="hero-panel">
            {/* THAY LOGO TẠI ĐÂY */}
            <img 
              src="https://via.placeholder.com/150/d60000/ffd700?text=LOGO" 
              alt="Logo Hạt Giống Đỏ" 
              className="hero-logo"
            />
            <div className="hero-subtitle">SÁNG MÃI MỘT NIỀM TIN</div>
            <h1 className="hero-title">TỔ TU DƯỠNG RÈN LUYỆN HẠT GIỐNG ĐỎ LÀ GÌ?</h1>
            <div className="watermark">pngtree</div>
          </section>

          <section id="thongbao" className="card fade-in">
            <div className="section-title">GIỚI THIỆU CHUNG</div>
            <p className="history-text">
              {/* THAY NỘI DUNG TẠI ĐÂY */}
              Câu lạc bộ đóng vai trò là cốt truyện quan quan trọng trong việc tu dưỡng, rèn luyện tư tưởng đạo đức và bản lĩnh chính trị cho sinh viên. Chúng tôi tập trung vào việc bồi dưỡng những hạt giống tiềm năng.
            </p>
            <div style={{ background: '#eee', height: '120px', width: '100%', marginTop: '10px', borderRadius: '4px', overflow: 'hidden' }}>
              {/* THAY ẢNH TẠI ĐÂY */}
              <img src="https://via.placeholder.com/300x120" alt="Intro" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </section>
        </div>

        {/* ===== CENTER COLUMN: EVENTS & EXTRA CONTENT ===== */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <section id="sukien" className="card fade-in">
            <div className="section-title">SỰ KIỆN NỔI BẬT</div>
            <div className="event-list">
              {/* SỰ KIỆN 1 */}
              <div className="event-item">
                <div className="event-img-box">
                  <img src="https://via.placeholder.com/100x70" alt="Event 1" />
                </div>
                <div className="event-info">
                  <h4>Cuộc thi: Huyền thoại tuổi trẻ 2026</h4>
                  <p>Sân chơi trí tuệ và bản lĩnh dành cho các hạt giống đỏ tiềm năng...</p>
                </div>
              </div>

              {/* SỰ KIỆN 2 */}
              <div className="event-item">
                <div className="event-img-box">
                  <img src="https://via.placeholder.com/100x70" alt="Event 2" />
                </div>
                <div className="event-info">
                  <h4>Sinh hoạt chuyên đề</h4>
                  <p>Tọa đàm về lý tưởng sống của thanh niên trong kỷ nguyên mới...</p>
                </div>
              </div>

              {/* SỰ KIỆN 3 (Extended for density) */}
              <div className="event-item">
                <div className="event-img-box">
                  <img src="https://via.placeholder.com/100x70" alt="Event 3" />
                </div>
                <div className="event-info">
                  <h4>Hành trình về nguồn</h4>
                  <p>Tham quan và tìm hiểu các di tích lịch sử cách mạng hào hùng...</p>
                </div>
              </div>
            </div>
          </section>

          <section id="bosung" className="card fade-in">
            <div className="section-title">NỘI DUNG BỔ SUNG</div>
            <div style={{ border: '1px dashed #ccc', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999', fontSize: '12px', borderRadius: '4px' }}>
              <p>Khu vực nội dung tùy chỉnh</p>
            </div>
          </section>
          
          <section id="dangky" className="card fade-in" style={{ textAlign: 'center' }}>
            <div className="section-title">ĐĂNG KÝ</div>
            <p className="history-text" style={{ marginBottom: '10px' }}>Tham gia cùng chúng tôi!</p>
            <a 
              href="#" 
              style={{ 
                background: 'var(--primary-red)', 
                color: 'var(--white)',
                padding: '8px 15px', 
                borderRadius: '4px', 
                fontWeight: 'bold',
                fontSize: '12px',
                textDecoration: 'none',
                display: 'inline-block'
              }}
            >
              Đăng tham gia ngay
            </a>
          </section>
        </div>

        {/* ===== RIGHT COLUMN: BOARD & HISTORY ===== */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <section id="banchunhiem" className="card fade-in">
            <div className="section-title">BAN CHỦ NHIỆM</div>
            
            <div className="leader-mini">
              <img src="https://via.placeholder.com/150" alt="Chủ nhiệm" className="leader-avatar" />
              <div className="leader-role">Chủ nhiệm XIV</div>
              <div className="leader-name-mini">Lê Đức Huy</div>
            </div>

            <div className="member-grid-dense">
              <div className="member-card-mini">
                <img src="https://via.placeholder.com/100" alt="M1" className="avatar-mini" />
                <div className="member-name-mini">Nguyễn Văn A</div>
              </div>
              <div className="member-card-mini">
                <img src="https://via.placeholder.com/100" alt="M2" className="avatar-mini" />
                <div className="member-name-mini">Trần Thị B</div>
              </div>
            </div>
          </section>

          <section id="vanban" className="card fade-in">
            <div className="section-title">LỊCH SỬ HÌNH THÀNH</div>
            <p className="history-text">
              Trải qua 14 nhiệm kỳ hoạt động, Tổ luôn khẳng định vị thế dẫn đầu trong công tác rèn luyện học viên.
            </p>
            <div style={{ background: '#f9f9f9', padding: '10px', marginTop: '10px', borderRadius: '4px', fontSize: '11px', borderLeft: '3px solid var(--gold)' }}>
              "Nơi khát vọng bắt đầu, nơi bản lĩnh lên ngôi"
            </div>
          </section>
        </div>
      </main>

      {/* ===== FLOATING SIDE MENU ===== */}
      <div className="floating-menu">
        <a href="#" className="float-btn">📞</a>
        <a href="#" className="float-btn">✉️</a>
        <a href="#" className="float-btn">📝</a>
        <a href="#" className="float-btn" style={{ background: 'var(--gold)', color: 'var(--dark)' }}><ArrowUp size={16} /></a>
      </div>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div>© 2026 Tổ Tu dưỡng Rèn luyện Hạt Giống Đỏ. All rights reserved.</div>
        <div>Liên hệ: hatgiongdo@gmail.com | 0123 456 789</div>
      </footer>

    </div>
  );
}
