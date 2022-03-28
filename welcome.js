import React, {useState} from 'react';
import {View, TextInput, StyleSheet,Button} from 'react-native';
import {connect} from 'react-redux';
import * as ActionTypes from '../store/actionTypes';
const Welcome = (props) => {
  const [name, setName] = useState('');

 const handleInput = () => {
    props.addUser(name);
    props.navigation.navigate('Home');
  };
  

  return (
    <View style={Styles.container}>
      
      <TextInput
       style={Styles.input}
        placeholder="Name"
        onChangeText={(e)=>setName(e)}
      />
      <Button title='Click'
        style={Styles.button}
        onPress={handleInput}/>
      
      
    </View>
  );
};

const mapStateToProps = state => ({user: state.user});

const mapDispatchToProps = dispatch => ({
  addUser: username =>
    dispatch({
      type: ActionTypes.ADD_USER,
      payload: {
        username,
      },
    }),
});

const connectComponent = connect(mapStateToProps, mapDispatchToProps);

export default connectComponent(Welcome);

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'rgba(81,135,200,1)',
    padding: 10,
    borderWidth: 0,
    alignItems: 'center',
    borderRadius: 20,
  },
  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: '600',
  },
  input: {
    borderColor: '#555',
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    textAlign: 'center',
    width:250
  },
});
