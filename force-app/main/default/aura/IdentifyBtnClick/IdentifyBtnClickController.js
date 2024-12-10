({
    invoke : function(component, event, helper) {
        var btnParam = event.getSource();//event informationn (name,Id)
        //get the name of the event 
        var btnName = btnParam.getName('v.name');
        console.log('Button name:', btnName);
        // to get id of the event 
        var btnId = btnParam.getLocalId();
        console.log('Button id ',btnId);
    }
})