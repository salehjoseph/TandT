import './DestinationStyles.css';
import DestinationData from './DestinationData';
import Rwnz from '../assets/4.jpg';
import Rwnz2 from '../assets/1.jpg';
const Destination = () =>{
    return(
        <div className="destination">
            <h1>Popular Destinations </h1>
            <p>Tours help you to see alot with in a short time frame</p>
           <DestinationData
           className='first-des'
           heading='Rwenzori Highlands'
           text='The Rwenzori Mountains, also known as the Mountains of the Moon,
            are a range of mountains in eastern equatorial Africa located on the border
             between Uganda and the Democratic Republic of the Congo. 
             The highest peak of the Rwenzori Mountains is Mount Stanley which reaches
              5,109 metres (16,762 ft). The Rwenzori Mountains are also known for their 
              permanent snow-capped and glaciated upper regions'
              image1={Rwnz}
              image2={Rwnz2}
          />
             <DestinationData
             className='first-des'
           heading='Rwenzori Highlands'
           text='The Rwenzori Mountains, also known as the Mountains of the Moon,
            are a range of mountains in eastern equatorial Africa located on the border
             between Uganda and the Democratic Republic of the Congo. 
             The highest peak of the Rwenzori Mountains is Mount Stanley which reaches
              5,109 metres (16,762 ft). The Rwenzori Mountains are also known for their 
              permanent snow-capped and glaciated upper regions'
              image1={Rwnz}
              image2={Rwnz2}
          />
        </div>
    );
}
export default Destination