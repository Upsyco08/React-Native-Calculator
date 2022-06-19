import React, { useState } from "react";
import { View, Text, TextInput, Button, Pressable } from "react-native";

const Calculator = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);

  // const handleFn = (type) => {
  //   switch (type) {
  //     case "ADD":
  //       setResult(number1 + number2);
  //     case "SUBTRACT":
  //       setResult(number1 - number2);
  //     case "MULTIPLY":
  //       setResult(number1 * number2);
  //     case "DIVIDE":
  //       setResult(number1 / number2);
  //     default:
  //       return;
  //   }
  // };

  const handleAdd = () => {
    setResult(number1 + number2);
  };
  const handleSubtract = () => {
    setResult(number1 - number2);
  };
  const handleMultiply = () => {
    setResult(number1 * number2);
  };
  const handleDivide = () => {
    setResult(number1 / number2);
  };
  return (
    <View style={{ 
      flex: 1, 
      alignItems: "center",
      backgroundColor: 'lightgrey' }}>
      <Text
        style={{
          backgroundColor: 'darkblue',
          color: 'white',
          textAlign: 'center',
          marginTop: 30,
          marginBottom: 20,
          fontSize: 30,
          borderColor: "grey",
          borderWidth: 1,
          width:350,
          paddingVertical: 10
        }}
      >CALCULATOR</Text>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop:5,
        marginBottom:15,
        width: 250
      }}>
        <TextInput 
          style={{  
            height:35,
            fontSize:30,
            borderColor: 'grey',
            borderWidth: 1,
            borderRadius: 10,
            width:115,
            color: 'red',
            textAlign:"center"  }}
            value={number1}
            placeholder="0"
            onChangeText={(val) => setNumber1(+val)}
            keyboardType="numeric"
        />
        <TextInput
          style={{
            height:35,
            fontSize:30,
            borderColor: 'grey',
            borderWidth: 1,
            borderRadius: 10,
            width:115,
            textAlign:"center", 
            color: "red" }}
            value={number2}
            placeholder="0"
            onChangeText={(val) => setNumber2(+val)}
            keyboardType="numeric"
        />
      </View>
      <Pressable style={{
        marginBottom:5,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        width:250,
        borderRadius: 10,
        backgroundColor: 'teal',
      }} onPress={handleAdd}>
      <Text style={{
        color: "white"
      }}>Add ( + )</Text>
      </Pressable>
          <Pressable style={{
            marginBottom:5,
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 10,
            width:250,
            borderRadius: 10,
            backgroundColor: 'teal',
          }} onPress={handleSubtract}>
          <Text style={{
                          color: "white"
          }}>Subtract ( - )</Text>
          </Pressable>
          <Pressable style={{
            marginBottom:5,
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 10,
            width:250,
            borderRadius: 10,
            backgroundColor: 'teal',
          }} onPress={handleMultiply}>
          <Text style={{
                          color: "white"
          }}>Multiply ( * )</Text>
          </Pressable>
          <Pressable style={{
            marginBottom:5,
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 10,
            width:250,
            borderRadius: 10,
            backgroundColor: 'teal',
          }} onPress={handleDivide}>
          <Text style={{
            color: "white"
          }}>Divide ( / )</Text>
          </Pressable>
      {/* <Button title="Subtract ( - )" onPress={handleSubtract} />
      <Button title="Multiply ( * )" onPress={handleMultiply} />
      <Button title="Divide ( / )" onPress={handleDivide} /> */}
      
      {/* Result */}
      <Text
        style={{
          fontSize: 20,
          width:250, 
          paddingVertical: 10,
          textAlign: 'center',
          color: 'black'
        }}
      >
        RESULT
      </Text>
      <Text
        style={{
          fontSize: 50,
          borderColor: "grey",
          borderWidth: 1,
          borderRadius: 10,
          width:250, 
          paddingVertical: 10,
          textAlign: 'center',
          color: 'darkblue',
          height: 70
        }}
      >
        {result}
      </Text>
    </View>
  );
};

export default Calculator;
