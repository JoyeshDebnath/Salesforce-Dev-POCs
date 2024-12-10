import { LightningElement, wire, api, track } from 'lwc';
import getAllCases from '@salesforce/apex/CaseController.getAllCases';



export default class ApexImperativeMtehod extends LightningElement {
    @track subject;
    @track records;
    @track error;

    handleChange(event) {

        const sVal = event.target.value;
        this.subject=sVal;

        
    }

    handleLoad(){
            getAllCases({
            subject: this.subject
        })
            .then(data => {
                console.log('Data: \n ', data);
                this.records = data;
            })
            .catch(err => {
                console.log('Error: \n ', err);
                this.error = err;
            })
    }
}