({
	doSave : function(component, event, helper) {
		var action = component.get('c.createContact');//name of the class method 
        //validation 
        var contc = component.get('c.CreateContact');
        if(contc.FirstName==null || contc.FirstName=='' || contc.FirstName==undefined ){
            alert ('Please input the first name ');
            return ;
        }
        
        action.setParams({
            con:component.get('v.CreateContact'),
            AccountId:component.get('v.AccountId')
        });
        
        
        action.setCallback(this,function(response){
            var state=response.getState();
            alert(state);
            if(state==='SUCCESS' || state==='DRAFT'){
                var responseValue=response.getReturnValue();
                // fire the event 
                var componentEvent=component.getEvent('quickContact')
                componentEvent.setParams({
                        contactRecord:responseValue
                })

                componentEvent.fire();
            }else if(state==='INCOMPLETE'){
                
            }else if(state==='ERROR'){
               var errors = response.getError();//returns the errors 
                console.log('errors occurred ..',error);
                if(errors || errors[0].message){
                    // display/log  the errors 
                }
            }
        },'ALL');
        $A.enqueueAction(action);
	}
})