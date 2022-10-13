module.exports = {
  apps : [
    {
      name   : "formkeada1",
      script : "pm2/app.js",
      env:{
        PORT:8080
      },
      watch :true
    },
    {
      name   : "formkeada2",
      script : "pm2/app.js",
      env:{
        PORT:8081
      },
      watch :true
    },    
    {
      name   : "Clusterizado",
      script : "pm2/app.js",
      env:{
        PORT:8082
      },    
      exec_mode: "cluster",
      node_args: "--harmony",
      instances:6,
      watch :true
    }
]}
