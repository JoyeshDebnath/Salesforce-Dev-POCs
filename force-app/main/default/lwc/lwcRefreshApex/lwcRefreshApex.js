import { LightningElement,api,track,wire } from 'lwc';
import getAllAccounts from '@salesforce/apex/AccountController.getAllAccounts';
import {refreshApex} from '@salesforce/apex';
import {deleteRecord} from 'lightning/uiRecordApi';
import updateAccountRecord from '@salesforce/apex/AccountController.updateAccount';

const columns=[
    {label:'Name',fieldName:'Name',type:'text'},
    {label:'Phone',fieldName:'Phone',type:'text'},
    {label:'Industry',fieldName:'Industry',type:'text'}
];

export default class LwcRefreshApex extends LightningElement {
    wiredAccList=[];
    errors;
    col=columns;
    selectedRecord;
    accList=[];


    @wire(getAllAccounts)
    accWireMethod(result){
        this.wiredAccList=result;

        if(result.data){
            this.errors=undefined;
            this.accList=result.data;

        }else if (result.error){
            this.errors=error;
            this.accList=undefined;
        }
    }

    handleSelection(event){
        if(event.detail.selectedRows.length > 0){
            this.selectedRecord=event.detail.selectedRows[0].Id;
        }
    }

    deleteRecord(){
            deleteRecord(this.selectedRecord)
            .then(()=>{
                    refreshApex(this.wiredAccList)
            }).catch((error)=>{
                    console.log(error)
            })
    }

    updateRecord(){
           updateAccountRecord({
            accountId:this.selectedRecord
           }).then((result)=>{
            console.log('Result \n ',result)
           }).catch(err=>{
            console.log('Errors : ',err)
           })
    }
}