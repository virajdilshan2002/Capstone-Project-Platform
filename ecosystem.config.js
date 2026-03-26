module.exports = {
  apps : [{
    name   : "config-server",
    script : "java -jar ./config-server/target/Config-Server-1.0.0.jar"
  },
    {
      name   : "service-registry",
      script : "./service-registry/target/Service-Registry-1.0.0.jar"
    },
    {
      name   : "api-gateway",
      script : "./api-gateway/target/Api-Gateway-1.0.0.jar"
    }]
}
