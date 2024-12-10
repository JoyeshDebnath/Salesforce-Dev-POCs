public with sharing class AccountController {
    @AuraEnabled
    public static Account searchAccountByIndustry(string industry){
        return [SELECT Id,Name,Phone,Industry FROM Account WHERE Industry =: industry LIMIT 1];
        
        
    } 

    @AuraEnabled(cacheable=true)
    public static List<Account> getAllAccounts(){
        return [SELECT Id,Name,Phone,Industry,Rating FROM Account order by createddate desc LIMIT 10 ];
    }

    @AuraEnabled(cacheable=true)
    public static void updateAccount(String accountId){
        try{
                Account accRecord=new Account(Id=accountId);
                accRecord.Industry='Education';
                update accRecord;

        }catch(Exception e ){
            throw new AuraHandledException(e.getMessage());
        }
    }


    @AuraEnabled 
    public static List<Contact> getContacts(){
        return [SELECT FirstName,LastName,Phone,Email FROM Contact LIMIT 10];
    }


    @AuraEnabled 
    public static String createAccount(Account acc){
        try{
            insert acc;
            return acc.Id;
        }catch(Exception e){
            return e.getMessage();
        }
    }

    @AuraEnabled
    public static CustomerInfo searchAccount(String strIndustry){
        CustomerInfo obj = new CustomerInfo();
        try{
            Account accObj=new Account();
            accObj=[SELECT Id,Name,Phone,Industry FROM Account WHERE Industry=:strIndustry LIMIT 1];
            obj.accName=accObj.Name;
            obj.accPhonenumber=accObj.Phone;
            obj.accIndustry=accObj.Industry;
            obj.status='success';

        }catch(Exception e){
            obj.status =e.getMessage();
        }
        return obj;
    }

    public class CustomerInfo{
        @auraEnabled public String accName;
        @auraEnabled public String accPhonenumber;
        @auraEnabled public String accIndustry;
        @auraEnabled public String status;

    }//wrapper class CustomerInfo


    @AuraEnabled 
    public static List<Account> getAccounts(){
        return [SELECT Id,Name,Industry,Phone FROM Account LIMIt 10];
    }



    public class WrapperData{
        @auraEnabled public String accountName;
        @auraEnabled public String accountPhone;
        @auraEnabled public String accountIndustry;
        @auraEnabled public String status;

    }

    @AuraEnabled
    public static  List<WrapperData> getAccountsData(){
        List<WrapperData> wrapperDataList=new List<WrapperData>();
        
            for(Account accObj:[SELECT Id,Name,Phone,Industry FROM Account LIMIT 10]){
                WrapperData obj=new WrapperData();
                obj.accountName=accObj.Name;
                obj.accountPhone=accObj.Phone;
                obj.accountIndustry=accObj.Industry;
                obj.status='success';
                wrapperDataList.add(obj);
            }
            
        
        return wrapperDataList;
    }



    public class AccConWrapper{
        @auraEnabled public String accName;
        @auraEnabled public String accPhone;
        @auraEnabled public String accIndustry;
        @auraEnabled public String conFirstName;
        @auraEnabled public String conLastName;
        @auraEnabled public String conEmail;
    }

    @AuraEnabled
    public static List<AccConWrapper> getAccConData(){

        List<AccConWrapper> wrapperDataList = new List<AccConWrapper>();
        List<Account> accList=[SELECT Id,Name,Industry,Phone FROM Account LIMIt 10];
        List<Contact> conList=[SELECT FirstName,LastName,Phone,Email FROM Contact LIMIT 10];
        for(integer i=0;i<10;i++){
            AccConWrapper obj=new AccConWrapper();
            obj.accName=accList[i].Name;
            obj.accIndustry=accList[i].Industry;
            obj.accPhone=accList[i].Phone;
            obj.conFirstName=conList[i].FirstName;
            obj.conLastName=conList[i].LastName;
            obj.conEmail=conList[i].Email;
            wrapperDataList.add(obj);
        }
        return wrapperDataList;
    }
}