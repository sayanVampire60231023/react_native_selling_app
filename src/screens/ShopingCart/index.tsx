/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from "react";
import { View,Text, StyleSheet,FlatList} from "react-native";
import CartProductItm from "../../components/CartProductItm";

import QuantitySelector from "../../components/QuantitySelector";
import products from "../../data/cart";
const ShopingCart = ( )=>
{
    const totalprice=products.reduce((summedPrice,product)=>(summedPrice+ product.item.price *product.quantity),
    0);
    return(
      <View style={styles.page}>
        <View>
            
            <Text style={{fontSize:18}}>
                Subtotal ({products.length} items):
            </Text>
            <Text style={{color:'#e4799'}}>
                {totalprice.toFixed(2)}
            </Text>
            </View>  
      
      <FlatList
       data ={products}
       renderItem={({item})=><CartProductItm Cartitem={item}/>
        
        }
        showsVerticalScrollIndicator={false}
       />
     
     
      </View>
    );
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = StyleSheet.create({
    page:{
       padding:10,
       
    },
}
);

export default ShopingCart;