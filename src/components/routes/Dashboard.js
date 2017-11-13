import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const myHeaders = new Headers();

const myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'no-cache'};

class DashboardView extends Component {
    state = {
        sources: []
    };
      
    // constructor(props) {
    //   super(props);
    // }
    
    componentDidMount() {
        fetch(
            'http://localhost:9000/source?limit=10', myInit
        ).then(res => {
            if (!res.ok) {
            throw Error;
            }
            return res.json();
        }).then(data => {
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