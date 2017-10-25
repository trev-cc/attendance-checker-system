# attendance-checker-system

A list of things happening int his app:

* we provide express service endpoints using HTTP
* we utilize Mongoose to communicate with a MongoDB database
* using markdown or markdown cheat sheeet to create this README

## Tutorials and Things to remember:

* install MongoDB on C9: [here](https://community.c9.io/t/setting-up-mongodb/1717)
* update MongoDB on C9 to 3.x: [here](https://community.c9.io/t/updating-mongodb/3914)

Here are the commands to update MongoDB

sudo apt-get remove mongodb-org mongodb-org-server

sudo apt-get autoremove

sudo rm -rf /usr/bin/mongo*

echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list

sudo apt-get update

sudo apt-get install mongodb-org mongodb-org-server

sudo touch /etc/init.d/mongod

sudo apt-get install mongodb-org-server