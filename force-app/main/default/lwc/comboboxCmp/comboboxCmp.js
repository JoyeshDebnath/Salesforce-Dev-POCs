import { LightningElement,api } from 'lwc';

export default class ComboboxCmp extends LightningElement {
    @api name;
    @api placeholder
    @api label;
    @api options;
    @api variant;


    handleChange (event) { 
        event.preventDefault();
        const selectEvt = new CustomEvent(
            'select',
            {
                detail: {
                    value:event.target.value
                },
                bubbles: true,
                composed:true,
            }
        )
        this.dispatchEvent(selectEvt);
    }
}