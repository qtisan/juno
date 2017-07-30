/**
 * Created by qtisa on 2017/7/30.
 */

const { readFileSync, writeFileSync, mkdirSync, existsSync } = require('fs');
const { join, sep } = require('path');
const walk = require('walk');

// replace it with the app name
const APP_NAME = 'tc';

const pl = '__app_placeholder__';
const placeholder = new RegExp(pl, 'g');
const replace = text => text.replace(placeholder, APP_NAME);
const resolve = path => path.replace(sep + 'sample', '').replace(placeholder, APP_NAME);
const createDir = path => {
  if (!existsSync(path)) {
    mkdirSync(path);
  }
};

const options = {
  listeners: {
    directory: (root, stats, next) => {
      let originalPath = join(root, stats.name);
      let path = resolve(originalPath);
      createDir(path);
      console.log(`create dir: ${path}`);
    },
    file: (root, stats, next) => {
      let name = stats.name;
      if (name !== 'create.js') {
        let originalPath = join(root, name);
        let path = resolve(originalPath);
        writeFileSync(path, replace(readFileSync(originalPath).toString('utf-8')));
        console.log(`create file: ${path}`);
      }
    },
    end: () => console.log('create finished.')
  }
};

walk.walkSync(__dirname, options);

// TODO: add entry to `.roadhogrc.js`
