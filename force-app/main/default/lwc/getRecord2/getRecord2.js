import { LightningElement,api,wire,track } from 'lwc';
import {getRecord,getFieldValue} from 'lightning/uiRecordApi';

import NAME_FIELD from '@salesforce/schema/Account.Name';
import OWNER_NAME_FIELD from '@salesforce/schema/Account.Owner.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';

const FIELDS=['Account.Type',NAME_FIELD,PHONE_FIELD,INDUSTRY_FIELD,OWNER_NAME_FIELD];


export default class GetRecord2 extends LightningElement {
    @api recordId;
    accountRecord;
    _errors;

    @wire(getRecord,{
        recordId:'$recordId',
        fields:FIELDS
    })
    wiredResponse({data,error}){
            if(data){
                this.accountRecord=data;
                console.log(this.accountRecord);
            }if(error){
                    let message='Unknown Error';

            }
    }

    get name(){
        return getFieldValue(this.accountRecord,NAME_FIELD);
    }

    get phone(){
        return getFieldValue(this.accountRecord,PHONE_FIELD);
    }

    get industry(){
        return getFieldValue(this.accountRecord,INDUSTRY_FIELD); 
    }
    
    get owner(){
        return getFieldValue(this.accountRecord,OWNER_NAME_FIELD);
    }

    get type(){
         return getFieldValue(this.accountRecord,'Account.Type') 
    }

    get typeWF(){
        let value='';
        if(this.accountRecord){
            value= this.accountRecord.fields.Type.value;
        }
        return value;
    }
}