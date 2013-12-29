bid
===

Business Intelligence Dashboard

Install
- install node.js
    - see http://nodejs.org/

- install yeoman
    - https://github.com/yeoman/yeoman/wiki/Getting-Started
    sudo npm install -g yo
    sudo npm install -g generator-angular

- build project
    npm install
    bower update
    grunt

- install elasticsearch
    download from http://www.elasticsearch.org/download/
    run /elasticsearch-0.90.9/bin/elasticsearch -f

- install Sense in chrome
    - https://chrome.google.com/webstore/detail/sense/doinijnbnggojdlcjifpdckfokbbfpbo

- put mappings
PUT /system1
{
    "settings": {
        "index.number_of_shards": 1,
        "index.number_of_replicas": 0
    },
    "mappings": {
        "book": {
            "_timestamp": {
                "enabled": "true"
            },
            "properties": {
                "created": {
                    "type": "date",
                    "format": "yyyy-MM-dd HH:mm:ss"
                }
            }
        }
    }
}

- start client
    grunt serve
