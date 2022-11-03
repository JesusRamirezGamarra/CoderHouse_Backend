module.exports = {
    apps: [
        {
            name: 'app-api-01',
            script: 'src/index.js',
            watch: true,                    // true : la aplicacion se auto restart si existe un cambio en el directorio del app.
            max_memory_restart : '100M',    // Maximo de memoria, si es alcanzado el APP hace restart
            autorestart: true,
            // instances: 4,
            // args: '--PORT=8080',
        },
        {
            name: 'app-api-02',
            script: 'src/index.js',
            watch: true,
            autorestart: true,
            instances: '1',
            increment_var : 'PORT',         // Incrementa el PORT ( hasta encontrar disponible ) x cada instancia al iniciar o reiniciar.
            node_args: "--harmony",
            cron_restart : "59 23 * * *",   // Patron se reinicio 23:59 se auto restart.
            
            env: {
                "PORT": 8081,
                "MODE": "DEV"
            },
            env_production: {
                NODE_ENV: "PROD"
            }                        
            // args: '--PORT=8081',
        }//,
        // {
        //     script: './service-worker/',
        //     watch: ['./service-worker'],
        // },
    ],
};
