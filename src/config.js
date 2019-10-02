var config = {}

config.host = process.env.HOST || "https://aruunk-umlprj-cosmos.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "Evf8EMaQc5yUdOueJMNdYzc1QXM7clG1wAlAt93upt51waSN9gqvWK87E0B5eXD8xjA1ykeZh3Xpc0zWV3cRrg==";
config.databaseId = "ToDoList";
config.collectionId = "Items";

module.exports = config;
