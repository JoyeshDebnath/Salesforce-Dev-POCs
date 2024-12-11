import { LightningElement, api, wire, track } from 'lwc';
import fetchTodoList from '@salesforce/apex/ReminderService.getTodos';
import { NavigationMixin } from 'lightning/navigation';

export default class ReminderCmp extends NavigationMixin(LightningElement) {
    @track reminderList = [];
    @track errors;
    showModal = false;

    @wire(fetchTodoList)
    fetchTodoReponse ({ data, error }) {
        if (data)
        {
            let currentDate = new Date();

            this.reminderList = data.map((todo) => {
                let activityDate = todo.ActivityDate;
                let activityDateConverted = new Date(activityDate);

                return {
                    ...todo,
                    headingStyle: currentDate > activityDateConverted ? '' : 'color:red'
                }
            })
        } if (error)
        {
            console.log('Error while fetching todos !', error);
        }
    }

    handleClick (event) {
        event.preventDefault();
        this.showModal = true;
    }

    handleCancel () {


        this.showModal = false;

    }

    viewReminder (event) {
        console.log('clicked',event.target.dataset.id);
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId:event.target.dataset.id,
                objectApiName: 'Task',
                actionName: 'view'
            }
        })
    }

    editReminder (event) { 
        event.preventDefault();
            // console.log('clicked',event.target.dataset.id);
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId:event.target.dataset.id,
                objectApiName: 'Task',
                actionName: 'edit'
            }
        })
    }


}