import React from 'react';

import DashboardRun from './Dashboard.run';
import './Dashboard.scss';

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

    pickColour(){

        const nightLights2 = ['#fffea1',
        '#ffff5d',
        '#eac071',
        '#df9a53',
        '#df6f21'];

        const woosh = ['#a2c7eb',
        '#7e9bb8',
        '#5b7085',
        '#495a6b',
        '#242e36'];

        const fluffyBaby = ['#d3ecff',
        '#d7ffd3',
        '#faffd3',
        '#ffe5d3',
        '#ffd3d3'];


        return fluffyBaby[Math.floor(Math.random() * 5)];

        //return '#'+Math.floor(Math.random()*16777215).toString(16);



    }

    generateStyle(i){

        i = 500 - i;
        const seed = Math.random() * 100;
/*        return {
            position: 'absolute',
            fontSize: '350px',
            top: i + 'px',
            left: i + seed * 2 + 'px',
            padding: i + seed / 1 + 'px',
            //margin: i + seed + 'px',
            color: this.pickColour()
        }*/

       return {
            position: 'absolute',
            fontSize: '75px',
            top: i + 'px',
            left: i + seed * 20 + 'px',
            padding: i + seed / 1 + 'px',
            margin: i + seed + 'px',
            color: this.pickColour()
        }
    }

    render() {

        return (
            <div>
                <section className="container-fixed">
                    { this.props.data.map((e, i) => this.createCharacter(e, i))}
                    { this.props.data.map((e, i) => this.createCharacter(e, i))}
                </section>

            </div>


        );
    }


}

export default Dashboard;