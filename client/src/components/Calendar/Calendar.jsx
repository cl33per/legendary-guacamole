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
        API.getBills().then(res => {
            let bills = _.cloneDeep(res.data)
            _.forEach(bills,function(value){
                let startDate = _.get(value,'dueDate');
                let endDate = _.get(value, 'dueDate');
                _.set(value, 'dueDate', new Date(startDate))
                _.set(value, 'dueDate', new Date(endDate))
                console.log(bills)
            });
            this.setState({ events: bills }) 
        }).catch(err => console.log(err));
    
        API.getEvents().then(res => {
            let events = _.cloneDeep(res.data)
            _.forEach(events, function (value) { 
                let startDate =_.get(value,'start');
                let endDate = _.get(value, 'end');
             _.set(value, 'start', new Date(startDate))
            _.set(value, 'end', new Date(endDate))
            });
            this.setState({ events: events}) 
        }).catch(err => console.log(err));
    };
    
    onSelectEvent = event => {
        const r = window.confirm("Would you like to remove this event?")
        if (r === true) {
            API.deleteEvent(event._id)
                .then(res => this.loadEventsData())
                .catch(err => console.log(err));
        }else{
            alert(event.title)
        }
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
            API.saveEvent({
                title:title,
                start:start,
                end: end,
            })
            .then(res => this.loadEventsData())
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="App">
                <Calendar
                    selectable
                    localizer={localizer}
                    defaultDate={new Date()}
                    defaultView="month" 
                    events={this.state.events}
                    onSelectEvent={event => this.onSelectEvent(event)}
                    style={{ height: "100vh" }}
                    onSelectSlot={this.handleSelect}
                    dayLayoutAlgorithm={this.state.dayLayoutAlgorithm}
                />
            </div>
        );
    }
};

export default CalendarView;

