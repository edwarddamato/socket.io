import React from 'react';

export default class CustomDiv extends React.Component {
    render() {
        return (
            <div className={this.props.className} style={{
                width: this.props.width, 
                height: this.props.height}}></div>
        );
    }
}