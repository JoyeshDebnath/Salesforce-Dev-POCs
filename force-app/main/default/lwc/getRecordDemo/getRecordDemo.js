import { LightningElement,api,wire,track } from 'lwc';
import {getRecord,createRecord} from 'lightning/uiRecordApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';


export default class GetRecordDemo extends LightningElement {
    @api recordId;

    @wire(getRecord,{ recordId:'$recordId',
            layoutTypes:['Full','Compact'],
            modes:['View','Edit','Create']            
            })
            wiredRecord({data,error}){
                if(data){
                    console.log('Record Info : ',data);
                    const industryVal=data.fields.Industry.value;
                    console.log('Industry value: ',industryVal);
                }
                if(error){
                    console.log('Error : ',error);
                }
    }

    handleCreate(){
        const fields = { };
        fields[NAME_FIELD.fieldApiName]='SFDC Debnath';
        const accountRecord={apiName:ACCOUNT_OBJECT.objectApiName , fields:fields};
        createRecord(accountRecord)
        .then(result=>{
                console.log('Record Id: ',result.id);
        }).catch(err=>{
            console.log(err)
        })
    }


}