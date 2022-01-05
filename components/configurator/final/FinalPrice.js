import React from "react"
import { View, Text, StyleSheet } from "react-native";
import Layer from '~/components/global/Layer'
import { globalStyles } from "~/assets/style";
import { useSelector } from 'react-redux'
import { formatPrice } from "~/assets/utils";
import { Ionicons } from "@expo/vector-icons";
export default function FinalPrice() {
    const {selectedItems} = useSelector(state => state.userReducer)

    let totalPrice = 0;
    selectedItems.map(item => totalPrice += item.price)
    return(
        <View style={styles.finalPrice}>
            <Layer />
            <Text style={[globalStyles.text, styles.finalPriceText]}> 
                <Ionicons name="logo-euro" size={14} color="lightblue"/> {formatPrice(totalPrice)} 
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    finalPrice: {
        position: 'absolute',
        top: -10, 
        left: 20, 
        // width: 120,
        // padding: 20
    },
    finalPriceText: {
        fontSize: 18,
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 10,
        paddingLeft: 10,
        paddingRight: 12,
        paddingTop: 4,
    }
})

// import { connect } from 'react-redux';
// import { formatPrice } from "../../utils"

// const mapStateToProps = state => {
//     return {
//        totalSum: state.items.totalSum,
//     };
// };

// export default connect(mapStateToProps)(FinalPrice);