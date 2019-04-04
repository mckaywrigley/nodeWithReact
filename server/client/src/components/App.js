import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './SurveyNew';

class App extends React.Component {
    componentDidMount(){
      this.props.fetchUser();
    }
    

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <Header />
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/surveys" component={Dashboard} />
                    <Route path="/surveys/new" component={SurveyNew} />
                    <Route path="/header" component={Header} />
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(
    null,
    actions 
)(App);