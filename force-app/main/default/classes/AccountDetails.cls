public with sharing class AccountDetails {
    private String accountName;
    public String rating{get; private set; }

    public String getAccountName(){
        return this.accountName;
    }
    public void setAccountName(String name){
        this.accountName = name;
    }
    
    public  class AccountWrapper 
    {
        private String accountName;
        private Integer noOfEmployees;
        
    }
    
}