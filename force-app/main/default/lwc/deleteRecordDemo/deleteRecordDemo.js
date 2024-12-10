import { LightningElement,api,wire,track } from 'lwc';
import {deleteRecord} from 'lightning/uiRecordApi';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import {NavigationMixin} from 'lightning/navigation';


export default class DeleteRecordDemo extends NavigationMixin (LightningElement) {
    @api recordId;
    @api objectApiName;

    handleDelete(){
        deleteRecord(this.recordId)
        .then(res=>{
                this.dispatchEvent(
                    new ShowToastEvent({
                        title:'Success',
                        message:'Record Deleted !',
                        variant:'success'
                    })
                )
                this[NavigationMixin.Navigate]({
                    type:'standard__objectPage',
                    attributes:{
                        actionName:'home',
                        objectApiName:this.objectApiName
                    }
                });

        }).catch(err=>{
                this.dispatchEvent(new ShowToastEvent({
                    title:'Error deleting record',
                    message:'Something went wrong ',
                    variant:'error'
                }))
        })
    }
}