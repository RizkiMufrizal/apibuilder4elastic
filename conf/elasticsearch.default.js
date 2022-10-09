const fs = require("fs");

module.exports = {
    pluginConfig: {
        "@axway-api-builder-ext/api-builder-plugin-fn-elasticsearch": {
            elastic: {
                nodes: process.env.ELASTICSEARCH_HOSTS
                    ? process.env.ELASTICSEARCH_HOSTS.split(",")
                    : "http://your.elasticsearch.host:9200",
                // The name to identify the client instance in the events.
                name: process.env.ELASTICSEARCH_CLIENT_NAME || "apibuilder4elastic",
                // You can use all configuration options documented here:
                // https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/master/client-configuration.html
                maxRetries: 5,
                requestTimeout: 60000
            },
            // The connection to Elasticsearch is validated on API-Builder startup by default
            // It can be disabled by setting this to false.
            validateConnection: "false" == process.env.VALIDATE_ELASTIC_CONNECTION ? false : true
        }
    }
};
