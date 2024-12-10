({
    doSearch : function(component, event, helper) {
        var serachKey = component.get('v.strKey');
        console.log(serachKey);
        var action = component.get('c.searchAccountByIndustry');
        action.setParams({
            "industry":serachKey
        })
        action.setCallback(this, function (response) { 
            var state = response.getState();
            if (state == 'SUCCESS')
            {
                // console.log(response.getReturnValue())
                component.set('v.accnt', response.getReturnValue());
                console.log(component.get('v.accnt'))
                component.set('v.flag', true);
            } else if (state == 'ERROR')
            { 
                console.log('Something went wrong !');
            }
        })

        $A.enqueueAction(action);
    }
})