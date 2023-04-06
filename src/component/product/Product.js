import React from "react";
import { Text, View, Image } from "react-native";
import productStyle from "./Product.style";

const Product = ({ product }) => {
    return (
        <View style={productStyle.storeItem}>
            <Image style={productStyle.image} source={{ uri: product.imgURL }} />
            <View style={productStyle.content}>
                <View>
                    <Text style={productStyle.title}>{product.title}</Text>
                </View>
                <View>
                    <Text style={productStyle.price}>{product.price}</Text>
                    {!product.inStock && <Text style={productStyle.stock}>STOKTA YOK</Text>}
                </View>
            </View>
        </View>
    )
}

export default Product;