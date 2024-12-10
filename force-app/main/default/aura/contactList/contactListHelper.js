({
    loadContacts : function(cmp) {
        //load all contacts data 
        var action = cmp.get("c.getContacts");
        action.setCallback(this, function (response) { 
            var state = response.getState();
            if (state === 'SUCCESS')
            { 
                cmp.set('v.contacts', response.getReturnValue());
                cmp.set('v.contactsList', response.getReturnValue());
                this.updateTotal(cmp);
            }
            var toastEvent = $A.get('e.force:showToast');
            if (state === 'SUCCESS')
            {
                toastEvent.setParams({
                    'title': 'Success!',
                    'message': 'Your contacts have been loaded successFully'
                })
            } else
            { 
                toastEvent.setParams({
                    'title': 'Error!',
                    'message':'Something went wrong !'
                })
            }
            toastEvent.fire();
        })
        $A.enqueueAction(action);
    },

    updateTotal: function (cmp) { 
        var contacts = cmp.get('v.contacts');
        cmp.set('v.totalContacts',contacts.length);
    }
})