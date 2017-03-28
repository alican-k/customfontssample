import React, {Component} from 'react'
import {Text, StyleSheet, View} from 'react-native'

import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from './assets/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);


export default class App extends Component{
	render(){
		return(
			<View style = {styles.container}>
				<Text style={styles.text1}>This text looks graceful.</Text>
				
				<Icon name='emo-coffee' size={50}  style={styles.icon} />
				<Text>Coffee ;)</Text>
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
	icon: {
		marginTop: 60,
		marginBottom: 20,
		color: 'darkviolet'
	}
})
