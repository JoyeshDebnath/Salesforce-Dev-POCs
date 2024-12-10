({
    doInit : function(component, event, helper) {
        var columns = [
            { label: 'Account Name', fieldName: 'accName', type: 'text' },
            { label: 'Accout Phone', fieldName: 'accPhone', type: 'text' },
            { label: 'Account Industry', fieldName: 'accIndustry', type: 'text' },
            { label: 'Contact Firstname', fieldName: 'conFirstName', type: 'text' },
            { label: 'Contact Lastname', fieldName: 'conLastName', type: 'text' },
            { label: 'Contact Email', fieldName: 'conEmail', type: 'text' },
        ];
        component.set('v.columns', columns);
        
        var action = component.get('c.getAccConData');
        
        action.setCallback(this, function (response) { 
            var state = response.getState();
            if (state == 'SUCCESS')
            { 
                component.set('v.data',response.getReturnValue());
            }
        })
        $A.enqueueAction(action);

    
        component.set('v.flag',true)
    }
})