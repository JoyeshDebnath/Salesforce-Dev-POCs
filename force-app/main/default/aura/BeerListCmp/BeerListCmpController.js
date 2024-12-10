({
    showInfo : function(component, event, helper) {
        var eventSource = event.getSource();
        var beerObj = eventSource.get('v.name');
        component.set('v.beerId', beerObj)
        console.log(component.get('v.beerId'));
    }
})