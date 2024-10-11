import Header from './Header'

const resumePDF='http://localhost:5173/src/files/Resume.pdf'

export default function Resume() {
  
     const downloadFileURL=(url)=>{
      const fileName='Resume.pdf'
      const aTag=document.createElement('a')
      aTag.href=url
      aTag.setAttribute('download', fileName)
      document.body.appendChild(aTag)
      aTag.click()
      aTag.remove()


      
    }

    return (
    <div>
      <Header />
      <h1>Resume</h1>

      <button onClick={()=>
        downloadFileURL(resumePDF)}>
        SK Resume </button>
      

      
  
      <p> CSS</p>
      <p>HTML</p>
    </div>
  );
}



