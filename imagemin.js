const imagemin = require("imagemin");
const PNGImages = "assets/images/*.png";
const JPEGImages = "assets/images/*.jpg";
const output = "build/images";

const imageminMozjpeg = require("imagemin-mozjpeg");
const optimiseJPEGImages = () =>
  imagemin([JPEGImages], {
    destination: output,
    plugins: [imageminMozjpeg({ quality: 70 })]
  });

const imageminPngquant = require('imagemin-pngquant');
const optimisePNGImages = () =>
  imagemin([PNGImages], {
    destination: output,
    plugins: [imageminPngquant({ quality: [0.65, 0.80] })]
  });
optimiseJPEGImages()
    .then(() => optimisePNGImages())
    .catch(error => console.log(error));
