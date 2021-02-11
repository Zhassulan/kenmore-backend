
The backend contains user queries and files functionality together.

Setup backend:
    
    - clone project
    - execute in project root 'npm install'
    - install latest stable NodeJS v14
    - install or provide MySQL server v.5 >=
        - create 'kenmore' database 
        - create user 'kenmore' with password
        - change PASSWORD in config/db.config.js to your generated password
        - restore database from dump file in 'db' folder
        - query for point 5 in task located in db/user_queries.sql file
    - start backend by command in project root 'node server.js'
    - for test you can use Postman collection in 'postman' folder         
    
