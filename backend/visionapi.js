function VisionAPI(image) {
  const vision = require('@google-cloud/vision');
  const states_names = require('../frontend/voter-app/src/static_data/states_names.js');
  const client = new vision.ImageAnnotatorClient({
      keyFilename: 'APiKey.json'
  });
  client
    .documentTextDetection(image)
    .then(response => {
      for (state of states_names) {
        if (response[0].fullTextAnnotation.text.includes(state)) {
          return state;
        }
      }
      return('No state found!');
    })
    .catch(err => {
      return('Image error!!!');
    });

}

module.exports = VisionAPI;



