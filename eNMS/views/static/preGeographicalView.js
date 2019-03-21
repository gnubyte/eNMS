/*
global
alertify: false
fCall: false
*/

const layers = { // eslint-disable-line no-unused-vars
  'osm': 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
  'gm': 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}&s=Ga',
  'nasa': 'http://tileserver.maptiler.com/nasa/{z}/{x}/{y}.jpg',
};

let selectedObject; // eslint-disable-line no-unused-vars
let markersArray = []; // eslint-disable-line no-unused-vars
let polylinesArray = []; // eslint-disable-line no-unused-vars

/**
 * Export project to Google Earth (creation of a .kmz file).
 */
function exportToGoogleEarth() { // eslint-disable-line no-unused-vars
  const url = '/views/export_to_google_earth';
  fCall(url, '#google-earth-form', function(result) {
    alertify.notify(`Project exported to Google Earth.`, 'success', 5);
    $('#google-earth').modal('hide');
  });
}
