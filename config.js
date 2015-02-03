
module.exports = function () {

  configs = {
    'default': {}
  }
  return configs[ process.env.ENV_CONF || 'default' ];
};
