public with sharing class ReminderService {

    @AuraEnabled(cacheable=true)
    public static List<sObject> getTodos(){
        try{
            return [SELECT 
                            Id,Subject,ActivityDate,Description 
                            FROM 
                            Task 
                            WHERE 
                            ActivityDate!=null 
                            AND 
                            OwnerId=:UserInfo.getUserId()
                    ];

        }catch(Exception  e){
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled(cacheable = true)
    //Example : objectApiName: 'Task'  | fieldApiName : 'Status' 

    public static List<ReminderService.Picklist> fetchPicklistValues(String objectApiName,String fieldApiName){
        List<ReminderService.Picklist> picklistValueList = new List<ReminderService.Picklist>();
        //Map<String,sObjectType> sobjectTypeMap = Schema.getGlobalDescribe();--->    returns  a map of entire Sobject information 
        //osobjectTypeMap.get(objectApiName)
        Schema.SObjectType sObjectTypeObject=Schema.getGlobalDescribe().get(objectApiName);
        Schema.DescribeSObjectResult describeSObject=sObjectTypeObject.getDescribe();

        Map<String,Schema.SObjectField> fieldsMap=describeSObject.fields.getMap();
        List<Schema.PicklistEntry> picklistEntryList=fieldsMap.get(fieldApiName).getDescribe().getPicklistValues();
        for(Schema.PicklistEntry picklist:picklistEntryList){
            picklistValueList.add(new ReminderService.Picklist(picklist.getLabel(),picklist.getValue()));
        }

        System.debug(System.LoggingLevel.DEBUG, JSON.serialize(picklistValueList));
        return picklistValueList;

    }

    @AuraEnabled
    public static void createToDoItem(String taskStr){
        try {
            Task taskRecord =(Task)JSON.deserialize(taskStr,Task.class);
            insert taskRecord;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
            
        }

    }
    //wrapper class 
    public class Picklist{
        
        @AuraEnabled
        public String label;
        
        @AuraEnabled 
        public String value;

        public Picklist(String label,String value){
            this.label=label;
            this.value=value;
        }
    }
}