import { LightningElement,api,wire,track } from 'lwc';
import fetchPiclistValues from '@salesforce/apex/ReminderService.fetchPicklistValues';
import createTodoItem from '@salesforce/apex/ReminderService.createToDoItem';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


export default class CreateTaskCmp extends LightningElement {
    @track isLoading = false;
    @track statusOtions = [];
    @track priorityOptions = [];
    recordToCreate = {
        "Subject": '',
        "ActivityDate": null,
        "Status": "",
        "Priority": "",
        "Description":""

    };//record to create 

    @wire(fetchPiclistValues, {
        objectApiName:'Task',
        fieldApiName:'Status'
    })
    statusPicklistResponse ({ data, error }) { 
        if (data)
        { 
            console.log('Picklist Data fetched :', data);
            this.statusOtions = [...data];

        } if (error)
        { 
            console.log('Error', error);
        }
    }

    @wire(fetchPiclistValues, {
        objectApiName:'Task',
        fieldApiName:'Priority'
    })
    priorityPicklistResponse ({ data, error }) { 
        if (data)
        { 
            console.log('Picklist Data fetched :', data);
            this.priorityOptions = [...data];

        } if (error)
        { 
            console.log('Error', error);
        }
    }



    handleChange (event) { 
        event.preventDefault();
        const val = event.target.value;
        
            this.recordToCreate[event.target.name] = val;
        
    }

    handleSubmit (event) {
        event.preventDefault();
        
        console.log('Record To Submit :', JSON.stringify(this.recordToCreate));
        if (this.validateInput() == false)
        { 
            return;
        }
        this.resetFields();
        this.isLoading = true;
        createTodoItem({ taskStr: JSON.stringify(this.recordToCreate) })
            .then(res => { 
                console.log('Todo item created !')
                // this.isLoading = false;
                this.dispatchEvent(new ShowToastEvent({
                    title: 'Success',
                    message: 'The todo item was created successfully!',
                    variant:'success'
                }))
            }).catch(err => { 
                console.log('Something went wrong !', JSON.stringify(err))
                // this.isLoading = false;
                this.dispatchEvent(new ShowToastEvent({
                    title: 'Error',
                    message: 'Something Went Wrong while creating Todo!',
                    variant:'error'
                }))
            }).finally(() => { 
                this.isLoading = false;
            })
    }

    validateInput () { 
        const allValid = [
            ...this.template.querySelectorAll('lightning-input'),
        ].reduce((validSoFar, inputCmp) => {
            inputCmp.reportValidity();
            return validSoFar && inputCmp.checkValidity();
        }, true);

        const allValid2 = [
            ...this.template.querySelectorAll('lightning-combobox'),
        ].reduce((validSoFar, inputCmp) => {
            inputCmp.reportValidity();
            return validSoFar && inputCmp.checkValidity();
        }, true);
        
        return allValid && allValid2;
    }

    resetFields () { 
        this.template.querySelectorAll('lightning-input').forEach(element => { 
            // console.log(field);
            element.value = null;
        })

        this.template.querySelectorAll('lightning-combobox').forEach(element => { 
            // console.log(field);
            element.value = null;
        })

        this.template.querySelectorAll('lightning-textarea').forEach(element => { 
            // console.log(field);
            element.value = null;
        })
    }


}