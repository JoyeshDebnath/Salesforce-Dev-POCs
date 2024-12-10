import { LightningElement } from 'lwc';

export default class QuickCase extends LightningElement {
    subject;
    description;
    status;
    origin;
    priority;

    get statusOptions () { 
        return [
            { label: 'New', value: 'New' },
            { label: 'Working', value: 'Working' },
            { label: 'Escalated', value: 'Escalated' },
        ]
    }

    get originOptions () { 
        return [
            { label: 'Phone', value: 'Phone' },
            { label: 'Email', value: 'Email' },
            { label: 'Web', value: 'Web' },
        ]
    }

    get priorityOptions () { 
        return [
            { label: 'High', value: 'High' },
            { label: 'Medium', value: 'Medium' },
            { label: 'Low', value: 'Low' },
        ]
    }

    handleChange (event) { 
        let name = event.target.name;
        if (name === 'status')
        {
            this.status = event.target.value;
        } else if (name === 'origin')
        {
            this.origin = event.target.value;
        }
        else
        { 
            this.priority = event.target.value;
        }
    }

    handleCaseCreate () { 
        
    }
}