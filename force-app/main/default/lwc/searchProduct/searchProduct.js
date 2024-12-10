import {api,track} from 'lwc';
import LightningModal from 'lightning/modal';

export default class SearchProduct extends LightningModal {

    @api content;
    

    handleCancel(event){
        this.close('cancel')
    }

    handleSave(event){
        this.close('okay')
    }

}