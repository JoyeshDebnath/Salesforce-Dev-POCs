({
    doInit : function(component, event, helper) {
        helper.loadContacts(component);
    },

    handleSelect: function (component, event, helper) { 
        var contacts = component.get('v.contacts');
        var contactList = component.get('v.contactsList');

        //Get the selected option > "Referral" "Social Media" Or "ALL"
        var selected = event.getSource().get('v.value');
        console.log('Selected value :',selected);
        var filter = [];
        var k = 0;
        for (var i = 0; i < contactList.length; i++)
        { 
            var c = contactList[i];
            if (selected != 'Other')
            {
                if (c.LeadSource == selected)
                {
                    filter[k] = c;
                    k++;
                }
            }
            else { 
                filter = contactList;
                
            }
        }
        console.log("filters ",filter)
        //set the filtered list 
        component.set('v.contacts', filter);
        helper.updateTotal(component);
    }
})