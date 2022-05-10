import React, { useState } from 'react';




export default function Farmers_EditItems(){

    
const [inputVal,setInput]  = useState({
    itemType:"",
    itemName:"",
    quantity:"",
    price:"",
    image:""
})

const setdata = (e)=>{
    console.log(e.target.value);
    const {name,value} = e.target;
    setInput((preval)=>{
        return{
            ...preval,
            [name]:value
        }
    })
}



    return(
        <div>
            <div className='container'>
            <form>
                <div className="form-group">
                    <label for="ItemType">Item Type</label>
                    <select class="form-control" value={inputVal.itemType} onChange={setdata} name="type">
                        <option>Dairy Products</option>
                        <option>Vegetables</option>
                        <option>Fruits</option>
                    </select>
                </div>
                <br/>
                <div className="form-group">
                    <label for="ItemName">Item Name</label>
                    <input type="text" className="form-control" id="ItemName" placeholder="Enter Item Name" value={inputVal.itemName} onChange={setdata} name="ItemName"/>
                </div>

                <div className="form-group">
                    <label for="Quantity">Quantity</label>
                    <input type="text" className="form-control" id="Quantity" placeholder="Enter Quantity" value={inputVal.quantity} onChange={setdata} name="Quantity"/>
                </div>

                <div className="form-group">
                    <label for="Price">Price</label>
                    <input type="text" className="form-control" id="Price" placeholder="Enter Price" value={inputVal.price} onChange={setdata} name="Price"/>
                </div>

                <div className="form-group">
                    <label for="image">Insert Item Image</label>
                    <input type="file" className="form-control-file" id="image" name='image' value={inputVal.image} onChange={setdata}/>
                </div>

                <button type="submit" className="btn btn-primary">Edit Item</button>
            </form>
            </div>
        </div>
    );
       
}