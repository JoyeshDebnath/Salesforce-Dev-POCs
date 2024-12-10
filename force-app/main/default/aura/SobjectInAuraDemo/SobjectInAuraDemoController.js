({
    invoke : function(component, event, helper) {
        var accname = component.get('v.account.Name');
        console.log('Account name :', accname);
        var accIndustry = component.get('v.account.Industry');
        console.log('Account industry :', accIndustry);
        var accRating = component.get('v.account.Rating');
        console.log("Account rating :", accRating);
        
    }
})