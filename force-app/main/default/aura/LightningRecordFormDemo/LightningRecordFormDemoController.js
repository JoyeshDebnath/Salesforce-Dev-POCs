({
    handleLoad : function(component, event, helper) {
        component.find('fname').set('v.value', 'JOHN');
        // var record = event.getParam('recordUi');
        // var fieldNames = Object.keys(record.fields);
        // console.log('field names :', fieldNames);
        // console.log('Record : ', record);

    
    },
    handleSuccess: function (component, event, helper) { 
        var record = event.getParam('response');
        console.log("Resord 2:", record)
        console.log('Record Api name :',record.apiName)
        var toastEvent = $A.get('e.force:showToast');
        toastEvent.setParams({
            "mode":"sticky",
            "title": "Creation Success!",
            "message": "The record With the Id" + record.id + "  Has been Created Succesfuly !"
        });
        toastEvent.fire();
    },
    handleSubmit: function (component, event, helper) { 
        event.preventDefault();
        var fields = event.getParam('fields');
        fields.Email = "MySpecialMailId@gmail.com";
        component.find('recordForm').submit(fields);
    },
    handleReset: function (component, event, helper) { 
        var fields = component.find('field');
        fields.forEach(function (f) { 
            f.reset()
        })
    },

    handleSumbit2: function (component, event, helper) { 
        event.preventDefault();
        const fields = event.getParam('fields');
        fields.Email = 'testingEmail@gmail.com';
        component.find('recordForm2').submit(fields);
    }
})