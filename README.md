# BackendDevelopmentTruffle
BackendDevelopmentAssessment

Instructions for running the Application:

1. Clone the repository from github using the below command:

      git clone https://github.com/Mohib1402/BackendDevelopmentTruffle.git
      
2. Once the repository is cloned, use the terminal or command-line to get into the BackendDevelopmentTruffle directory using the below command:
      
      cd BackendDevelopmentTruffle
      
3. Run the node server using the given command:
      
      node server.js

4. Now Launch Postman and click the "Send a Request" button and In the "Enter Request URL" field, enter the below given url:
      
      http://localhost:3000/items
      
5. Click the "Send" button to send a GET request to the /items endpoint.
Postman will display the server's response in the "Response" panel. You should see an empty JSON array, like this:

[]

This indicates that the server received your GET request and responded with an empty array, since there are no medical bills created yet.

6. To create a new medical bill, switch the request type from "GET" to "POST" using the dropdown menu next to the URL field.

7. The default tab would be Params but to send in a "POST" request, switch to the "Body" tab, select the "raw" option, and make sure the "JSON" format is selected.

8. In the editor, paste the following JSON payload:

{
  "patientName": "John Doe",
  "patientAddress": "123 Main St",
  "hospitalName": "St. Mary's Hospital",
  "dateOfService": "2023-02-14",
  "billAmount": 1000
}

9. Click the "Send" button to send the POST request to the /items endpoint.

10. Postman will display the server's response in the "Response" panel. You should see a JSON object representing the newly created medical bill, like this:

{
  "patientName": "John Doe",
  "patientAddress": "123 Main St",
  "hospitalName": "St. Mary's Hospital",
  "dateOfService": "2023-02-14",
  "billAmount": 1000
}

11. To verify that the medical bill was actually created, send another GET request to the /items endpoint by clicking the "Send" button again in the "GET /items" tab. This time, the response should contain an array with the medical bill object that you just created.

12. But as soon as you stop the server, the data will be wiped since there is no database to handle that, but that can be easily implemented!
