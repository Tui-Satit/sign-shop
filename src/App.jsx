import "./App.css";

function App() {
  const services = [
    "ออกแบบโลโก้",
    "ป้ายไวนิล",
    "ป้ายสติกเกอร์",
    "ป้ายอิงค์เจ็ท",
    "สติกเกอร์โฆษณา",
    "งานป้ายขนาดเล็กและขนาดใหญ่",
  ];

  return (
    <div className="app">
      <header className="header">
        <div className="container nav">
          <h1 className="logo">P’Kea Sign Shop</h1>
          <nav>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
             <a href="https://line.me/R/oaMessage/@575kncik/" className="btn primary">
    LINE
  </a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-content">
          <div>
            <p className="eyebrow">ร้านทำป้ายครบวงจร</p>
            <h2>ร้านป้ายอารมณ์ขัน</h2>
            <p className="hero-text">
              รับทำป้ายรูปแบบต่างๆ เช่น ป้ายไวนิล ป้ายสติกเกอร์ งานโฆษณา
              และงานป้ายหลากหลายรูปแบบ ทั้งขนาดเล็กและขนาดใหญ่
            </p>

            <div className="hero-buttons">
              <a href="#portfolio" className="btn primary">ดูผลงาน</a>
              <a href="#contact" className="btn secondary">ติดต่อร้าน</a>
            </div>
          </div>

          <div className="hero-card">
            <h3>บริการเด่น</h3>
            <ul>
              <li>ออกแบบโลโก้</li>
              <li>ป้ายไวนิล / สติกเกอร์</li>
              <li>งานพิมพ์โฆษณา</li>
              <li>ป้ายร้าน / ป้ายธุรกิจ</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <h2>About</h2>
          <p>
            ร้านป้ายอารมณ์ขัน ให้บริการออกแบบและผลิตป้ายโฆษณาหลากหลายประเภท
            เน้นงานคุณภาพ ดูดี น่าเชื่อถือ และเหมาะกับธุรกิจของลูกค้า
          </p>
        </div>
      </section>

      <section id="services" className="section alt">
        <div className="container">
          <h2>Services</h2>
          <div className="service-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <h3>{service}</h3>
                <p>
                  งานออกแบบและผลิตอย่างใส่ใจ เหมาะสำหรับร้านค้าและธุรกิจทุกขนาด
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="section">
        <div className="container">
          <h2>Portfolio</h2>
          <div className="portfolio-grid">
  <img src="/images/sign1.jpg" className="portfolio-img" />
  <img src="/images/sign2.jpg" className="portfolio-img" />
  <img src="/images/sign3.jpg" className="portfolio-img" />
   <img src="/images/sign4.jpg" className="portfolio-img" />
  <img src="/images/sign5.jpg" className="portfolio-img" />
  <img src="/images/front-shop.jpg" className="portfolio-img" />
</div>
        </div>
      </section>

<section className="contact-section" id="contact">
  <div className="container">
    <div className="section-header">
      <p className="section-tag">CONTACT US</p>
      <h2>ติดต่อร้านทำป้าย</h2>
      <p className="section-subtext">
        สอบถามราคา ส่งรายละเอียดงาน หรือดูตำแหน่งร้านได้จากช่องทางด้านล่าง
      </p>
    </div>

    <div className="contact-box">
      <div className="contact-info">
        <div className="contact-card">
          <div className="contact-icon">💬</div>
          <div className="contact-content">
            <h3>LINE OA</h3>
            <p>พูดคุย สอบถามราคา และส่งรายละเอียดงานป้ายได้ทันที</p>
            <a
              href="https://line.me/R/oaMessage/@575kncik/?text=สนใจทำป้ายครับ"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn line-btn"
            >
              แชท LINE
            </a>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-icon">👍</div>
          <div className="contact-content">
            <h3>Facebook Page</h3>
            <p>ดูผลงานเพิ่มเติม ติดตามอัปเดต และติดต่อผ่านเพจร้าน</p>
            <a
              href="https://www.facebook.com/p/%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%9B%E0%B9%89%E0%B8%B2%E0%B8%A2-%E0%B8%A7%E0%B8%A3%E0%B8%A3%E0%B8%93%E0%B8%8A%E0%B8%B1%E0%B8%A2-%E0%B8%AD%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%95%E0%B8%8A%E0%B9%8A%E0%B8%AD%E0%B8%9B-%E0%B8%9B%E0%B8%97%E0%B8%B8%E0%B8%A1%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5-100066857031232/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn facebook-btn"
            >
              ไปที่ Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="map-card">
        <div className="map-header">
          <h3>ตำแหน่งร้าน</h3>
          <p>สามารถกดดูเส้นทางหรือเปิดใน Google Maps ได้ทันที</p>
        </div>

        <div className="map-frame">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15483.937284670752!2d100.5418526!3d14.0189437!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e281004012cc21%3A0x7986f89b6dea6653!2z4Lij4LmJ4Liy4LiZ4Lib4LmJ4Liy4Lii4Lin4Lij4Lij4LiT4LiK4Lix4Lii4Lit4Liy4Lij4LmM4LiV4LiK4LmK4Lit4LibIDg4LzEwIOC4q-C4oeC4ueC5iCA1IOC4luC4meC4mSDguJvguJfguLjguKHguJjguLLguJnguLUt4Lia4Liy4LiH4Lib4Liw4Lir4Lix4LiZICjguILguLLguK3guK3guIEp!5e0!3m2!1sen!2sth!4v1776243162713!5m2!1sen!2sth"
            width="100%"
            height="340"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
        </div>

        <a
          href="https://maps.app.goo.gl/biP3GPKscGcDwiTZA"
          target="_blank"
          rel="noopener noreferrer"
          className="map-link-btn"
        >
          เปิดแผนที่
        </a>
      </div>
    </div>
  </div>
</section>

      <footer className="footer">
        <div className="container">
          <p>© 2026 P’Kea Sign Shop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;