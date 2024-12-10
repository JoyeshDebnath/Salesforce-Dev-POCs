import { LightningElement,wire,api,track } from 'lwc';
import findRecords from '@salesforce/apex/CustomLookupController.findRecords';


export default class CustomLookup extends LightningElement {
 @api objectApiName;
 @api fieldApiName;
 @track records;
 @track errors;
 @track selectedRecord;



    handleSearch(event){
        const searchKey=event.detail;
        findRecords({
            objectName:this.objectApiName,
            fieldApiName:this.fieldApiName,
            searchvalue:searchKey
        })
        .then(res=>{
           console.log('Result : ',res)
           this.records=res;
           this.errors=undefined;
        }).catch(err=>{
            console.log('Error :',err);
            this.records=undefined;
            this.errors=err;
        })
    }

    handleSelect(event){
        const selectedRecordId=event.detail;
        //find the records sleected 
        const selectedRecord= this.records.find(rec=>rec.Id===selectedRecordId)

        console.log('Selected Record =',selectedRecord);
        this.selectedRecord=selectedRecord
    }

    handleRemove(){
        this.selectedRecord=undefined;
        this.records=undefined;
        this.errors=undefined;
    }
   
}