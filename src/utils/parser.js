/**
 * Created by qtisa on 2017/6/1.
 */


function createMapping (table) {
  return (_data, _resolve) => {
    let dataArray = _data,
      _table = table, _add = _table.add;
    if (!(dataArray instanceof Array)) {
      dataArray = [ dataArray ];
    }
    if (_add) {
      delete _table.add;
    }
    let solution = dataArray.map( d => {
      let result = {};
      for (var i in table) {
        if (table.hasOwnProperty(i)) {
          let ti = table[i];
          if (typeof ti.parse == 'function' && ti.field) {
            let _fields = ti.field.split(','),
              _params = _fields.map( _field => d[_field.trim()]);
            result[i] = ti.parse.apply(null, _params);
          }
          else {
            result[i] = d[ti];
          }
        }
      }
      if (_add) {
        result = Object.assign(d, result);
      }
      return result;
    });
    if (!(_data instanceof Array)) {
      solution = solution[0];
    }
    return _resolve(solution);
  }
}


export function parserify (parser, callback, options) {
  let _callback = callback,
    _options = Object.assign({
      withError: false,
      callbackNodify: true
    }, options),
    parse;
  let cb = function (err, payload, func) {
    _options.callbackNodify ? func(err, payload) : func(payload);
  };
  if (typeof parser == 'object') {
    parse = createMapping(parser);
  }
  else if (typeof parser == 'function') {
    parse = parser;
  }
  return _options.withError ?
    (err, data) => {
      parse ?
        parse(data, result => cb(err, result, _callback)) :
        cb(err, data, _callback);
    } :
    data => {
      parse ?
        parse(data, result => cb(null, result, _callback)) :
        cb(null, data, _callback);
    };
}

export function parse (item, parser) {
  return createMapping(parser)(item, sol => sol);
}


