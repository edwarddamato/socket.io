import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Header />
        <section className="app-content">{this.props.children}</section>
        <Footer />
      </div>
    );
  }
}