import { connect } from 'react-redux'
import React from 'react'
import _ from 'lodash'
import { Sparklines, SparklinesLine, SparklinesSpots, SparklinesReferenceLine } from 'react-sparklines'

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
                        let temporary = [[], [], []]
                        info.list.map(item => {
                            temporary[0].push(item.main.temp)
                            temporary[1].push(item.main.pressure)
                            temporary[2].push(item.main.humidity)
                        })
                        return (
                            <tr key={info.city.id}>
                                <td>{info.city.name}</td>
                                {temporary.map((t, i) => (
                                    <td key={`${info.city.id}:${i}`}>
                                        <Sparklines height={120} width={180} data={t}>
                                            <SparklinesLine color="#56b45d" />
                                            <SparklinesSpots style={{ fill: "#56b45d" }} />
                                            <SparklinesReferenceLine type={`avg`} />
                                        </Sparklines>
                                        <div>Average: {_.round(_.sum(t) / t.length)} {i == 0 ? `K` : i == 1 ? `hPa` : `%`}</div>
                                    </td>
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