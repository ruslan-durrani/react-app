import React,{Component}from 'react';
import Navbar from './components/navbar';
import Counters from './components/counters';

class App extends Component {
    state = {
        counters:[
            {id:1,value:1},
            {id:2,value:0},
            {id:3,value:0},
            {id:4,value:0},
            {id:5,value:0},
        ]

    } 
    handleDelete = (e) =>{
        console.log(e);
        const counters = this.state.counters.filter(c=> c !==e);
        console.log(counters);
        this.setState({
            counters
        });
    }
    //----------
    emptyCount = (e) => {
        let counters = [...this.state.counters];
        let i = counters.indexOf(e);
        e.value = 0;
        counters[i] = e;
        this.setState({
            counters
        });
    }
    increment =(e)=>{ 
        let counters = [...this.state.counters];
        let i = counters.indexOf(e);
        e.value++;
        counters[i]={...e};
        this.setState({
            counters
        });    

    }//---------
    decrement = (e)=>{
        let counters = [...this.state.counters];
        let i = counters.indexOf(e);
        e.value--;
        if(e.value>=0){
            counters[i]={...e};
            this.setState({
                counters
            });
        }
        
    }//--------
    resetData =()=>{
        let counters = [...this.state.counters];
        counters.map(x=>x.value=0);
        this.setState({
            counters
        });
    }
    render() { 
        return (
            <React.Fragment>
                <Navbar totalCount={this.getItemLength} />
                <main className='container m-2'>
                    <Counters key ={this.state.counters.id} onReset={this.resetData} onEmpty={this.emptyCount} onIncrement={this.increment} onDecrement={this.decrement}  onDelete={this.handleDelete} counters={this.state.counters}/>
                </main>
            </React.Fragment>

        );
    }
    getItemLength = (e) => {
        console.log("dsf");
        let counters = this.state.counters.filter(c=> c.value !== 0);
        return counters.length;
    }
}
 
export default App;