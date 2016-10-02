const randomData = (state = null, action) => {

    switch (action.type) {
        case 'FETCH_RANDOM_DATA': {

            let data = [], totalPoints = 1000;
            data = state ? state[0] : getRandomData();

            let realTimeData = getRandomData();

            function getRandomData() {

                if (data.length > 0)
                    data = data.slice(1);

                while (data.length < totalPoints) {
                    let prev = data.length > 0 ? data[data.length - 1][1] : 50,
                        y = prev + Math.random() * 10 - 5;
                    if (y < 0) {
                        y = 0;
                    } else if (y > 100) {
                        y = 100;
                    }

                    data.push([data.length, y]);
                }
                // Zip the generated y values with the x values
                let res = [];

                for (let i = 0; i < data.length; ++i) {

                    res.push([i, Math.floor(data[i][1])]);
                }
                return [res];
            }

            return realTimeData;
        }
        default:
            return state
    }
};

export default randomData
