import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItem: [],
      listText: '',
    };
  }

  addTodo(e) {
    const { listText } = this.state;
    // this.setState({ text:e.target.value });
    console.log(listText);
  }
  render() {
    const { listText } = this.state;
    console.log(listText);
    return (
      <View style={styles.container}>
        {/* header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Note Your Todo...</Text>
        </View>
        {/* list Display */}
        <View style={styles.listDisplay}>
          <ScrollView style={styles.scrolDisplay}>
            <Text style={styles.list}>list 1</Text>
            <Text style={styles.list}>list 1</Text>
            <Text style={styles.list}>list 1</Text>
            <Text style={styles.list}>list 1</Text>
          </ScrollView>
        </View>
        <View style={styles.inputBox}>
          <TextInput
            placeholder="Enter your Todo"
            onChange={(e) => this.setState({ listText:e.target.value })}
            style={styles.inpu}
          ></TextInput>
          <TouchableOpacity style={styles.btn} onPress={(e) => this.addTodo(e)}>
            <Text style={{ color: "#fff", fontSize: 25, textAlign: "center" }}>
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  inpu: {
    margin: 5,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    width: 280,
    fontSize: 16,
  },
  header: {
    backgroundColor: "#FFA500",
    width: "100%",
    padding: 15,
    paddingTop: 35,
  },
  headerText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 25,
  },
  inputBox: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  listDisplay: {
    flex: 7,
    backgroundColor: "#fff8ea",
  },
  scrolDisplay: {
    width: "100%",
  },
  btn: {
    backgroundColor: "#FFA500",
    padding: 8,
    borderRadius: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  list: {
    margin: 10,
    backgroundColor: "#fff2d9",
    width: 300,
    padding: 10,
    borderLeftWidth: 3,
    borderColor: "#ffa801",
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
// //ddddfrom
// import React from 'react';
// import { Text, View,Button ,StyleSheet} from 'react-native';
// import { TextInput } from 'react-native-web';
// class App extends React.Component{
// constructor()
// {
// super();
// {
//   this.state={
//     name:'',
//     password:'',
//     address:'',
//   }
// }
// }

// submit()
// {
//   // alert("function called")
//    console.warn('all values',this.state)
// }


// render (){
//   return (
//     <View >
//            <TextInput
//      style={styles.textBox}
//      //secure Text Entry={ture}
//       onChange={(text)=>{this.setState({password:text})}}
//      placeholder="enter password"/>
//            <TextInput
//       style={styles.textBox}
//       onChange={(text)=>{this.setState({address:text})}}
//       placeholder="enter address"/>
//            <TextInput
//       style={styles.textBox}
//       onChange={(text)=>{this.setState({name:text})}}
//       placeholder=" enter name "/>

//       <Button title='submit' onPress={()=>this.submit()}/>
//     </View>
//   );
// }
// }

// const styles=StyleSheet.create({
//   textBox:{
// borderColor:'skyblue',
// borderBottomWidth:2,
// padding:10,
// marginHorizontal:20,
// marginVertical:25,

//   }
// })