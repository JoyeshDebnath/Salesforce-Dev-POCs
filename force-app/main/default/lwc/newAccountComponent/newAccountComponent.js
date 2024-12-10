import { LightningElement } from 'lwc';
export default class NewAccountComponent extends LightningElement {
    

    handleNext(event){
        event.preventDefault();
        const nextEvt=new CustomEvent(
            'next',
            {
                detail:{
                        showContact:true,
                        showAccount:false,
                        showOpportunity:false
                }
            }
        )
        
        this.dispatchEvent(nextEvt);

    }
}