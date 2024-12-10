public class GetContactController {
@AuraEnabled 
    public static List<Contact> getCons(){
        return [SELECT Id,
                		FirstName,
                		LastName,
                		Email,
                		Phone 
                		FROM Contact
               			ORDER BY NAME ASC];
    }
@AuraEnabled 
    public static Boolean insertCon(String firstname,String lastname,String phone,String email){
        try{
            Contact con=new Contact();
            con.FirstName=firstname;
            con.LastName=lastname;
            con.Phone=phone;
            con.Email=email;
            insert con;
            return true;
        }catch(Exception e){
            System.debug('Exception ocurred !'+e.getMessage());
            return false;
        }
    }
    
 @AuraEnabled
    public static Contact getContactById(String Id){
       return  [SELECT Id,FirstName,LastName,Email,Phone FROM Contact WHERE Id=:Id];
    }
 @AuraEnabled
    public static Boolean updateContact(String id,String firstname,String lastname, String email){
        
        try{
        Contact con=[SELECT Id,FirstName,LastName,Phone,Email FROM Contact WHERE Id=:id];
        con.FirstName=firstname;
        con.LastName=lastname;
        con.Email=email;
        
        update con;
        
        return true;
        }catch(Exception e){
            return false;
        }
    }
  @AuraEnabled 
    public static Boolean deleteContact(String  Id){
        try{
            delete [SELECT Id, FirstName,LastName FROM Contact WHERE Id=:Id];
            return true;
        }catch(DmlException e){
            System.debug(e.getMessage());
            return false;
        }
    }
}