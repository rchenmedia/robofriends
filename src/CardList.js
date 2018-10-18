import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {  //robots from app.js <CardList robots={filteredRobots} />
return (
        <div>
            {
                robots.map((robot, i ) => {
                    return  (
                        <Card       //card component
                          key={i}   //keyprop keeps track of the cards
                          id={robots[i].id}
                          name={robots[i].name}
                          email={robots[i].email}
                        />
                    );
                })
            }
        </div>
        );
}

export default CardList;
