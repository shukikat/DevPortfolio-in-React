import '../styles/Project.css'

function Project({title, image, link }) {
    
    
    
    return (
   
        <main className="main-contact">
        <div>
            
         <h2>{title}</h2>
         <div className="bordercheck">
          <img src={image} alt={title} className='img-portfolio'/>
          
          <a href={link} target="_blank" rel="noopener noreferrer">View GitHub Repo</a>
          </div>
          
          </div>

          </main>


        


        


    );


      



    
}








export {Project}