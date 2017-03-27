import React, {Component} from 'react'
import {Text, StyleSheet, View} from 'react-native'

export default class App extends Component{
	render(){
		return(
			<View style = {styles.container}>
				<Text style={styles.text1}>This text looks graceful.</Text>
				<Text style={styles.text2}>
					And this is some funny text writen with Zap Raygun font family.
				</Text>
				<Text style={styles.text2}>
					(Always uppercase)
				</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		//justifyContent: 'center',
		marginTop: 30,
		padding: 10,
		paddingLeft: 20,
		alignItems: 'center',
	},
	text1: {
		fontFamily: 'Sofia-Regular',
		fontSize: 24,
		marginBottom: 30,
		textAlign: 'center',
	},
	text2: {
		fontFamily: 'Zap-Raygun-V20-Regular',
		textAlign: 'center',
	}
})
