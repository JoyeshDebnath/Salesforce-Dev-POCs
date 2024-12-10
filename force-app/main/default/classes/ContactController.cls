public with sharing class ContactController {
    @AuraEnabled
    public static List<Contact> getContacts(){
        List<Contact> contacts=[SELECT Id,Name,MailingStreet,Phone,Email,LeadSource FROM Contact];
        
        return contacts;

    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactsInfo(){
        List<Contact> contactsList=new List<Contact>();
        try{
            contactsList=[SELECT Id,Name,Phone,Email,Title,AccountId,Account.Name ,Account.Industry
                                    FROM Contact 
                                    LIMIT 10
                        ];

        }catch(Exception e){
            throw new AuraHandledException(e.getMessage());
        }

        return contactsList;
    }
}