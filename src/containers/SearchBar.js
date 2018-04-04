import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createActionFetchWeather } from '../actions/index'

class SearchBar extends React.Component {

	constructor(props) {
        console.log(`SearchBar`)
		super(props);
		this.state = {
			term: ``
		}
	}
	// Try without state, only props

	render() {
		console.log(`SearchBar`, this.props.weather)
		
		return (
			<form
				className={`input-group`}
				onSubmit={event => this.onSubmit(event)}>
				<input
					className={`form-control`}
					onChange={event => this.setState({ term: event.target.value })}
					placeholder={`Get forecast`}
					value={this.state.term} />
				<span className={`input-group-btn`}>
					<button
						className={`btn btn-secondary`}
						type={`submit`}>
						Submit
                </button>
				</span>
			</form>
		)
	}

	onSubmit(event) {
		event.preventDefault()
		this.props.createActionFetchWeather(this.state.term)
		this.setState({ term: `` })
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ createActionFetchWeather }, (dispatch))
}

function mapStateToProps({ weather }) {
	return { weather }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)