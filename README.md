## Getting Started

The application contains two services client and server in their respective folders.

The application using docker for running the application locally . To run the application , docker and docker-compose services are required.

## To build the application execute the below command 

docker-compose up —d —build 

This will build the container for both the services ( client and server) in a detached mode.

## To start the application ( both front end and back end ) , execute the below command 

docker-compose start 

Once the services are started , the application can be accessed in the URL http://<host_name>:3001 and the graphql can be accessed through the URL http://<host_name>:5001/graphql

##To stop the application , execute the below command 

docker-compose stop 

This will stop both the services running.

## To clean the cache as part of docker build , execute the below command 

docker-compose rm 

This will remove the images of both the services.