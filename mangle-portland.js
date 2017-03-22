#!/usr/local/bin/node

for (i = 2; i < process.argv.length; i++) {
	console.error(process.argv[i]);

	var data = require('./' + process.argv[i]);

	for (j = 0; j < data.features.length; j++) {
		var s = data.features[j].attributes.FilePath.replace(/\.pdf$/, '.xml').replace(/.*tmc.cfm\?/, '');

		// console.log(data.features[j].attributes.FilePath + "," + data.features[j].geometry.y + "," + data.features[j].geometry.x);
		console.log(s + "," + data.features[j].geometry.y + "," + data.features[j].geometry.x);
	}
}
