import React from 'react'
import Chart from './Chart';
import Graph from './Graph';
import Info from './Info';
import View from './View';

function Content({ isContentClick }) {
    switch (isContentClick) {
        case 'info':
            return <Info />
        case 'chart':
            return <Chart />
        case 'graph':
            return <Graph />
        case 'view':
            return <View />
        default:
            return <Info />;

    }
}

export default Content