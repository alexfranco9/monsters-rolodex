import { Component } from "react";

import "./card.styles.css";

class Card extends Component {
	render() {
		const { id, name, username, email } = this.props.monster;

		return (
			<div className="card-container" key={id}>
				<img
					src={`https://robohash.org/${id}?set=set2&size=200x200`}
					alt={`monster ${name}`}
				/>
				<h2>{name}</h2>
				<h4>{username}</h4>
				<p>{email}</p>
			</div>
		);
	}
}

export default Card;
