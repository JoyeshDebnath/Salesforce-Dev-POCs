({
    doSearch : function(component, event, helper) {
        var componentEvent = component.getEvent('BeerEvent');
        var searchParam = component.find('Beer-search').get('v.value');
        componentEvent.setParams({
            searchText:searchParam
        })

        componentEvent.fire();
    }
})