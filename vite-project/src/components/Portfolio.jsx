import springImage from '../images/spring.jpg';
import meditation from '../images/meditation.jpg';
import foliage from '../images/foliage.png';
import horse from '../images/horse.jpg';
import random from '../images/background.jpg';

import { Project } from './Project'

const picArray = [{ title: 'Employee Management System', image: springImage , link: 'https://github.com/shukikat/Employee-Management_System' },
{ title: 'Vehicle Builder', image: meditation , link: 'https://github.com/shukikat/vehicle-builder' },
{ title: 'Read-me Generator ', image: foliage , link: 'https://github.com/shukikat/README-File-Generator' },
{ title: 'Data Science', image: horse , link: 'https://github.com/shukikat/datasciencecoursera' },
{ title: 'PreWork Study Guide', image:  random , link: 'https://github.com/shukikat/prework-study-guide' }



]


export default function Portfolio() {

    return (

        <>





            <h1>Portfolio</h1>
            
                {picArray.map((project, index) => (
                    <Project
                       key={index}
                        title = {project.title}
                        image = {project.image}
                        link = {project.link}
                        />

                ))}

            




        </>
    );
}