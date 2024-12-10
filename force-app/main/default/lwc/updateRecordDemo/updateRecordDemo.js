import { LightningElement,api,wire } from 'lwc';
import {updateRecord,getRecord,getFieldValue} from 'lightning/uiRecordApi';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'


import ID_FIELD from '@salesforce/schema/Contact.Id';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';

const FIELDS=[FIRSTNAME_FIELD,LASTNAME_FIELD,EMAIL_FIELD];


export default class UpdateRecordDemo extends LightningElement {
@api recordId;
contactRecord;
error__;
fieldValues={};

    @wire(getRecord,{
        recordId:'$recordId',
        fields:FIELDS
    })
    wiredResponse({data,error}){
        if(data){
            this.contactRecord=data;
        }
        if(error){
            this.error__=error;
        }
    }

    get firstname(){
        return getFieldValue(this.contactRecord,FIRSTNAME_FIELD);
    }

    get lastname(){
        return getFieldValue(this.contactRecord,LASTNAME_FIELD);
    }

    get email(){
        return getFieldValue(this.contactRecord,EMAIL_FIELD);
    }



    handleUpdate(event){
        event.preventDefault();

        const fields={};
        fields[ID_FIELD.fieldApiName]=this.recordId;
        fields[FIRSTNAME_FIELD.fieldApiName]=this.fieldValues.FirstName;
        fields[LASTNAME_FIELD.fieldApiName]=this.fieldValues.LastName;
        fields[EMAIL_FIELD.fieldApiName]=this.fieldValues.Email;
        const recordInput={fields};
        alert('updating!!');
        updateRecord(recordInput)
        .then(()=>{
                this.dispatchEvent(
                    new ShowToastEvent({
                    title:'Success',
                    message:'Contact updated ',
                    variant:'success'
                })
                )
        }).catch(error=>{
            console.log(error);
             this.dispatchEvent(
                new ShowToastEvent({
                    title:'Error Creating Record ',
                    message:'Something went wrong ',
                    variant:'error'
                })
            )
        })

    }

    handleChange(event){
        event.preventDefault();
        const name=event.target.name;
        const value=event.target.value;
        
        this.fieldValues[name]=value;
        
    }

}