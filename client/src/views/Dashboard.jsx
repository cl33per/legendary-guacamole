import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { CalendarView } from "components/Calendar/Calendar.jsx"
import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { Tasks } from "components/Tasks/Tasks.jsx";

export default  class Dashboard extends Component {
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
                statsValue="23" // TODO: Need to integreate with bills to-do list. 
                statsIcon={<i className="fa fa-clock-o" />}
                statsIconText="In the last hour"  // TODO: Change to next event. 
              />
            </Col>
            <Col lg={4} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-twitter text-info" />}
                statsText="Add To-Do Item"
                statsValue="+45"
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
                category="Backend development"
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
}
