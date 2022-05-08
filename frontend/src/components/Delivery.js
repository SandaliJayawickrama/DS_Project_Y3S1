import React from 'react'
import { NavLink } from 'react-router-dom'
import del_img2 from '../img/d2.png'
import del_img3 from '../img/d3.png'
import ChooseDelivery from './ChooseDelivery'

const Delivery = () => {
    return (

        <>
            <br /><br />
            <h1><center>Choose Your Delivery Option</center></h1>

            <div class="row">
                <div class="col-md-6">
                    <center>
                        <img src={del_img2} className="d2" />
                        <h5 class="card-title1">Delivery</h5>
                        <p className='detail2'>Delivery fee of $3 will apply to every online order delivered.</p>
                    </center>
                </div>

                <div class="col-md-6">
                    <center>
                        <img src={del_img3} className="d3" />
                        <h5 class="card-title2">Pickup</h5>
                        <div class="dropdown detail3">
                            <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Select Outlet
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item">Maharagama</a></li>
                                <li><a class="dropdown-item">Colombo</a></li>
                                <li><a class="dropdown-item">Nugegoda</a></li>
                            </ul>
                        </div>
                    </center>
                </div>
                <div>
                </div>
            </div>

        </>

    )
}

export default Delivery