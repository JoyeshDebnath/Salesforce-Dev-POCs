@isTest
private class ContactControllerTest {

@isTest
    static void testGetContacts(){
        List<Contact> conList=new List<Contact>();
        for(Integer i=0;i<10;i++){
            Contact con=new Contact();
            con.FirstName='Test Contact '+i;
            con.LastName='Test Contact '+i;
            conList.add(con);
        }
        insert conList;
        Test.startTest();
        List<Contact> contacts=ContactController.getContacts();
        Test.stopTest();
        System.assertEquals(10,contacts.size());
    }
}