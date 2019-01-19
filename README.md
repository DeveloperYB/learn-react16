# 리엑트16 연습하기

## 1. `<Fragment> 태그?`

플레그 먼트는 랜더를 위해 필요없는 돔으로 감싸는 행위를 할 필요가 없게 해준다.

잘못된 오류 예시)

    render() {
        return (
            <div>render1</div>
            <div>render2</div>
        );
    }

플레그먼트 사용 예시)

    render() {
        return (
            <>
                <div>return string 도 가능.</div>
                <div>미치게 편하다... 멋지네</div>
            </>
        );
    }

이제 필요없는 태그를 넣을 필요가 없어짐.
`<Fragment>` `</Fragment>` 또는 <> </> 로 감싸서 필요없는 엘리먼트 없이 랜더가 가능

## 2. Portals

Portal기능은 react-dom 에서 import가 가능하며,
react를 랜더하는 root 엘리먼트 밖의 html 요소를 건들수 있게해준다.

    import { createPortal } from 'react-dom';

## 3. error boundaries : componentDidCatch

리엑트 라이프싸이클 중
componentDidCatch 라는 자식 컴포넌트의 에러를 잡는 싸이클이 생김.

    componentDidCatch = (error,info) => {}


    const BoundaryHoc = ProtectedComponent => class Boundary extends Component {
        state = {
            hasError:false
        };
        componentDidCatch = () => {
            this.setState({hasError:true})
        };
        render(){
            const {hasError} = this.state;
            if(hasError){
            return "에러가 납니다...";
            }else{
            return <ProtectedComponent/>;
            }
        }
    };

이용 방법으로는 에러가 발생시 해당 부분을 스테이트 변경으로
해당 오류를 뿜어대는 자식 컴포넌트를 갈아버리게 할 수 있다.

## 4. set state control!?

리엑트 16에서는 return null로 set state 조작을 멈추게 할 수 있다.

예시)

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
