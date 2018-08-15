import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './App.css';
import {Map} from 'immutable'; // Immutable state
const cx = classNames.bind(styles);


class App extends Component {

  state= {
    data: Map({isBlue: true})
  }

  render() {

  const ClickHandler = () =>{
    const { data } = this.state;
    this.setState({
      data: data.set('isBlue', data.get('isBlue')?  false : true)
    }) // Click handler. state 값에 따라 유기적으로 isBlue 변수를 설정해줌.

  }
    const { data } = this.state;

    return (
      <div className={cx('box', 
      {
        blue: data.get('isBlue')
      }
    )}
      onClick= { ClickHandler } // call back 등록
    >

      </div>
    );
  }
}

export default App;