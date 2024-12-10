({
    createModal : function(component, event, helper) {
        component.find('overlaylib').showCustomModal({
            header: "Application Confirmation",
            body: "Test Modal Body",
            footer: "Test Modal Footer",
            showCloseButton: true,
            closeCallback: function() {
                alert('You closed the alert!');
            }
        })
    },

    navigateURL: function (component, event, helper) { 
        // var pageReferenceNav = {
        //     type: 'standard__objectPage',
        //     attributes: {
        //         objectApiName: 'Account',
        //         actionName:'list'
        //     },
        //     state: {
            
        //     }
        // }
        // var pageReference = component.find('navigation');
        // pageReference.navigate(pageReferenceNav);

        var pageReferenceObj = {
            'type': 'standard__component',
            'attributes': {
                'componentName': 'c__BeerExplorer'
            },
            'state': {
                'myAttr':'attributeValue'
            }
        }
        var pageReference = component.find('navigation');
        pageReference.navigate(pageReferenceObj);

    }
})