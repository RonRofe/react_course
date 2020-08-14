import React from 'react';

const withClass = (WrappedComponent, className) => {
    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props}></WrappedComponent>
            </div>
        );
    };
};

export default withClass;