
import React from 'react';

import DashboardRun from './Dashboard.run';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    componentDidMount() {
        DashboardRun();
        this.props.onTick();
    }

    createCharacter(e, i){

        return <span style={this.generateStyle(i)}>{e}</span>
    }

    generateStyle(i){

        i = 1000 - i;
        return {
            color: `hsla(${i}, ${i / 20}%, ${i / 10}%, 1)`
        }
    }

    generateTweak(){
        return {
            marginTop: '20px'
        }
    }

    render() {

        return (
            <div>
                <section className="container-fixed">
                    { this.props.data.map((e, i) => this.createCharacter(e, i))}
                </section>
                <section className="container-fixed" style={this.generateTweak()}>
                    { this.props.data.map((e, i) => this.createCharacter(e, i))}
                </section>
            </div>


        );
    }


}

export default Dashboard;