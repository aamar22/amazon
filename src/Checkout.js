import React from 'react'
import "./checkout.css"
import Subtotal from "./Subtotal";
import {useStateValue} from "./StateProvider";
import CheckoutProduct from './CheckoutProduct';

function Checkout(){
 const [{basket,user},dispatch]=useStateValue();  
    return (
        <div className='checkout'>
            <div className="checkout_left">
                <img className="checkout_ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/Homemain/XCM_Manual_1500x250_1209699_1077610_1209699_in_home_28_01_20_page_5d027374_166d_466f_9f22_5789bd5e69af_jpg._CB423636511_.jpg" alt=""/>
                <div>
                    <h3>Hello,{user?.email}</h3>
                    <h2 className="checkout_title">
                        Your shopping Basket
                    </h2>
                 {basket.map(item=>(
                     <CheckoutProduct
                     id={item.id}
                     tittle={item.tittle}
                     image={item.image}
                     price={item.price}
                     rating={item.rating}/>

                 ))}

                </div>
            </div>
            <div className='checkout_right'>
                <Subtotal/>
                <h2>The subtotal with go here</h2>
            </div>
        </div>
    )
}

export default Checkout;
