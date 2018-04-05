import React from 'react'

export default class Map extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<td ref={`map`} />
		)
	}

	componentDidMount() {
		new google.maps.Map(this.refs.map, {
			zoom: 12,
			center: {
				lat: this.props.latitude,
				lng: this.props.longitude,
			},
		})
	}
}