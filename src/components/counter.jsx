import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
class Counter extends Component {
    
    render() { 

        return (

            <div>
                
                <button  className={this.getBadgeClasses()}>{this.showCount()}</button>
                <button onClick= {()=>this.props.onIncrement(this.props.counter)} className = "btn btn-secondary m-2 btn-lg">+</button>
                <button onClick={()=>this.props.onDecrement(this.props.counter)} className = "btn btn-secondary m-2 btn-lg">-</button>
                <button onClick={()=>this.props.onDelete(this.props.counter)} className = "btn btn-danger m-2 btn-lg">Delete</button>
                <button onClick={()=>this.props.onEmpty(this.props.counter)} className = "btn btn-primary m-2 btn-lg">Empty</button>
            </div>
        );
    }
    
    getBadgeClasses() {
        let classColor = "btn btn-lg m-2 btn-";
        classColor += (this.props.counter.value === 0) ? "warning" : "primary";
        return classColor;
    }

    showCount(){
        
        return this.props.counter.value===0?'Zero':this.props.counter.value;
    }
}
export default Counter;