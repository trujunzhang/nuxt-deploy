## IEATTA – Eating Restaurant Tracker!

# How to use Learna to build the universal app for ieatta.

### web using next.js. (Demo)
$ project template: next.js-canary/examples/with-typescript/##
$ yarn dev

$ mkdir app-avatar    

### How to build the app-avatar.

$ yarn build-lib

### Using app-avatar as other app's dependencies library. 

#### For ieatta app.
$ cd /packages/app && lerna add app-avatar --scope=ieatta

#### For app avatar web demo.
$ cd /packages/app-avatar-web-demo && lerna add app-avatar --scope=app-avatar-web-demo


