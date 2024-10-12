import '../styles/Footer.css';




// export default function Footer () {
//   return (
//     <footer className="footer">
//         <p>This is my footer</p>
//         <a href='/'>Github</a>
//             </footer> );
// }


export default function Footer() {
  return (
    <section className="footer">

      <hr /> 

        <section className="footer-info-left">
            <a href="https://github.com/shukikat" target="_blank" rel="noopener noreferrer">Github Repo</a>

        </section>

        <section className="footer-info-center">
            <a href="https://www.linkedin.com/in/shukikathuria/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </section>

        <section className="footer-info-right">

        
            <a href="https://www.facebook.com/shuki.kathuria/?locale=gn_PY" target="_blank" rel="noopener noreferrer">Facebook</a>
          </section>

  
      <hr />
    </section>
  );
}