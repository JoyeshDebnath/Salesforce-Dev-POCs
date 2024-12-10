import { LightningElement } from 'lwc';
export default class PicklistDemo extends LightningElement {

    onChangeHandler(event){
        console.log(JSON.stringify(event.detail))
    }

}