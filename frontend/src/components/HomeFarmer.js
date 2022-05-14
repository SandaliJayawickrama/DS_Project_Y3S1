import React from 'react';

export default function HomeFarmer() {
    return (
        <div className='container farmerHomebody'>
           <a href="/addItems" > <button type="submit" className="btn btn-primary">Add Items</button> </a>
           <a href="/displayItems" > <button className="btn btn-primary">Display Items</button> </a>
        </div>
    );

}