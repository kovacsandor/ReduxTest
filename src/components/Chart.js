import { Sparklines, SparklinesLine, SparklinesReferenceLine, SparklinesSpots } from 'react-sparklines'

import React from 'react'

export default class Chart extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<td>
				<Sparklines height={120} width={180} data={this.props.data}>
					<SparklinesLine color={this.props.color} />
					<SparklinesSpots style={{ fill: this.props.color}} />
					<SparklinesReferenceLine type={`avg`} />
				</Sparklines>
				<div>Average: {_.round(_.sum(this.props.data) / this.props.data.length)} {this.props.index == 0 ? `K` : this.props.index == 1 ? `hPa` : `%`}</div>
			</td>
		)
	}
}