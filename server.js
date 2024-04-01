const sdk = require('api')('@render-api/v1.0#34i64rhilu8ilhkj');

sdk.auth('rnd_ogXwcOrw0FplVELYIliHVFSwL7Xa');
sdk.getServices({limit: '20'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));