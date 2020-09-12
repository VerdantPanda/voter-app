async function VisionAPI(image) {
  const vision = require("@google-cloud/vision");
  const client = new vision.ImageAnnotatorClient({
    keyFilename: "APiKey.json",
  });
  var stateFound = "None/Default Value";
  console.log("VisionAPI start!");
  console.log("image:");
  console.log(image);

  try {
    const response = await client.textDetection(image.path);
    states_names.forEach((state) => {
      if (response[0].fullTextAnnotation.text.includes(state)) {
        console.log("VisionAPI found: " + state);
        stateFound = state;
      }
    });
  } catch (error) {
    console.log(error);
  }

  // client
  //   .documentTextDetection(image.path)
  //   .then((response) => {
  //     // states_names.forEach((state) => {
  //     //   if (response[0].fullTextAnnotation.text.includes(state)) {
  //     //     console.log("VisionAPI found: " + state);
  //     //     stateFound = state;
  //     //   }
  //     // });
  //   })
  //   .catch((err) => {
  //     console.log("Vision API Error occured!");
  //     stateFound = "Image Error, No state.";
  //   });

  console.log("VisionAPI done!");
  return stateFound;
}

let states_names = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

module.exports = VisionAPI;
