import React, { Component } from "react";
import {
    Calendar,
    momentLocalizer,
} from 'react-big-calendar';
import moment from "moment";
import API from "../../utils/API";
import "react-big-calendar/lib/css/react-big-calendar.css";
import _ from "lodash"
// import events from "../../assets/events"
import events from "./events"

const localizer = momentLocalizer(moment)
export class CalendarView extends Component {
    constructor(...args) {
        super(...args)
        this.state = {
            events: _.cloneDeep(events),
            dayLayoutAlgorithm: 'no-overlap',
        }
    };

    componentDidMount(){
        this.loadEventsData()
    };

    loadEventsData = () => {
        API.getEvents().then(res => {
            var events = res.data
            console.log(events)})
            .catch(err => console.log(err));
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

