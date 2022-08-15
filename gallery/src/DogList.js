import React from 'react';
import Dog from './Dog';
import './DogsList.css'

const DogList = (props) =>{
    
    const dogsArray = props.dogs.map((dogUrl)=>{
        return <Dog url={dogUrl} key={dogUrl} />
    })

    return(
        <div className='container'>
            {dogsArray}
        </div>
    )
}

export default DogList;