({
    handleShow : function(component, event, helper) {
        //get the source 
        var btnParam = event.getSource();
        var btnId = btnParam.getLocalId();//get the aura id of the btrn
        console.log('Btn click aura id :',btnId);
        if (btnId == 'customer')
        {
            component.set('v.showCustomer', true);
            
        } else if (btnId == 'address')
        { 
            component.set('v.showAddress', true);
        }
    }
})