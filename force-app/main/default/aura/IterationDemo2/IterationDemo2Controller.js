({
    showData: function (component, event, helper) {
        var columns = [
            { label: 'Account Name', fieldName: 'accountName', type: 'text' },
            { label: 'Account Phone', fieldName: 'accountPhone', type: 'text' },
            {label:'Account Industry' , fieldName: 'accountIndustry', type: 'text'}
        ];
        component.set('v.columns',columns);
        var action = component.get('c.getAccountsData');
        action.setCallback(this, function (response) { 
            var state = response.getState();
            if (state == 'SUCCESS')
            {
                component.set('v.accList',response.getReturnValue())
            } else
            { 
                console.log('Something went wrong !');
            }
        })
        $A.enqueueAction(action);
    }
})