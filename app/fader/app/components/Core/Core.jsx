import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './Core.scss';
import './LayoutVariants.scss';

class Core extends React.Component {
    render() {

        const animationName = 'rag-fadeIn'

        return (
            <div className="layout-container">

                <ReactCSSTransitionGroup
                  component="main"
                  className="main-container"
                  transitionName={animationName}
                  transitionEnterTimeout={500}
                  transitionLeaveTimeout={500}
                >
                    {/* Page content */}
                    {React.cloneElement(this.props.children, {
                        key: Math.random()
                    })}

                </ReactCSSTransitionGroup>

            </div>
        );
    }
}

export default Core;
