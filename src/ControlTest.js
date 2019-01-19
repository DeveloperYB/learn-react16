// eslint-disable-next-line
import React, { Component } from 'react';

const MAX_PIZZAS = 20;

const eatPizza = (state, props) => {
    console.log(state, props);
    const { pizzas } = state;
    if (pizzas < MAX_PIZZAS) {
        return {
            pizzas: pizzas + 1
        };
    } else {
        return null;
    }
};

class ControlTest extends Component {
    state = {
        pizzas: 0
    };
    _handelClick = () => {
        this.setState(eatPizza);
    };
    render() {
        const { pizzas } = this.state;
        return (
            <button onClick={this._handelClick}>{`나는 ${pizzas} 개의 ${
                pizzas === 1 ? '피자만 먹었다.' : '많은 피자를 먹었다.'
            }`}</button>
        );
    }
}

export default ControlTest;
