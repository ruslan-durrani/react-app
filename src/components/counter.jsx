import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
class Counter extends Component {

    render() { 
        const {onIncrement,onDecrement,onDelete,onEmpty,counter}=this.props;
        return (

            <div className='row'>
                
                <div className='col'><button  className={this.getBadgeClasses()}>{this.showCount()}</button></div>
                <div className='col'><button onClick= {()=>onIncrement(counter)} className = "btn btn-secondary m-2 btn-lg">+</button></div>
                <div className='col'><button onClick={()=>onDecrement(counter)} className = {this.props.counter.value <=0 ? "btn btn-secondary m-2 btn-lg disabled":"btn btn-secondary m-2 btn-lg"} >-</button></div>
                <div className='col'><button onClick={()=>onDelete(counter)} className = "btn btn-danger m-2 btn-lg  " >X</button></div>
                <div className='col'><button onClick={()=>onEmpty(counter)} className = "btn btn-primary m-2 btn-lg">Empty</button></div>
            </div>
        );
    }
    
    getBadgeClasses() {
        let classColor = "btn btn-lg m-2 btn-";
        classColor += (this.props.counter.value <= 0) ? "warning" : "primary";
        return classColor;
    }

    showCount(){
        
        return this.props.counter.value<=0?'Zero':this.props.counter.value;
    }
}
export default Counter;