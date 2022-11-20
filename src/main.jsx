import React, { Component } from 'react';

class main extends Component {

    state= {
        string:'',
        toreverseStr:[],
        reverseStr:'',
        pushing:'',
        poping:'',
    };

    getstring = (e) =>{
        this.setState({
            [e.target.name]:e.target.value,
          
        });
        console.log(this.state.string);
 }
   
    render() {

        const reverse = (e) =>{
            let newArray;
            let unshiftstr;
            let shiftArray = '';
e.preventDefault();

if (this.state.string){

    newArray = this.state.string.split('');
    unshiftstr =  newArray.shift();
        console.log(newArray,shiftArray);
        this.setState({
    string:(newArray.join('')),
    poping:this.state.poping + unshiftstr
        })
        console.log(this.state.string);
}
else
{
this.setState({
pushing:': : :stack is empty enter another stack',
})
}

        }
        return (
            <main>
                <form action="" onChange={this.getstring} onSubmit ={this.captureinput}>

                <input type="text" name='string' onChange={this.getstring}  />
                </form>
                <button onClick={reverse}>click to unstack</button>
                <p>stack content : : {this.state.string}</p>
                <p>{this.state.reverseStr}{this.state.poping}  {this.state.pushing}</p>

            </main>
        );
    }
}

export default main;