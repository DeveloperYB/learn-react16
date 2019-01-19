import React, { Component, Fragment } from 'react';
import { createPortal } from 'react-dom';
import ControlTest from './ControlTest';

// const BoundaryHoc = ProtectedComponent => class Boundary extends Component {
//   state = {
//     hasError:false
//   };
//   componentDidCatch = () => {
//     this.setState({hasError:true})
//   };
//   render(){
//     const {hasError} = this.state;
//     if(hasError){
//       return "에러가 납니다...";
//     }else{
//       return <ProtectedComponent/>;
//     }
//   }
// };

class Portals extends Component {
    render() {
        return createPortal(<TestMsg />, document.getElementById('touchme'));
    }
}
const TestMsg = () => 'span#touchme, react root 밖으로 Portal기능으로 들어감.';

class ReturnType extends Component {
    render() {
        let txt = '<Fragment>';
        return (
            <>
                <div>{txt} 는 return string 도 가능.</div>
                <div>{txt} 미치게 편하다... 멋지네</div>
            </>
        );
    }
}
class FragmentTest extends Component {
    render() {
        return (
            <Fragment>
                <div>리엑트16이 지원하는 플레그먼트</div>
                <div>
                    얘는 그냥 스트링도 지원, 그리고 플레그먼트 <> </> 이렇게도 지원가능.
                </div>
                <Portals />
            </Fragment>
        );
    }
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <ReturnType />
                <FragmentTest />
                <ControlTest />
            </div>
        );
    }
}

export default App;
