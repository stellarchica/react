import React from "react";
import "./Modal.css";

function Modal() {
	return (
		<div className="instructionsModal">
			<div className="modal-content">
				<h4 className="center">Instructions</h4>
				<ol>
					<li>Click on any image to start the game.</li>
					<li>Every time you click an image, the images get rearranged.</li>
					<li>If you pick the same image twice – you lose!</li>
					<li>Click all 12 images without repeating – you win!</li>
				</ol>
			</div>
			<br />
			<div className="modal-footer white-text center">
				<a className="waves-effect waves-light btn" onClick={() => {
					document.getElementsByClassName("instructionsModal")[0].classList.add("hide");
				}}>Let's play!</a>
			</div>	
		</div>
	)
}
export default Modal;