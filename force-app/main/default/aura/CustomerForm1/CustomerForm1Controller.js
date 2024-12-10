({
    doSave : function(component, event, helper) {
        var action = component.get('c.saveAccount');
        action.setParams({
            'accObj':component.get('v.accnt')
        })
        action.setCallback(this, function (response) { 
            var state = response.getState();
            if (state == 'SUCCESS')
            { 
                var AccId = response.getReturnValue();
            
                var evt=component.getEvent('customerEvent');
                evt.setParams({
                    'accnt':component.get('v.accnt')
                })
                evt.fire();
            }
        })
        $A.enqueueAction(action);
    },
    doCancel: function (component, event, helper) { 
        component.set('v.accnt', null);
        component.set('v.flag',false);
    }
})