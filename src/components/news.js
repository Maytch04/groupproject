import React from 'react';
import {getNews} from '../api/jsonData'
import store from '../api/store/myprojStore'


export default React.createClass({

getInitialState(){
		return{
			news:[]
		}
	},

componentWillMount(){
		this.unsubscribe = store.subscribe(()=>{
			const appState = store.getState()
			console.log(appState, "appState")
			this.setState({
				news: appState.news
			})
		})
		getNews()

		
	},

	componentWillunMount(){
		this.unsubscribe()
	},



  render() {
  	console.log("news", this.state.news)
    return (
    	<div></div>)
  }
})
