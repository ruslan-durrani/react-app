import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './counter';
class Counters extends Component {
    // state = {
    //     counters:[
    //         {id:1,value:0},
    //         {id:2,value:0},
    //         {id:3,value:0},
    //         {id:4,value:0},
    //         {id:5,value:0},
    //     ]

    // }
    // handleDelete = (e) =>{
        
    //     const counters = this.state.counters.filter(c=> c.id!==e);
    //     this.setState({
    //         counters
    //     });
    // }
    // //----------
    // emptyCount = (e) => {
    //     let counters = [...this.state.counters];
    //     let i = counters.indexOf(e);
    //     e.value = 0;
    //     counters[i] = e;
    //     this.setState({
    //         counters
    //     });
    // }
    // increment =(e)=>{ 
    //     let counters = [...this.state.counters];
    //     let i = counters.indexOf(e);
    //     e.value++;
    //     counters[i]={...e};
    //     this.setState({
    //         counters
    //     });    

    // }//---------
    // decrement = (e)=>{
    //     let counters = [...this.state.counters];
    //     let i = counters.indexOf(e);
    //     e.value--;
    //     if(e.value>=0){
    //         counters[i]={...e};
    //         this.setState({
    //             counters
    //         });
    //     }
        
    // }//--------
    // resetData =()=>{
    //     let counters = [...this.state.counters];
    //     counters.map(x=>x.value=0);
    //     this.setState({
    //         counters
    //     });
    // }
    render() { 
        return(
            <div>
            <button onClick={()=>this.props.onReset({})} className='btn btn-secondary btn-lg m-2'>Reset</button>
                {
                    this.props.counters.map(
                        m => <Counter key ={m.id} onEmpty={this.props.onEmpty} onIncrement={this.props.onIncrement} onDecrement={this.props.onDecrement}  onDelete={this.props.onDelete} counter={m}/>
                    )
                }
            </div>
        );
    }

}
export default Counters;
//key ={m.id} onEmpty={this.emptyCount} onIncrement={this.increment} onDecrement={this.decrement}  onDelete={this.handleDelete} counter={m}