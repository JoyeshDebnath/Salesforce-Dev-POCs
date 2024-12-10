public class MyContactController {
    @AuraEnabled
    public static List<Contact> getContacts(String accntId){
        List<Contact> contactList=new List<Contact>([SELECT Id,FirstName,LastName,Email,Phone 
                                                    FROM Contact 
                                                    WHERE Email!=null 
                                                    AND AccountId=:accntId]);
        return contactList;
        
    }
}