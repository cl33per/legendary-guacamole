import React, { Component } from "react";
import {
    Calendar,
    momentLocalizer,
} from 'react-big-calendar';
import moment from "moment";
import API from "../../utils/API";
import "react-big-calendar/lib/css/react-big-calendar.css";
import _ from "lodash"

const localizer = momentLocalizer(moment)
export class CalendarView extends Component {
    constructor(...args) {
        super(...args)
        this.state = {
            events: _.cloneDeep([]),
            dayLayoutAlgorithm: 'no-overlap',
        }
    };

    componentDidMount(){
        this.loadEventsData()
    };

    loadEventsData = () => {
        API.getEvents().then(res => {
            let events = _.cloneDeep(res.data)
            _.forEach(events, function (value) {
            // _.set(value, 'start',moment().format("YYYY-MM-DD"))
            // _.set(value, 'end',moment().format("YYYY-MM-DD"))
            });
            // console.log(_.get(value,))
            // let testing = res.data[3].start
            // console.log(moment(testing).format("YYYY-MM-DD"));
            this.setState({ events: events}) 
        }).catch(err => console.log(err));
    };

    handleSelect = ({ start, end }) => {
        const title = window.prompt('New Event name')
        if (title) 
            this.setState({
                events: [
                    ...this.state.events,
                    {
                        start,
                        end,
                        title,
                    },
                ],
            })
            API.saveEvent(
                {
                title:title,
                start:start,
                end: end,
            }).then(res => this.loadEventsData())
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="App">
                <Calendar
                    selectable
                    localizer={localizer}
                    defaultDate={new Date()}
                    defaultView="week"
                    events={this.state.events}
                    onSelectEvent={event => alert(event.title)}
                    style={{ height: "100vh" }}
                    onSelectSlot={this.handleSelect}
                    dayLayoutAlgorithm={this.state.dayLayoutAlgorithm}
                />
            </div>
        );
    }
}

export default CalendarView;

