
import React from 'react';
import 
 
    {View,TextInput,StyleSheet} from 'react-native';

 function Login(){
   
    //const[name,setName]=useState('');
    
    //const[password,setPassword]=useState('');
    return(
       <View style={Styles.container}>
         
           <TextInput
              placeholder='Enter Name'
              />
            <TextInput
              placeholder ='Enter Password'
            />
       </View> 
    )

}
const Styles=StyleSheet.create({
    container:{
        flex:1,
        justyContent:'center',
        alignItem:'center',
        borderRadius:5,
        borderColor:'red'
    }
});
export default Login;