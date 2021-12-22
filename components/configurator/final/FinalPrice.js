import React from "react"
import { View, Text, StyleSheet } from "react-native";
import Layer from '~/components/configurator/global/Layer'
import { globalStyles } from "~/assets/style";
import { useSelector } from 'react-redux'

export default function FinalPrice() {
    const {selectedItems} = useSelector(state => state.userReducer)

    let totalPrice = 0;
    selectedItems.map(item => totalPrice += item.price)
    return(
        <View style={styles.finalPrice}>
            <Layer />
            <Text style={[globalStyles.text, styles.finalPriceText]}> {totalPrice} </Text>
            {/* // const TotalPrice = props.totalSum; */}
            {/* € {formatPrice(TotalPrice)} */}
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