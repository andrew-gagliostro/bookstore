import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero">
            <h2>Drew's Reads</h2>
            <h3>I dont really like reading <br />but I know other people do</h3>
            <Link className="btn" to="/books">View All Books</Link>
        </section>
    )
}

export default Hero
