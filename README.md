# microservice_project

Communication protocol: TCP
Framework: Nest.js

1. Backend/GateWay

  This acts as the backend server which deals with all api endpoints. This creates a basic user object and stores it inside local file. After storing it emits an event to analytics service which stores the timestamp of the created user.

2. Analytics Service

  This is a microservice, that consumes the event fired from backend server and stores the timestamp of created user. It also returns the stored data back to backend server in response to the send event triggered at backend server, which is then returned as a response of the /analytics api to client.
