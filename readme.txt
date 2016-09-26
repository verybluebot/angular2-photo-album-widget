// Readme file

// This project have 3 parts
1. `photo-album-widget` is the assignment it self, use it a component in your project
2. `photo-album` is a testing app with soul purpose of showing 'photo-album-widget' work
3. `photo-album-serve` is a small server written in Golang to serve images.json (the amazon server is broken, more on that below)

// Usage for `Photo-Album-widget`
1. insert the folder to `app` inside your project
2. use `<app-photo-album></app-photo-album>`  to use widget
3. use [feed] property for json file url (if you use the provided server use http://127.0.0.1:9000/images)

// Usage for `Photo-Album`
1. make sure you have `angular-cli` installed
2. `cd` into `photo-album`
3. run `ng serve`
NOTE: `photo-album` is using the go server (photo-album-server) by default so its best to
run the server first before running `photo-album` to avoid 404 responses

// Usage for 'Photo-Album-Server'
NOTE: amazon server which runs the api for getting the images json file, does not
support CORS so when running locally the app wont be able to get the json (attempting to make a cros origin req).
for this reason I dumped the json to a file and created a simple server (in Golang) to serve it
this server does support OPTION header and is cross origin.
1. to run the server on linux/mac `cd` into `photo-albom-server/bin`
2. run `./main`
3. server will start on port :9000 by default
4. GET /images is the api for getting the json content

NOTE:
1. the assignment is set for 4 days from getting it so this is not a finished project but what was achieved in 4 days (bruto)
2. time spent on work/learning is 1 day and 1 night (neto)
