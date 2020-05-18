import React from 'react';
import ReactDOM from 'react-dom';
import {Card, Table} from 'antd';
import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';

class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <Card title="表格信息"/>
          <Table />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Container />,
  document.getElementById('root')
);
serviceWorker.unregister();