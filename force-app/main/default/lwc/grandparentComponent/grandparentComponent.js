import { LightningElement } from 'lwc';

export default class GrandparentComponent extends LightningElement {
    
    handleSimpleEvent () { 
        alert('Grand Parent component ')
    }
}