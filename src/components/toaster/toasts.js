import React, { useState } from "react";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import "./toast.css";

const ExampleToast = ({ children }) => {
	const [show, toggleShow] = useState(true);

	return (
		<>
			<Toast show={show} onClose={() => toggleShow(false)}>
				<Toast.Header>
					<strong className='ml-auto'>React-Bootstrap</strong>
				</Toast.Header>
				<Toast.Body>{children}</Toast.Body>
			</Toast>
		</>
	);
};

const ReuseToaster = () => (
	<Container fluid className='p-3 cont'>
		
			<h1 className='header'>Welcome To Your Loan App</h1>
			<ExampleToast>
				We now have Toasts
				<span role='img' aria-label='tada'>
					🎉
				</span>
			</ExampleToast>
		
	</Container>
);

export default ReuseToaster;
