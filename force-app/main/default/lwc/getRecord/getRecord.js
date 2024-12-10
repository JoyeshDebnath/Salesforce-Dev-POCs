import { LightningElement,api,wire } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi';

export default class GetRecord extends LightningElement {
    @api recordId;
    
    @wire( getRecord , {
        recordId:'$recordId',
        layoutTypes :['Full','Compact'],
        modes:['View','Edit','Create']})
        wiredRecordResponse({data,error}){
            if(data){
                    console.log('Record Information : \n',data);
            }else if(error){
                console.log('Error \n :',error)
            }
        }

}