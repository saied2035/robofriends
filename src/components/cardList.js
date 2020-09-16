import React from 'react';
import Card from './card'
const CardList = ({robots}) => {
	            return (
	            robots.map( item => {
                   return (
                      <Card key={item.id} id={item.id} name={item.name} email={item.email} />
                  )
	            }
            )
	            	);

          		
          
		
}

export default CardList;