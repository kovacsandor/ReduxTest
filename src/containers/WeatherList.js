import Chart from '../components/Chart'
import Map from '../components/Map'
import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'

class WeatherList extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         prop: props.prop
    //     }
    // }

    render() {
        // console.log(`SearchBar`, this.props.weather)
        // info.list.map(item => item.main.temp)
        return (
            <table className={`table table-hover`}>
                <thead>
                    <tr>
                        <th>
                            City
                    	</th>
                        <th>
                            Temprature
                    	</th>
                        <th>
                            Pressure
                    	</th>
                        <th>
                            Humidity
                    	</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(info => {
                        const { lan, lon } = info.city.coord
                        let temporary = [[], [], []]
                        info.list.map(item => {
                            temporary[0].push(item.main.temp)
                            temporary[1].push(item.main.pressure)
                            temporary[2].push(item.main.humidity)
                        })
                        return (
                            <tr key={info.city.id}>
                                <Map latituge={lat} longitude={lon} />
                                {temporary.map((t, i) => (
                                    // <td key={`${info.city.id}:${i}`}>test</td>
                                    <Chart key={`${info.city.id}:${i}`} data={t} color={`orange`} index={i} />
                                ))}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({ weather }) {
    // const weather = state.weather
    return { weather }
}

export default connect(mapStateToProps)(WeatherList)