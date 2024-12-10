import LightningDatatable from 'lightning/datatable';
import imageTemplate from './templates/image.html';
import picklistTemplate from './templates/picklist.html';

export default class LTmgdatatable extends LightningDatatable {
    static customTypes = {
        image: {
            template: imageTemplate,
            typeAttributes:['height','width','alt']
        },
        picklist: {
            template: picklistTemplate,
            typeAttributes: ['label', 'name', 'placeholder','options','variant','index']
        }
    }




}