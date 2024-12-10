({
    handleSuccess : function(component, event, helper) {
        component.find('notify').showToast({
            "title": 'Record Updated!',
            "message": 'The record ' + event.getParam("id") + ' has been updated successfully !',
            "variant":'success'
        })
    },

    handleError: function (component, event, helper) {
        component.find("notify").showToast({
            "title": "There was an error!",
            "message": event.getParam("message"),
            "variant":"error"
        })    
    },
    handleSave: function (component, event, helper) {
        component.find("recordHandler").saveRecord($A.getCallback(function (saveResult) { 
            if (saveResult.state === 'SUCCESS' || saveResult.state === 'DRAFT')
            {
                //handle component rlated logic in event handler 
            }
            else if (saveResult.state === 'INCOMPLETE')
            {
                console.log('User is offline ! Device doesnt support drafts ');
            }
            else if (saveResult.state === 'ERROR')
            {
                console.log('Problem while saving record ! error : ' + JSON.stringify(saveResult.error));
            }
            else
            { 
                console.log('Unknown problem encountered ! state: '+saveResult.state);
            }
        }))
    },

    handleRecordUpdated: function (component, event, helper) { 
        var eventParam = event.getParams();
        if (eventParam.changeType == 'CHANGED')
        {
            //get the fields that were changed for the record 
            var changedFields = eventParam.changedFields;
            console.log('The fields that are changed for this record :', JSON.stringify(changedFields));
            //record changed so fire the other component logic or refresh 
            var resultToast = $A.get('e.force:showToast');
            resultToast.setParams({
                'title': 'Saved !',
                "message": 'The record was updated !'
            })

            resultToast.fire();
        }
        else if (eventParam.changeType === 'LOADED')
        {
            //record loaded in cache 
        }
        else if (eventParam.changeType === 'REMOVED')
        {
            //record is deleted and removed from cache 
        }
        else if (eventParam.changeType === 'ERROR')
        { 
            //there was an error encountyered 
        }
    }
})