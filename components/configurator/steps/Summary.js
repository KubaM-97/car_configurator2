// import React from "react"

// import { connect } from 'react-redux';
// import { formatPrice } from "~/../../utils"

// const Summary = props => {
//     const items = props.chosenItems.map(el => {
//         return (
//             <li className="my-3">{el.category}: {el.name}</li>
//         )
//     })
//     return(
// <           div className="wrapperOptions wrapperOptionsHigher mx-auto p-lg-2 py-1">
//               <div className="layer position-absolute fixed-top bg-dark w-100 h-100"></div>
//                 <h3 className="pt-3">Your Products</h3>
//                 <hr className="border border-5 bg-danger"/>
//                 <div className="options d-flex justify-content-evenly flex-wrap mt-lg-4 p-lg-5">
//                     <ol>
//                         {items}
//                     </ol>
//                     <p className="final p-lg-3 p-1 border border-3">Total: € {formatPrice(props.totalSum)}</p>
//                 </div>
//             </div>
// )}
       

// const mapStateToProps = state => {
//     return {
//         chosenItems: state.items.chosenItems,
//         totalSum: state.items.totalSum
//     };
// };

// const mapDispatchToProps = dispatch => ({
//     dispatch
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Summary);

// import React, { useState } from 'react';
// import { View, FlatList, Text, TouchableOpacity, Pressable, StyleSheet, SafeAreaView, Image } from 'react-native';

// import Item from "~/Item"
// import uuid from 'react-native-uuid';

// import engineHeat from "~/assets/images/engines/engineHeat.jpg"
// import engineCombustion from "~/assets/images/engines/engineCombustion.jpg"
// import engineIon from "~/assets/images/engines/engineIon.jpg"
// import { globalStyles } from '../../assets/style';

// // import { handleButtonActivation } from "~/../../utils"

// export default function Engine(props) {
    
//     const [engines, setEngines] = useState([
//         {id: uuid.v4(), img: engineHeat, name: "Heat", price: 600},
//         {id: uuid.v4(), img: engineCombustion, name: "Combustion", price: 31000},
//         {id: uuid.v4(), img: engineIon, name: "Ion", price: 176000}
//     ])
//     const isButtonDisabled = true;
    
//     return (
//         <View style={styles.container}>
//           <View style={styles.header}>
//             <Text style={[globalStyles.text, styles.headerText]}>1/8 Engine</Text>
//           </View>
//           <FlatList
//             data={engines}
//             keyExtractor={(item) => item.id}
//             renderItem={( {item}) => (
//             <Item item={{...item, category: 'Engine'}} />
//             )}
//           />
//           <TouchableOpacity style={[globalStyles.button, styles.button]}>
//               <Pressable onPress={()=>props.onNextStep()}>
//                   <Text style={globalStyles.text}>Continue!!!</Text>
//               </Pressable>
//           </TouchableOpacity>
//         </View>
//     )
// }














// const styles = StyleSheet.create({
//   header:{
//     marginTop: 30,
//   },
//   headerText:{
//     fontSize: 28, 
//     color: '#5fb2ff', 
//   },
//   container: {
//     width: '80%',
//     position: 'relative',
//     height: 400,
//     flex: 1,
//     justifyContent: 'center',
//   },
//   button: {
//     width: '90%',
//     marginTop: 0,
//     marginBottom: 40,
//     alignSelf: 'center'
//   }
// })



