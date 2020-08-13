import React from 'react';
import styled from 'styled-components';

import './Person.css';

const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #EEE;
    box-shadow: 0 2px 3px #CCC;
    padding: 16px;
    align-items: center;

    @media (min-width: 500px) {
        width: 450px;
    }
`;

const person = (props) => {
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px',
    //     }
    // };

    return (
        // <div className="Person" style={style}>
        <StyledDiv>
            <p onClick={props.click}>Im a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" value={props.name} onChange={props.changed}></input>
        </StyledDiv>
    );
};

export default person;