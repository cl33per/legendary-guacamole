import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { CalendarView } from "components/Calendar/Calendar.jsx"
import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { Tasks } from "components/Tasks/Tasks.jsx";
import API from "../utils/API";
import {getAccountBalance} from "../actions/accountActions"
import { connect } from "react-redux";
import PropTypes from "prop-types";
import _ from "lodash"
class Dashboard extends Component {
  constructor(){
    super()
      this.state={
        bills: "",
        balance:"",
        tasks: ""
    }
  }
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  };
  componentDidMount(){
    // const { accounts } = this.props;
    // this.props.getAccountBalance(accounts)
    this.updateUpcomingBills()
    this.updateCurrentEvents()
  };

  // updateBankBalance = () => {
  //   API.getBalance().then(res => {
  //     console.log("Bills:" + res)
  //   }).catch(err => console.log(err))
  // };

  updateUpcomingBills = () => {
    API.getBills().then(res => {
        let bills = _.size(res.data)
        this.setState({bills:bills})
    }).catch(err => console.log(err))
  };

  updateCurrentEvents = () => {
    API.getTodos().then(res =>{
      let tasks = _.size(res.data)
      this.setState({ tasks: tasks })
    }).catch(err => console.log(err))
  };

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col lg={4} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-wallet text-success" />}
                statsText="Current Bank Balance"
                statsValue="$1,345"x    
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText="As of" //TODO: Need to integrate with pliad API to grab last known date. 
              />
            </Col>
            <Col lg={4} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-date text-danger" />}
                statsText="Upcoming Bills"
                statsValue={this.state.bills} // TODO: Need to integreate with bills to-do list. 
                statsIcon={<i className="fa fa-clock-o" />}
                statsIconText="In the last hour"  // TODO: Change to next event. 
              />
            </Col>
            <Col lg={4} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-check text-info" />}
                statsText="Total To-Do Items"
                statsValue={this.state.tasks}
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now" // TODO: Need to inegrate with To-do list.
              />
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <CalendarView/>
            </Col>

            <Col md={4}>
            {/* TODO: Integrate to database */}
              <Card
                title="Tasks"
                // category="Backend development"
                stats="Updated 3 minutes ago"
                statsIcon="fa fa-history"
                content={
                  <div className="table-full-width">
                    <table className="table">
                      <Tasks />
                    </table>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
};

Dashboard.propTypes = {
  getAccountBalance: PropTypes.func.isRequired, 
  plaid: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  plaid: state.plaid
}); 

export default connect( mapStateToProps,
  {getAccountBalance}
  )(Dashboard)
