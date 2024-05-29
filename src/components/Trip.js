import React from 'react'
import './TripStyles.css'
import TripData from './TripData'
import Place1 from '../assets/3.jpg'
import Place2 from '../assets/5.jpg'
import Place3 from '../assets/9.jpg'
function Trip() {
  return (
    <div className='trip'>
    <h1>Recent Trips</h1>
    <p><code>Discover Unique Destinations with Us</code></p>
    <div className='tripcard'>
    <TripData 
     image={Place1}
     heading='Trip to Paris'
     text='The Rwenzori Mountains, also known as the Mountains of the Moon,
     are a range of mountains in eastern equatorial Africa located on the border
      between Uganda and the Democratic Republic of the Congo. '
    />
     <TripData 
     image={Place2}
     heading='Trip to Mumbai'
     text='The Rwenzori Mountains, also known as the Mountains of the Moon,
     are a range of mountains in eastern equatorial Africa located on the border
      between Uganda and the Democratic Republic of the Congo. '
    />
     <TripData 
     image={Place3}
     heading='Trip to Packwach'
     text='The Rwenzori Mountains, also known as the Mountains of the Moon,
     are a range of mountains in eastern equatorial Africa located on the border
      between Uganda and the Democratic Republic of the Congo.'
    />
    </div>
    </div>
  )
}

export default Trip