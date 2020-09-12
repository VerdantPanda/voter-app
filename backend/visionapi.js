function VisionAPI(image) {
  const vision = require('@google-cloud/vision');
  const client = new vision.ImageAnnotatorClient({
      keyFilename: 'APiKey.json'
  });
  client
    .documentTextDetection(image)
    .then(response => {
      return(response);
    })
    .catch(err => {
      return('Image error!!!');
    });

}
export default VisionAPI;
