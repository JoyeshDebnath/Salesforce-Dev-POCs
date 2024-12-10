import { LightningElement,wire,api,track } from 'lwc';
import getAllCases from '@salesforce/apex/wireClass.getAllCases'
export default class WireDemo extends LightningElement {

    @api records;
    @api errors;
    @track searchKey
    @wire(getAllCases, {subject:'$searchKey'})
    wiredCases ({ data, error }) { 
        if (data)
        {
            this.records = data;
            this.errors = undefined;
        }
        else if (error)
        { 
            this.records=undefined;
            this.errors = error;
        }
    }

    handleChange (event) { 
        this.searchKey = event.target.value;
    }
}