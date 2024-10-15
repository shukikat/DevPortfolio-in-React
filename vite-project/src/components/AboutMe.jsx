import Footer from './Footer'
import '../styles/AboutMe.css'
import mypic from '../images/mypic.jpg';

//brief intro to paragraph and image
export default function AboutMe() {
  return (

    <div>
      <main className='mainheader main-contact'>
        <aside className='about-me-context'>
          <h1>About Me</h1>

          <img src={mypic} alt='Pic of SK' className='about-me-image'></img>


          <p>
            My name is Shuki Kathuria and I am currently learning to code
            <br/>
            as I pursue a career in Full Stack Development.
            <br/>
            I began my professional journey working with children with autism.
            <br/>
             About eight years ago, I transitioned into the IT field as a software tester. 
             <br/>
             where I gained valuable insights into software quality and the user experience.  
             <br/>
             Recently, I recognized the need to grow my technical skills,
             <br/>
             thus I decided to focus on Full Stack Development. 
             <br/>

          </p>
        </aside>

        


      </main>
    </div>


  );
}