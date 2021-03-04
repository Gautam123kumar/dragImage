import React, { useState } from 'react';
import ImageCard from "react-tinder-card";
import './Card.css';


function Cards() {
    const [people,setPeople] = useState([
        {
            name : "Elon Mask",
            url :'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg'
        },
        {
            name : "jeff Bezos",
            url :'https://api.time.com/wp-content/uploads/2020/07/jeff-bezos.jpg'
        },
        {
            name : "sushant singh",
            url :"https://images.indianexpress.com/2020/08/sushant-singh-rajput-1200-11.jpg"
        }
    ]);
    // const Swiped =(direction,nameToDelete)=>{
    //     console.log("removing:"+nameToDelete)
    // }
    // const outOfFrame=(name)=>{
    //     console.log(name+"left the screen");
    // }
    
    

    return (
        <div>
            <div className="Cards__cardContainer">

                {people.map((person) => (
                    <ImageCard 
                        className="swipe"
                        key = {person.name}
                        preventSwipe ={['up','down']}
                    >
                        <div 
                            style= {{ backgroundImage: `url(${person.url})` }}
                            className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </ImageCard>
                ))}
            </div>
        </div>
    );
}

export default Cards
