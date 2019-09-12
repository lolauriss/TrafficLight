import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class TrafficLight extends React.Component {
	constructor() {
		super();
		this.state = {
			light: 0
		};
		this.lightRed = this.lightRed.bind(this);
		this.lightYellow = this.lightYellow.bind(this);
		this.lightGreen = this.lightGreen.bind(this);
	}

	lightRed(e) {
		if (this.state.light === 1) {
			this.setState({ light: 0 });
		} else {
			this.setState({ light: 1 });
		}
	}
	lightYellow(e) {
		if (this.state.light === 2) {
			this.setState({ light: 0 });
		} else {
			this.setState({ light: 2 });
		}
	}
	lightGreen(e) {
		if (this.state.light === 3) {
			this.setState({ light: 0 });
		} else {
			this.setState({ light: 3 });
		}
	}
	render() {
		let light = this.state.light;
		let red = <div />;
		let yellow = <div />;
		let green = <div />;
		if (light === 1) {
			red = (
				<div
					onClick={this.lightRed}
					className="row justify-content-md-center">
					<div
						className="col-sm-1 bg-dark p-0"
						style={{ height: "100px", width: "100px" }}>
						<div
							className=" bg-danger rounded-circle"
							style={{
								height: "50px",
								width: "44.48px",
								margin: "25px"
							}}
						/>
					</div>
				</div>
			);
		} else {
			red = (
				<div
					onClick={this.lightRed}
					className="row justify-content-md-center">
					<div
						className="col-sm-1 bg-dark p-0"
						style={{ height: "100px", width: "100px" }}>
						<div
							className="bg-secondary rounded-circle"
							style={{
								height: "50px",
								width: "44.48px",
								margin: "25px"
							}}
						/>
					</div>
				</div>
			);
		}

		if (light === 2) {
			yellow = (
				<div
					onClick={this.lightYellow}
					className="row justify-content-md-center">
					<div
						className="col-sm-1 bg-dark p-0"
						style={{ height: 100, width: 100 }}>
						<div
							className="bg-warning rounded-circle"
							style={{
								height: "50px",
								width: "44.48px",
								margin: "25px"
							}}
						/>
					</div>
				</div>
			);
		} else {
			yellow = (
				<div
					onClick={this.lightYellow}
					className="row justify-content-md-center">
					<div
						className="col-sm-1 bg-dark p-0"
						style={{ height: 100, width: 100 }}>
						<div
							className="bg-secondary rounded-circle"
							style={{
								height: "50px",
								width: "44.48px",
								margin: "25px"
							}}
						/>
					</div>
				</div>
			);
		}
		if (light === 3) {
			green = (
				<div
					onClick={this.lightGreen}
					className="row justify-content-md-center">
					<div
						className="col-sm-1 bg-dark p-0"
						style={{ height: 100, width: 100 }}>
						<div
							className="bg-success rounded-circle"
							style={{
								height: "50px",
								width: "44.48px",
								margin: "25px"
							}}
						/>
					</div>
				</div>
			);
		} else {
			green = (
				<div
					onClick={this.lightGreen}
					className="row justify-content-md-center">
					<div
						className="col-sm-1 bg-dark p-0"
						style={{ height: 100, width: 100 }}>
						<div
							className="bg-secondary rounded-circle"
							style={{
								height: "50px",
								width: "44.48px",
								margin: "25px"
							}}
						/>
					</div>
				</div>
			);
		}

		return (
			<div className="container">
				{red}
				{yellow}
				{green}
			</div>
		);
	}
}
