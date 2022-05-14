import React, {useState} from 'react';
import axios from "axios";

export default function Farmers_AddItems() {

    const [itemType,setType] = useState("");
    const [itemName,setiName] = useState("");
    const [quantity,setQty] = useState("");
    const [price,setPrice] = useState("");
    const [image,setImage] = useState("");

    function sendData(e){
        e.preventDefault();

        const newItem = {
            itemType, itemName, quantity, price, image
        }
        axios.post("http://localhost:3100/itemadd/add", newItem).then(() => {
            alert("New Item Added")
        }).catch((err) => {
            alert(err)
        });
    }

    return(
        <div>
            <div className='container addForm'>
            <form onSubmit={sendData} action="/post" method="post" enctype="multipart/form-data">

                <div className="form-group">
                    <label for="ItemType">Item Type</label>
                    <select class="form-control" onChange={(e) =>{
                           setType(e.target.value);
                       }}>
                        <option>Dairy Products</option>
                        <option>Vegetables</option>
                        <option>Fruits</option>
                    </select>
                </div>
                <br/>
                <div className="form-group">
                    <label for="ItemName">Item Name</label>
                    <input type="text" className="form-control" id="ItemName" aria-describedby="emailHelp" placeholder="Enter Item Name"
                    onChange={(e) =>{
                        setiName(e.target.value);
                    }}/>
                </div>

                <div className="form-group">
                    <label for="Quantity">Quantity</label>
                    <input type="text" className="form-control" id="Quantity" placeholder="Enter Quantity"
                    onChange={(e) =>{
                        setQty(e.target.value);
                    }}/>
                </div>

                <div className="form-group">
                    <label for="Price">Price</label>
                    <input type="text" className="form-control" id="Price" placeholder="Enter Price"
                    onChange={(e) =>{
                        setPrice(e.target.value);
                    }}/>
                </div>

                <div className="form-group">
                    <label for="image">Insert Item Image</label>
                    <input type="file" className="form-control-file" id="image" name='image'
                    onChange={(e) =>{
                        setImage(e.target.value);
                    }}/>
                </div>

                <button type="submit" className="btn btn-primary">Add Item</button>
            </form>
            </div>
        </div>
    );
}