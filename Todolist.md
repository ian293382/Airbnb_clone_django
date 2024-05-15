# Airbnb_clone_django 
    這是一連串經過python 初學教程 親自設計專案後 經過OOP Restful API LeetCode 初學階段接著實作題目

## Django bnb Todo list


### front end

+ Install and set up Next.js create project [v]
+ Code for nav bar [v]
+ Categories on the front page [v]
+ List properties on the front page (static) [v]
+ Details page for properties (static)  [v]
+ Landlord page (static)  [v]
+ My reservation (static) [v]
+ My properties (static) [v]
+ Inbox page  (static) [v]
+ Detail page for chat (static) [v]
+ User menu popup [v]
+ Create reusable modal window [v]
+ Log in model  (remember error codes) exception design [v]
    => npm install zustand 
+ Sign up model  (remember error codes)  [v]

### backend

+ Set up docker for django with postgresql, etc  [v]
    + Install DRF, cor headers, serializer,etc.   [v]
+ Create user model / config  [v]
+ Create app for properties [v]
+ Create model and serializer for properties  [v]
+ Get properties in the front end and list then   [v]

+ Implement authentication [v]
    + Log in [v]
    + Sign up [v]
    + Log out [v]

* Add properties from next.js [v]
    + create model  [v]
        +  npm Install react-select  [v]
        +  npm install world-countries [v]
    + APi endpoints [v]
    + Send data  [v]
//////////////////// 4/30 0:23
+ Detail page for properties [v]
+ Book property
    + => npm i --save-dev @types/react-date-range [v] (start_date and end_date need)
    + =>  npm install decimal.js [v] (solve price decimal_place) 
+ Land lord page dynamic [v]
+ My properties dynamic [v]
+ My reservations dynamic [v]
+ make ot possible to set property as favorite [v]
+ My favorite page (with listings) [x]
+ Make conversation dynamic [v]

+ Set up Web socket in the backend [v]
    + Installing software (channels, daphne) [v]
    + Configuration [v]
    + Set up basic consumers [v]
    + Set up routing [v]
+ make it possible to connect [v]
    +  npm install react-use-websocket (check: cat package.json) [v]
    + npm install socket.io socket.io-client [v]
+ Send/receive message   [v]
+ Store and  load message [v]
+ Start new conversation [v]

+ Refresh front page automatically

+ Set up search filters
    + Model for search filter  [v]
    + Country search filter  [v]
    + Calendar fo check in / check out dates  [v]
    + Search details(number of guests, bedrooms, etc)  [v]
    + API endpoint  [v]
    + Choose between categories on the front page  [v]

+  Refresh front page automatically

+ Deployment 
    + Create server on GCP set it up 
    + Backend 
        + Create environment
        + Get code form git 
        + Rest of server stuff
    + Frontend 
        + Node,nginx