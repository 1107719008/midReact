import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Card, Button } from "antd";
import Cart from "../pages/Cart";
import AddToCart from "./AddToCart";

const { Meta } = Card;

export default function ProductItem({product}){

    

    return(
            <Link className="card" to={`/product/${product.id}`}>
                <Card 
                hoverable
                className="productlist-card bg-card"
                cover={<img style={{borderRadius:'20px'}} src={product.image}/>}
                >   
                    <div className="productlist-card-body">
                        <p className="productlist-title">{product.title}</p>
                        <p className="productlist-price">NT$ {product.price}</p>
                        <p className="productlist-lecturer">{product.lecturer}</p>
                        <p className="productlist-student">
                            <img
                            className="productlist-person-icon"
                            src="/image/list/person.png"
                            />
                            {product.student}人
                        </p>
                        <div className="productlist-rating">
                            <img
                            style={{width:'178px',height:'29px'}}
                            src="/image/rating.png"
                            />
                            <p className="productlist-rating-comments">{product.comments}個評價</p>
                        </div>
                        <div className="productlist-bar"></div>
                        <Link className="productlist-btn" to="/">
                            <AddToCart product={product}></AddToCart>
                        </Link>
                    </div>
                </Card>
            </Link>
    )
}