import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Linking
} from 'react-native';



export default class TwitterLogin extends Component{
	constructor(props){
		super(props)
		this.handlePress = this.handlePress.bind(this)
	}

	componentDidMount() {
    	// Add event listener to handle OAuthLogin:// URLs
	   // Linking.addEventListener('url', this.handleOpenURL);
	    // Launched from an external URL
	    Linking.getInitialURL().then((url) => {
	      if (url) {
	        this.handleOpenURL({ url });
	      }
	    });
    };

    componentWillUnmount() {
	    // Remove event listener
	    Linking.removeEventListener('url', this.handleOpenURL);
    };

    handleOpenURL(){
    	console.log('working')
    }

    handlePress(){
		Linking.openURL('http://192.168.0.104:8000/auth/twitter')
			.catch(err => console.error('An error occurred', err));
	}

	render(){
		return(
			<View style={styles.container}>
				<TouchableOpacity
		            style={styles.button}
		            onPress={()=>{this.handlePress()}}>
		            <Text> TwitterLogin </Text>
		         </TouchableOpacity>
		    </View>
			)
	}
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#25CCF7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#1B9CFC',
    padding: 10
  }
});