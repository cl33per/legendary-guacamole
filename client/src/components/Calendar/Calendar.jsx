import React, { Component } from "react";
import {
    Calendar,
    momentLocalizer,
} from 'react-big-calendar';
import moment from "moment";
import API from "../../utils/API";
import "react-big-calendar/lib/css/react-big-calendar.css";
import _ from "lodash"
// import events from "./events"

const localizer = momentLocalizer(moment)
export class CalendarView extends Component {
    constructor(...args) {
        super(...args)
        // const eventsData = this.loadEventsData()
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
            this.setState({ events: res.data, title: "", start: "", end: "", allday: "" }) 
            console.log("Added Event:")})
            .catch(err => console.log(err));
    };
  



    handleSelect = ({ start, end }) => {
        const title = window.prompt('New Event name')
        if (title) {
            API.saveEvent({
                title: this.state.title,
                start: this.state.start,
                end: this.state.end,
                allday: this.state.allday
            })
            .then(res => this.loadEventsData())
            .catch(err => console.log(err));
        }
    };

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

