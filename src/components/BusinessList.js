import React from 'react';
import Business from './Business';
import './BusinessList.css';

const BusinessList = (props) => {
    const businesses = props.businesses;
    let listed = businesses.map((business) =>
        <Business
            imageSrc={business.imageSrc} 
            name={business.name} 
            address={business.address}
            city={business.city} 
            state={business.state}
            zipCode={business.zipCode}
            category={business.category}
            rating={business.rating}
            reviews={business.reviewCount}
        />

    )

    return(
        <div className="BusinessList" style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr'}}>
            {listed}
        </div>
    )
}

export default BusinessList;
