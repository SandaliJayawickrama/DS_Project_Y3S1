import React, {useEffect, useState} from 'react';
import axios from "axios";

export default function Farmers_DisplayItems(){

    const [listItems, setListItems] = useState([]);

    useEffect(() => {
        const getItemList = async() => {
        try {
            const res = await axios.get('http://localhost:3100/itemadd/getdata')
            setListItems(res.data);
            console.log('render')
        } catch(err) {
            console.log(err);
        }
        }
        getItemList()
    },[]);

    
    return(
        <div>
            <div className='div1'>
            <table>
                <thead>
                    <tr>
                        <th>Item Type</th>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Image</th>
                    </tr>
                </thead>

                <tbody>
                {
                    listItems.map(item => (
                        <div className="todo-item">
                        {
                            <tr>
                                <td>{item.itemType }</td>
                                <td>{item.itemName}</td>
                                <td>{item.quantity }</td>
                                <td>{item.price }</td>
                                <td>image png/jpg</td>
                                <td>
                                    <a href='/editItems'><button className="btn btn-primary button1" >Edit Item</button></a>
                                    <a href='#'><button className="btn btn-primary button1">Delete Item</button></a>
                                </td>
                            </tr>
                            
                        }
                        </div>
                        )
                    )
                }
                </tbody>
            </table>
            </div>
        </div>
    );
       
}