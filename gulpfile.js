var gulp = require('gulp'),
	nodemon = require('gulp-nodemon');

var gulpMocha = require('gulp-mocha');


	gulp.task('default',function(){
		nodemon({
			script: 'app.js',
			ext: 'js',
			env: {
				PORT:7800
			},
			ignore:['./node_modules/**']
		})
		.on('restart',function(){
			console.log('Restarting');
		});
	});


	
