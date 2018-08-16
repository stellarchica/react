import React from "react";
import "./click.css";
// import pic from "../images/andy.jpg"
// // import pic from "../images/angela.jpg"
// // import pic from "../images/dwight.jpg"
// // import pic from "../images/erin.jpg"
// // import pic from "../images/jim.jpg"
// // import pic from "../images/kelly.jpg"
// // import pic from "../images/kevin.jpg"
// // import pic from "../images/meredith.jpg"
// // import pic from "../images/michael.jpg"
// // import pic from "../images/pam.jpg"
// // import pic from "../images/phyllis.jpg"
// // import pic from "../images/toby.jpg"

function handleClick(props) {
	props.reArrangeCards();
	props.clickedCharacter(props.id);
}

function ClickCard(props) {
	console.log("click card props", props);
	return (
		<div className="card img-container" onClick={() => handleClick(props)}>
			<img alt={props.name} src={props.image} />
		</div>
	)
}

export default ClickCard