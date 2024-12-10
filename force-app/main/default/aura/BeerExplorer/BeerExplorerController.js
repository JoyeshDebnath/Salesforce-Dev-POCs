({
    handleComponentEvent : function(component, event, helper) {
        var serachParam = event.getParam('searchText');
    
        var action=component.get('c.getBeerSearchResult');
        action.setParams({
            searchParameter:serachParam
        })
        action.setCallback(this,function(response){
            var state=response.getState();
            if(state=='SUCCESS' ){
                var responseValue = response.getReturnValue();
                console.log(responseValue)
                component.set('v.beerList', responseValue);
            }else{
                console.log(response.getError())
            }
        })
        $A.enqueueAction(action);
    }
})