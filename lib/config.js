'use strict';

module.exports = function (env) {
  const NODE_ENV = env.NODE_ENV || 'development';
  const isProd = NODE_ENV === 'production';
  const isTest = NODE_ENV === 'test';
  const isDev = NODE_ENV === 'development';

  const config = {
    env: NODE_ENV,
    isProd: isProd,
    isTest: isTest,
    isDev: isDev
  };

  return Object.assign(config, {
    extend: function (mixin) {
      return Object.assign(config, mixin); // still config
    },

    // utils
    num: function (str, otherwise) {
      return str && isFinite(Number(str)) ? Number(str) : otherwise;
    },
    val: function (str, otherwise) {
      return str || otherwise;
    },
    bool: function (str, otherwise) {
      if (str === 'no' || str === 'false') return false;
      if (str === 'yes' || str === 'true') return true;
      return otherwise;
    },

    // assertions
    has: function (name, msg) {
      if (config[name] === undefined) {
        throw Error(msg || 'missing ' + name);
      }
      return true;
    },
    hasNum: function (name, msg) {
      const val = config[name];
      if (typeof val === 'number' && isFinite(val)) {
        return true;
      }
      throw Error(msg || 'missing ' + name);
    },
    assert: function (b, msg) {
      if (!b) throw Error(msg || 'error');
      return true;
    }
  });
};
