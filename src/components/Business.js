import React from 'react';
import './Business.css';

const Business = (props) => {
    let imageSrc = props.imageSrc;
    let name = props.name;
    let address = props.address;
    let city = props.city;
    let state = props.state;
    let zipcode = props.zipCode;
    let category = props.category;
    let rating = props.rating;
    let reviews = props.reviews

    return(
        <div className='Business'>
            <img alt={props.name + ' pic'} src={imageSrc} style={{height: "5cm"}}/>
            <ul>
                <li className='name'>{name}</li>
                <li className='cat'>{category}</li>
                <li className='Rev'>
                {"avg. Rating: " + rating}
                {" Reviews: " + reviews}</li>
                <li className='address'>{address + " "}
                {city + " "}</li>
                <li className='address'>{state + " "}
                {zipcode}</li>
            </ul>
        </div>
    )
}

export default Business;
