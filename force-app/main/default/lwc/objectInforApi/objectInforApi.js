import { LightningElement,wire } from 'lwc';
import {getObjectInfo,getPicklistValues,getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';

export default class ObjectInforApi extends LightningElement {

    @wire(getObjectInfo, {objectApiName:ACCOUNT_OBJECT})
    wiredAccount({data,error}){
        if(data){
                console.log('Object Information ',data);
        }
        if(error){
            console.log('Error Ocuured : ',error)
        }
    }

    @wire ( getPicklistValues , {recordTypeId : '012000000000000AAA',fieldApiName:INDUSTRY_FIELD})
    wiredPicklistResponse({data,error}){
        if(data){
                console.log('Picklist data : ',data);
        }if(error){
                console.log('Error occuured : ',error);
        }
    }

    @wire ( getPicklistValuesByRecordType , { 
        objectApiName:ACCOUNT_OBJECT,
        recordTypeId :'012dM0000045Cz7'
        })
        wiredRecordTypeInfo({data,error}){
            if(data){
                console.log('The get picklist values by record type response :',data)
            }if(error){
                console.log(error)
            }
        }



}