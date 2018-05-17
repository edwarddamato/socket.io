import React from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router';

export default class Header extends React.Component {
    render() {
        return (
            <section className="header">
                <Navigation />
                <header className="header_main">
                    <Link className="header_link" to="/">
                        <h1 className="header_title">kickit!</h1>
                    </Link>
                </header>
            </section>
        );
    }
}