import { LightningElement } from 'lwc';
export default class NewOpportunityComponent extends LightningElement {


    handleNext(event){
        event.preventDefault();
        const nextEvt=new CustomEvent(
            'next',
            {
                detail:{
                    showContact:false,
                    showAccount:false,
                    showOpportunity:false,
                    showProduct:true
                }
            }
        )
        this.dispatchEvent(nextEvt);
    }

    handlePrevious(event){
        event.preventDefault();
        const prevEvt=new CustomEvent(
            'previous',
            {
                detail:{
                    showContact:true,
                    showAccount:false,
                    showOpportunity:false,
                    showProduct:false
                }
            }
        )
        this.dispatchEvent(prevEvt);
    }
}