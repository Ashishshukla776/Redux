import React from 'react';
import {View,
Text,
StyleSheet} from 'react-native';
import { connect } from 'react-redux';

const Home=(props)=>{
    return(
    <View style={Styles.container}>
        
        <Text style={{fontSize:30}}>Name: {props.user.username}</Text>
        <Text style={{fontSize:30,}}>Password: {props.user.password}</Text>
    </View>
    )
}
const mapStateToProps=(state)=>({user:state.user});
const mapDispatchToProps=(dispatch)=>({});

const connectComponent=connect(mapStateToProps,mapDispatchToProps);
export default connectComponent(Home);

const Styles=StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
      
    }
})
