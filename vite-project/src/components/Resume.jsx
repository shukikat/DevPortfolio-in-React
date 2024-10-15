import Header from './Header'
import '../styles/Resume.css'

const resumePDF = 'http://localhost:5173/src/files/Resume.pdf'

export default function Resume() {

  const downloadFileURL = (url) => {
    const fileName = 'Resume.pdf'
    const aTag = document.createElement('a')
    aTag.href = url
    aTag.setAttribute('download', fileName)
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()



  }

  return (


    <div>

      <main className='main-resume'>

        

        <h1>Resume</h1>

        <aside className="resume-content">

        <a href={resumePDF} download target="_blank" rel="noopener noreferrer">
          Download My Resume

        </a>

     <h2 className="headertwo"> Proficiencies</h2>

        <p> CSS</p>
        <p>HTML</p>
        <p>Javascript</p>
        <p>SQL</p>

        </aside>

      </main>
    </div>
  );
}



