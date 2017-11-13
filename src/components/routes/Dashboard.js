import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './../Sidebar/Sidebar';


const myHeaders = new Headers();

const myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'no-cache'};

class DashboardView extends Component {
    state = {
        tests: ['test1', 'test2', 'test3', 'test4'],
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
          <Sidebar />
            <ul>
                {this.state.sources.map(source =>
                    <li key={source.id}>
                        {source.name} @ 
                        <a href={source.websiteUrl} target="_blank">
                            {source.websiteUrl}
                        </a>
                    </li>)}
            </ul>
        </div>

    );
  }
}

export default DashboardView;