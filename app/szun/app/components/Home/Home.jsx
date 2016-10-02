import AlgoDashbord from '../../containers/AlgoDashboard';
import React from 'react';
import Nouislider from 'react-nouislider';

const Home = ({ data, onRangeChange }) => (
    <div>
        <AlgoDashbord/>
        <AlgoDashbord/>
        <div className="">
            <Nouislider range={{min: 0, max: 100}}
                        connect={true}
                        start={[0, 30]}
                        onChange={onRangeChange}
            />
        </div>
    </div>
);

export default Home;