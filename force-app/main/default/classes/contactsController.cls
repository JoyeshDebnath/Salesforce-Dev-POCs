public class contactsController {

    @AuraEnabled
    public static List<Contact> getTenContacts(String accountId){
        List<Contact> conList=new List<Contact>([SELECT Id,FirstName,LastName,Email,Phone 
                 FROM Contact 
                WHERE AccountId =: accountId AND Email != null ]);
        return conList;
    }
    
    @AuraEnabled
    public static Contact createContact(Contact con, Id AccountId){
        con.AccountId=AccountId;
        insert con;
        return con;
    }
}