import React, { Component } from 'react';
import PrismCode from 'react-prism';
import Prism from 'prismjs';
import { codeTicTacToe } from '../../data/CodeData';

class Code extends Component {
  componentDidMount () {
    Prism.highlightAll();
  }

  render () {
    return (
      <div id="code" className="section">
        <h1 className="section-title">Code Samples</h1>
        <h3 className="text-center">{codeTicTacToe.title}</h3>
        <PrismCode component="pre" className="language-javascript break">
          {codeTicTacToe.code}
        </PrismCode>
      </div>
    );
  }
}

export default Code;
