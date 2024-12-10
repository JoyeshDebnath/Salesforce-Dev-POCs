({
    onSave : function(component, event, helper) {
        var account = component.get('v.account');
        console.log('Account name:', account.Name);
        console.log('Account  Phone :',account.Phone);
        console.log('Account Industry:', account.Industry);
        var action = component.get('c.createAccount');
        action.setParams({
            'acc':account
        })
        action.setCallback(this, function (response) { 
            var state = response.getState();
            if (state == 'SUCCESS')
            {
                var result = response.getReturnValue();
                alert(result);
            } else if (state == 'ERROR')
            { 
                console.log('Error:'+response.getError());
            }
        })
        $A.enqueueAction(action);

        
    },
    onCancel: function (component, event, helper) { 
        component.set('v.account', null);
    }
})