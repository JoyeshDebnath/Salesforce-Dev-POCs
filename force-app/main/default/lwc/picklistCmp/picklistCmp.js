import { LightningElement, api, wire } from 'lwc';
import { getPicklistValues, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi'
// import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
// import ACCOUNT_OBJECT from '@salesforce/schema/Account';

const DEFAULT_RECORD_TYPE_ID = '012000000000000AAA';

export default class PicklistCmp extends LightningElement {

    @api recordTypeId = DEFAULT_RECORD_TYPE_ID;
    @api objectApiName='Account';
    @api fieldApiName='Industry';
    @api name="Industry";
    @api label="Industry";
    @api placeholder="Select Industry";
    @api required = false;


    picklistValue;
    picklistOptions;

    get options() {

        return this.picklistOptions;

    }

    set options(options) {
        this.picklistOptions = options;
    }
    /*
        @wire(getPicklistValues, {recordTypeId:'$recordTypeId' , fieldApiName:INDUSTRY_FIELD})
        wiredIndustryResponse({data,error}){
            if(data){
                this.options=data.values;
                console.log('picklist options :',data);
            }
            if(error){
                console.log('Error',error);
            }
        }
    */
    @wire(getPicklistValuesByRecordType, {
        recordTypeId: '$recordTypeId',
        objectApiName: '$objectApiName'
    })
    wiredPicklistResponse({ data, error }) {
        if (data) {
            console.log('Data \n ', data);
            if(data.picklistFieldValues && data.picklistFieldValues[this.fieldApiName]){
                 let picklistValues=data.picklistFieldValues[this.fieldApiName];
                 this.options=picklistValues.values;
            }
        } if (error) {
            console.log('Error \n', error);
        }
    }


    handleChange(event) {

        this.picklistValue = event.target.value;
        const changeEvt=new CustomEvent(
            'change',
            {
                detail:{
                   fieldApiName:this.fieldApiName,
                   value:this.picklistValue 
                }
            }
        )
        this.dispatchEvent(changeEvt);
    }
}