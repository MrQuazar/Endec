import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput, ImageBackground } from 'react-native';

export default class App extends Component {
  constructor(props) {  
    super(props);  
    this.state = {text: ''};  
}  

    generator = function(x)
        {
        var a = x;
        var b = "error";
        if (a== "a")
        {
            b = "5e";
        }
        if (a== "b")
        {
            b = "8r";
        }
        if (a== "c")
        {
            b = "3t";
        }
        if (a== "d")
        {
            b = "9b";
        }
        if (a== "e")
        {
            b = "1h";
        }
        if (a== "f")
        {
            b = "6x";
        }
        if (a== "g")
        {
            b = "4n";
        }
        if (a== "h")
        {
            b = "7r";
        }
        if (a== "i")
        {
            b = "2l";
        }
        if (a== "j")
        {
            b = "4d";
        }
        if (a== "k")
        {
            b = "1v";
        }
        if (a== "l")
        {
            b = "9z";
        }
        if (a== "m")
        {
            b = "8f";
        }
        if (a== "n")
        {
            b = "6s";
        }
        if (a== "o")
        {
            b = "3g";
        }
        if (a== "p")
        {
            b = "5k";
        }
        if (a== "q")
        {
            b = "2c";
        }
        if (a== "r")
        {
            b = "7w";
        }
        if (a== "s")
        {
            b = "9u";
        }
        if (a== "t")
        {
            b = "3a";
        }
        if (a== "u")
        {
            b = "5q";
        }
        if (a== "v")
        {
            b = "6i";
        }
        if (a== "w")
        {
            b = "2o";
        }
        if (a== "x")
        {
            b = "8e";
        }
        if (a== "y")
        {
            b = "1m";
        }
        if (a== "z")
        {
            b = "7y";
        }
        if (a== "A")
        {
            b = "5V";
        }
        if (a== "B")
        {
            b = "1L";
        }
        if (a== "C")
        {
            b = "6P";
        }
        if (a== "D")
        {
            b = "3H";
        }
        if (a== "E")
        {
            b = "4N";
        }
        if (a== "F")
        {
            b = "9Z";
        }
        if (a== "G")
        {
            b = "7F";
        }
        if (a== "H")
        {
            b = "2B";
        }
        if (a== "I")
        {
            b = "8H";
        }
        if (a== "J")
        {
            b = "3P";
        }
        if (a== "K")
        {
            b = "5Z";
        }
        if (a== "L")
        {
            b = "7D";
        }
        if (a== "M")
        {
            b = "9L";
        }
        if (a== "N")
        {
            b = "1A";
        }
        if (a== "O")
        {
            b = "2G";
        }
        if (a== "P")
        {
            b = "4M";
        }
        if (a== "Q")
        {
            b = "6S";
        }
        if (a== "R")
        {
            b = "8Y";
        }
        if (a== "S")
        {
            b = "0C";
        }
        if (a== "T")
        {
            b = "1I";
        }
        if (a== "U")
        {
            b = "9O";
        }
        if (a== "V")
        {
            b = "2U";
        }
        if (a== "W")
        {
            b = "8W";
        }
        if (a== "X")
        {
            b = "3Q";
        }
        if (a== "Y")
        {
            b = "7K";
        }
        if (a== "Z")
        {
            b = "4E";
        }
        return b;
    }
    convert = function( )
    {
        var code = this.state.text ;
        console.log(code);
        var i = 0;
        var x = ' ';
        var z ;
        var c ;
        for (
        i = 65; i <= 90; i++)
        {
            x = String.fromCharCode(i);
            z = new String(x).toString();
            c = this.generator(z);
            code = code.replace(z,c);
        }
        for (
        i = 97; i <= 122; i++)
        {
            x = String.fromCharCode(i);
            z = new String(x).toString();
            c = this.generator(z);
            code = code.replace(z,c);
        }
        this.setState({ text: code });
    }

    decoder = function()
    {
        var a = this.state.text;
        a = a.replace("4E","Z");
        a = a.replace("7K","Y");
        a = a.replace("3Q","X");
        a = a.replace("8W","W");
        a = a.replace("2U","V");
        a = a.replace("9O","U");
        a = a.replace("1I","T");
        a = a.replace("0C","S");
        a = a.replace("8Y","R");
        a = a.replace("6S","Q");
        a = a.replace("4M","P");
        a = a.replace("2G","O");
        a = a.replace("1A","N");
        a = a.replace("9L","M");
        a = a.replace("7D","L");
        a = a.replace("5Z","K");
        a = a.replace("3P","J");
        a = a.replace("8H","I");
        a = a.replace("2B","H");
        a = a.replace("7F","G");
        a = a.replace("9Z","F");
        a = a.replace("4N","E");
        a = a.replace("3H","D");
        a = a.replace("6P","C");
        a = a.replace("1L","B");
        a = a.replace("5V","A");
        a = a.replace("7y","z");
        a = a.replace("1m","y");
        a = a.replace("8e","x");
        a = a.replace("2o","w");
        a = a.replace("6i","v");
        a = a.replace("5q","u");
        a = a.replace("3a","t");
        a = a.replace("9u","s");
        a = a.replace("7w","r");
        a = a.replace("2c","q");
        a = a.replace("5k","p");
        a = a.replace("3g","o");
        a = a.replace("6s","n");
        a = a.replace("8f","m");
        a = a.replace("9z","l");
        a = a.replace("1v","k");
        a = a.replace("4d","j");
        a = a.replace("2l","i");
        a = a.replace("7r","h");
        a = a.replace("4n","g");
        a = a.replace("6x","f");
        a = a.replace("1h","e");
        a = a.replace("9b","d");
        a = a.replace("3t","c");
        a = a.replace("8r","b");
        a = a.replace("5e","a");
        this.setState({ text: a});
    }
    
  clearAll = function () {
    this.setState({ text: "" });
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./bg.jpg')} resizeMode="center" style={styles.image}>

          < Text style={{ color: 'white', fontWeight: "bold", fontSize: 64 }}>
            Endec
          </Text>

          <Text style={styles.paragraph}>
            {this.state.text}
          </Text>

          <TextInput
            value={this.state.Name}
            keyboardType='default'
            onChangeText={(text) => this.setState({text})} 
            style={{ width: 200, height: 44, padding: 8, backgroundColor: '#7d00ff' }}
          />
          <Text></Text>
          <Button style={{}} title='Encode' onPress={this.convert.bind(this)} />
          <Button style={{}} title='Decode' onPress={this.decoder.bind(this)} />
          <Text></Text>
          <Button title='Clear' onPress={this.clearAll.bind(this)} />
        </ImageBackground>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  image: {
    flex: 1,
    height: null,
    width: null,
    alignItems: 'center',
    justifyContent: "center"
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});