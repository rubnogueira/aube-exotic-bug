import imagemin from 'imagemin';
import imageminGifsicle from 'imagemin-gifsicle';

const imageMinOpts = {
  plugins: [
    imageminGifsicle({ optimizationLevel: 2 }),
  ],
};

console.log(await imagemin(['src/a.gif'], imageMinOpts));