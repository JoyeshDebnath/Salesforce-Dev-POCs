public with sharing class CustomerController {
    @AuraEnabled
    public static String saveAccount(Account accObj){
        try{
            insert accObj;
            return accObj.Id;
        }catch(Exception e){
            return e.getMessage();
        }
    }
}