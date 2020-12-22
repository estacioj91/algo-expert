import React, { Component } from "react";
import axios from "axios";
import "./styles.css";

class Test extends React.Component {
	render() {
		return <div>Class comp</div>;
	}
}

export default function App() {
	//   function apiCall() {
	//     console.log("calling data");
	//     var data = axios.get("https://randomuser.me/api/");
	//     console.log("after data");
	//     console.log(typeof data, data);
	//     return data;
	//   }

	//   async function apiResolver() {
	//     let api = await apiCall();
	//     console.log("apiResolver", api.data.results[0]["email"]);
	//   }
	async function apiResolver() {
		let api = await axios.get("https://randomuser.me/api/");
		console.log("apiResolver", api.data.results[0]["email"]);
	}

	return (
		<div className="App">
			<h1>Hello CodeSandbox</h1>
			<h2>Start editing to see some magic happen!</h2>
			<button onClick={apiResolver}>Get Api</button>
		</div>
	);
}
