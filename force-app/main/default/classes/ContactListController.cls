public with sharing class ContactListController {
    @AuraEnabled
    public static List<Contact> getAllContacts(String AccountId){
        List<Contact> contactList=new List<Contact>();
        try{
            contactList=[SELECT Id,FirstName,LastName,Email,Phone FROM Contact WHERE Email!=null  AND AccountId=:AccountId LIMIT 10];
            return contactList;
        }catch(Exception e){
            System.debug(e.getMessage());
        }
        return contactList;
    }

    @AuraEnabled 
    public static Contact createContact(Contact con,Id AccountId){
        con.AccountId=AccountId;
        insert con;
        return con;
    }
}