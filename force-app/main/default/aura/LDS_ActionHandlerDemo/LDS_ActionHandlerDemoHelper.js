({
    validateContactForm : function(component) {
            
        var validContact=true;
        var allValid=component.find('contactField').reduce(function(validFields,inputCmp){
                inputCmp.showHelpMessageIfInvalid();
                return validFields && inputCmp.get('v.validity').valid;
            },true)

            if(allValid){
                //verify if account is there to attach the contact 
                var account = component.get("v.account");
                if($A.util.isEmpty(account)){
                    validContact=false;

                }

            }

            return validContact;  
    }
})