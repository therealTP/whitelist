import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { get } from './../services/fetch';

class DashboardView extends Component {
    state = {
        sources: []
    };
      
    // constructor(props) {
    //   super(props);
    // }
    
    componentDidMount() {
        get('/source?limit=10')
        .then(data => {
            this.setState({sources: data.response.results});
        }).catch(err => {
            console.log("ERR", err);
        });
    }
  
    render() {
        return (
            <div className="Body">
                <h3>Top News Sources:</h3>
                <ul>
                    {this.state.sources.map(source =>
                        <li key={source.id}>
                            <Link to={`/source/${source.id}`}>{source.name}</Link>
                        </li>)}
                </ul>
            </div>
        );
    }
}

export default DashboardView;