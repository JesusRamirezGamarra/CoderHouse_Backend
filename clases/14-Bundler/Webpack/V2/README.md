npm install webpack webpack-cli


```
  "scripts": {
    "build": "webpack ./Console01.js ./Console02.js ./Console03.js --mode=development",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```


npm run build
node dist/main.js


```
  "scripts": {
    "build": "webpack ./Mensaje01.js ./Mensaje02.js ./Mensaje03.js --mode=production",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

npm run build
node dist/main.js
