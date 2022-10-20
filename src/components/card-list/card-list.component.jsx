import { Component } from "react";

import "./card-list.styles.css";

class CardList extends Component {
	render() {
		const { monsters } = this.props;

		return (
			<div className="card-list">
				{monsters.map((monster) => {
					const { name, username, email, id } = monster;
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
				})}
			</div>
		);
	}
}

export default CardList;