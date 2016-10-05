/// <reference path="./types.d.ts" />
import {readFiles} from 'node-dir'


(function () {
	let dirName = './testing';

	readFiles(dirName,
		function (err, content, filename, next) {
			if (err) throw err;
			console.log(`${filename}: ${content}`);
			next();
		},
		function (err, files) {
			if (err) throw err;
			console.log('finished reading files:', files);
		}
	);
})();