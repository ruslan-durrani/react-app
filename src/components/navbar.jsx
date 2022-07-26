import React, { Component } from 'react';
class Navbar extends Component {
    state = {  } 
    render() { 
        
        return (
            <React.Fragment>
                <nav class="container navbar navbar-light bg-light">
                    <a class="navbar-brand" href="#">Navbar
                    <button className='btn btn-primary m-3'> {this.props.totalCount({})}</button></a>
                </nav>
            </React.Fragment>
        );
    }
}
 
export default Navbar;