var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    clean = require("gulp-clean"),
    livereload = require('gulp-livereload'),
    del = require('del'),
    yargs = require('yargs').argv,
    browserSync = require('browser-sync'),
    htmlmin = require('gulp-html-minifier');

gulp.task("default", function () {
    //默认任务 执行多个任务
    gulp.start("htmls", 'styles', 'scripts', 'images'/*, "watch", "server"*/);
});

//压缩htmls
gulp.task("htmls", function () {
    return gulp.src("src/**/*.html")
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest("dist"));
});

//处理css
gulp.task('styles', function () {
    return gulp.src(['src/**/*.css'])
        .pipe(autoprefixer('last 2 version'))//css添加厂商标示 如 -webkit
        /*.pipe(gulp.dest('dist/css'))
         .pipe(rename({suffix: '.min'}))*///生成min文件
        .pipe(cssnano())//压缩css
        /*.pipe(concat("main.css"))*///合并css
        .pipe(gulp.dest('dist'))
        .pipe(notify({message: 'Styles task complete'}));
});

//处理js
gulp.task("scripts", function () {
    return gulp.src("src/**/*.js")
        .pipe(jshint(".jshintrc"))//检查代码错误和质量，输出结果
        .pipe(jshint.reporter("default"))
        /*.pipe(gulp.dest("dist/js"))
         .pipe(rename({suffix: ".min"}))*///生成min文件
        .pipe(uglify())//混淆代码
        .pipe(gulp.dest("dist"))
        .pipe(notify({message: "scripts task ok"}));
});


//压缩图片
gulp.task("images", function () {
    //optimizationLevel优化级别
    //interlaced 交错
    //progressive 先进的
    return gulp.src(["src/**/*.png", "src/**/*.jpg", "src/**/*.bmp"])
        .pipe(imagemin({optimizationLevel: 5, progressive: true, interlaced: true}))
        .pipe(gulp.dest("dist"))
        .pipe(notify({message: "images task ok"}));
});


//清理输出
gulp.task("cleanc", function () {
    del(["dist/*"]);
});

//清理输出
gulp.task("clean", function () {
    return gulp.src("dist/*", {read: false})
        .pipe(clean());
});


//检测文件改动，自动执行任务
//文件改动后，自动重新加载页面
gulp.task("watch", function () {
    // Create LiveReload server
    livereload.listen();

    gulp.watch("*.html", ["htmls"]);
    gulp.watch("src/**/*.js", ["scripts"]);
    gulp.watch("src/**/*.css", ["styles"]);
    gulp.watch(["src/**/*.png", "src/**/*.jpg", "src/**/*.bmp"], ["images"]);

    gulp.watch(["*.html", "js/**/*.js", "css/**/*.css", "images/**/*"]).on("change", livereload.changed);
});

//启动http服务
gulp.task('server', function () {
    yargs.p = yargs.p || 8080;
    browserSync.init({
        server: {
            baseDir: "dist"
        },
        ui: {
            port: yargs.p + 1,
            weinre: {
                port: yargs.p + 2
            }
        },
        port: yargs.p,
        startPath: '/'
    });
});