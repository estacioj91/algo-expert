import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./styles.css";
//https://randomuser.me/api
export default function App() {
	const [counter, setCounter] = useState(0);
	const [data, setData] = useState([]);
	const fetchData = useRef(() => {});
	const dataRender = () => {
		console.log("in data render", data);
		return (
			<div>
				{data.map((user) => {
					return (
						<div key={user}>
							<p>{user[0]}</p>
							<img src={user[1]} alt="" />
						</div>
					);
				})}
			</div>
		);
	};
	fetchData.current = async () => {
		var res = await axios.get(`https://randomuser.me/api`).then((res) => {
			return res;
		}, console.error("error"));
		if (data === undefined) {
			setData([]);
		}
		var results = res.data.results[0];
		var userName = results.name.first + " " + results.name.last;
		var userImage = results.picture.thumbnail;
		var user = [userName, userImage];
		console.log("fetch", data);
		var newData = [...data, user];
		setData(newData);
	};
	useEffect(() => {
		console.log("in useeffect");
		fetchData.current();
	}, []);

	return (
		<div className="App">
			<h1>Hello CodeSandbox</h1>
			<h2>Start editing to see some magic happen!</h2>
			<p>{counter}</p>
			<button
				onClick={() => {
					setCounter(counter + 1);
				}}
			>
				+
			</button>
			<button
				onClick={() => {
					setCounter(0);
				}}
			>
				Reset
			</button>
			<div>
				<button
					onClick={() => {
						fetchData.current();
					}}
				>
					Fetch User
				</button>
				<div>{dataRender()}</div>
			</div>
		</div>
	);
}
