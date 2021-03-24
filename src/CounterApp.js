import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value = 0}) => {

    // Hooks
    const [counter, setCounter] = useState(value);
    

    const hangleAdd = () => {
     setCounter(counter + 1);
    //  setCounter((c) => c + 1);
    }
    const handledSubstrac = () => {
        setCounter(counter - 1);
    }

    const handleReset  = () => {
        // setCounter((c) => c = 0);
        setCounter(value);
    }

    return(
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>

            <button onClick={ hangleAdd }>+ 1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handledSubstrac}>- 1</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;