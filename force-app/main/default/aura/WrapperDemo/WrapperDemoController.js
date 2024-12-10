({
    doSearch : function(component, event, helper) {
        var accRec = component.get('v.accountRecord');
        var action = component.get('c.searchAccount');
        action.setParams({
            'strIndustry':component.get('v.strKey')
        })
        action.setCallback(this, function (response) { 
            var state = response.getState();
            if (state == 'SUCCESS')
            {
                component.set('v.accountRecord',response.getReturnValue());
            } else { 
                alert(response.getReturnValue().status);
            }
        })
        $A.enqueueAction(action);
    }
})