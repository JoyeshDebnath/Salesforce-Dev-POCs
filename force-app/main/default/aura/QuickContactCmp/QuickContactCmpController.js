({
    doSave : function(component, event, helper) {
        var action = component.get('c.createContact');
        var contc = component.get('v.CreateContact')
        var validContact = component.find('contactForm').reduce(function (validSoFar, inputCmp) { 
            inputCmp.set('v.validity', { valid: false, badInput: true });
            inputCmp.showHelpMessageIfInvalid();

            return validSoFar && inputCmp.get('v.validity').valid;
        },true)
        console.log('create contact :', component.get('v.CreateContact'))
        action.setParams({
            con:component.get('v.CreateContact'),
            AccountId:component.get('v.AccountId'),
        });
        action.setCallback(this, function (response) { 
            var state = response.getState();
            if (state === 'SUCCESS' || state === 'DRAFT')
            {
                var responseValue = response.getReturnValue();
                console.log(responseValue);
            
            }
            else if (state === 'INCOMPLETE')
            {
                console.log('Incomplete state ')
            }
            else if (state === 'ERROR')
            { 
                var error = response.getError();//array of errors 
                console.log(error)
                if (error || error[0].message)
                { 
                    
                }
            }
        },'ALL')
        $A.enqueueAction(action);
    }
})