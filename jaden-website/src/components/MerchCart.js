import React from 'react'
import './MerchCart.css'
import MerchProduct from './MerchProduct'
import CartProduct from './CartProduct'
import { Button } from './Button'

function MerchCart() {
    return (
        <>
        <div className="merch-background">
            <div className="merch-wrapper">
            <h1 className="merch-header">MERCH</h1>
                <div className="merch-section">
                    <div className="scroll-box-merch">
                        <MerchProduct src="twitter-icon.png" />
                        <MerchProduct src="ctv3_tshirt.png" />
                        <MerchProduct src="ctv3_hoodie.png" />
                        <MerchProduct src="erys.jpg" />
                        <MerchProduct src="syre.jpg" />
                    </div>
                </div>
            </div>
        </div>
        <div className="cart-background">
            <div className="cart-wrapper">
            <h1 className="cart-header">CART</h1>
                <div className="cart-section">
                    <div className="cart-headers">
                        <span className="cart-header-product">PRODUCT</span>
                        <span>SIZE</span>
                        <span>QUANTITY</span>
                        <span className="cart-header-price">PRICE</span>
                    </div>
                    <div className="scroll-box-cart">
                        <CartProduct src="ctv3_tshirt.png" />
                        <CartProduct src="ctv3_hoodie.png" />  
                    </div>
                    <div className="total-row">
                        <span className="total-name">Total</span>
                        <span className="total-price">£39.98</span>
                        <Button buttonStyle="btn--buy" buttonSize="btn--medium">PURCHASE</Button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default MerchCart
