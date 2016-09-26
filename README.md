# Photo Album Widget

## This project have 3 parts
1. `photo-album-widget` is the assignment it self, use it a component in your project
2. `photo-album` is a testing app with soul purpose of showing 'photo-album-widget' work
3. `photo-album-server` is a small server written in Golang to serve images.json (the amazon server is broken, more on that below)

### Installation
1. clone project localy:
```
  git clone https://github.com/verybluebot/angular2-photo-album-widget-.git
```

### Usage for Photo-Album-Widget
1. insert the folder to `app` inside your project
2. use `<app-photo-album></app-photo-album>`  to use widget
3. use [feed] property for json file url (if you use the provided server use http://127.0.0.1:9000/images)

### Usage for Photo-Album
1. make sure you have `angular-cli` installed
2. `cd` into `photo-album`
3. run `npm install`
4. run `ng serve`

NOTE: `photo-album` is using the go server (photo-album-server) by default so its best to
run the server first before running `photo-album` to avoid 404 responses

### Usage for Photo-Album-Server
NOTE: Amazon server which runs the api for getting the images json file, does not
support CORS so when running locally the app wont be able to get the json (attempting to make a cros origin req).
for this reason I dumped the json to a file and created a simple server (in Golang) to serve it
this server does support OPTION header and is cross origin.
1. To run the server `cd` into `photo-albom-server/bin`
2. Run `./main`
3. Server will start on port :9000 by default
4. GET /images is the api for getting the json content

NOTE:
1. The assignment is set for 4 days from getting it so this is not a finished project but what was achieved in 4 days (bruto)
2. Time spent on work/learning is 1 day and 1 night (neto)
