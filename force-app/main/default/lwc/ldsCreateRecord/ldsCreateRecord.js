import { LightningElement,api } from 'lwc';
import   { ShowToastEvent } from 'lightning/platformShowToastEvent';


export default class LdsCreateRecord extends LightningElement {
    @api recordId;
    @api objectApiName;
    
    handleSuccess (event) { 
        const evt = new ShowToastEvent({
            title: "Record Created !",
            message: 'Record ID : ' + event.detail.id,
            variant:'success'
        })

        this.dispatchEvent(evt)
    }

}