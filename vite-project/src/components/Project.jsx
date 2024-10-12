
function Project({title, image, link }) {
    
    
    
    return (
   
        <div>
            <h2>{title}</h2>
          <img src={image} alt={title}/>
          
          <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>


        </div>


        


    );


      



    
}








export {Project}