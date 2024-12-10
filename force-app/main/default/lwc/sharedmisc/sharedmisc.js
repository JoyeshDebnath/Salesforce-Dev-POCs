import { LightningElement,track } from 'lwc';
// import { si } from './shared.js';
import { si} from 'c/utility'

export default class Sharedmisc extends LightningElement {
    @track principle
    @track rate;
    @track time;
    @track interest;

    constructor() { 
        super();
        // const simple_interest = si(1000, 2.3, 5);
        // console.log('Simple interest is :',simple_interest);
    }
    onPrincipleChange (event) { 
        this.principle=event.target.value;
    }
    onRateChange (event) { 
        this.rate=event.target.value;
    }
    onTimeChange (event) { 
        this.time=event.target.value;
    }
    calculate () { 
        console.log(this.principle,this.rate,this.time)
        const simple_interest = si(this.principle, this.rate, this.time);
        console.log(simple_interest)
        this.interest = simple_interest;
    }
}