# Neighborhood map

Final project for Udacity´s FEND. The project consists in a map displaying points of interest in an area and to provide details for the places retrieving data from a third party web.

## Getting Started

- Download or clone this repository. 

### Prerequisites
- You need [node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed.


### Installing

From the directory, inside the folder, git bash:
```
npm install
```
And right after, git bash:
```
npm start
```
The web should open in your default browser.

## Add more places to map

1. Retrieve place id from foursquare by adding these lines of code in ComponentDidMount:
```
    let placeToCheck = {
        "ll": "40.417955,-3.697572",
        "query": 'Place to search'
    }
    foursquare.venues.getVenues(placeToCheck)
      .then(res=> {
        console.log(res.response)});
```
2. In the previous snippet, change ll, latitud and longitud, and query of the place you want to search.

3. In dev tools console copy the place id and create a new object inside the array _params_ inside buildings.js

4. Remove the previous code add and it is done.

## Built With

* [React](https://reactjs.org/) - JS library
* [react-google-maps](https://github.com/tomchentw/react-google-maps) - Manages all Google maps API requests and asynchronous calls
* [Foursquare API](https://developer.foursquare.com/) - Used to retrieve data for the places

## Contributing

Academic exercise, pull request may not be accepted

## License

This project is licensed under the MIT License - see the License.md file for details
