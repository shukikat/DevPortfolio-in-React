import '../styles/Footer.css';
import react from 'react'

//separated each social media links and contacts into their own section

export default function Footer() {
  return (
    <section className="footer">

      <hr /> 

        <section className="footer-info-left">
            <a href="https://github.com/shukikat" target="_blank" rel="noopener noreferrer"className="a-tag">Github</a>

        </section>

        <section className="footer-info-center">
            <a href="https://www.linkedin.com/in/shukikathuria/" target="_blank" rel="noopener noreferrer" className="a-tag">LinkedIn</a>
          </section>

        <section className="footer-info-right">

        
            <a href="https://www.facebook.com/shuki.kathuria/?locale=gn_PY" target="_blank" rel="noopener noreferrer" className="a-tag">Facebook</a>
          </section>

  
      <hr />
    </section>
  );
}