'use strict';

const path = require('path');
const Generator = require('yeoman-generator');
const mkdir = require('mkdirp');

module.exports = class extends Generator {

    paths() {
        this.destinationRoot('./');
    }

    prompting() {

        console.log('\n' +
            '+-----------------------------------+\n' +
            '| G o | c o d e | g e n e r a t o r |\n' +
            '+-----------------------------------+\n' +
            '\n');

        let cb = this.async();

        let prompts = [{
            type: 'input',
            name: 'appName',
            message: 'What is the name of your application?',
            default: 'myapp'
        }];

        return this.prompt(prompts).then(props => {
            this.appName = props.appName.replace(/\s+/g, '-').toLowerCase();
            cb()
        });

    }

    writing() {
        console.log('Generating tree folders');
        let pkgDir = this.destinationPath('pkg');
        let srcDir = this.destinationPath(this.appName);
        let binDir = this.destinationPath('bin');

        mkdir.sync(pkgDir);
        mkdir.sync(srcDir);
        mkdir.sync(binDir);

        this.fs.copy(
            this.templatePath('_gitignore'),
            path.join(srcDir, '.gitignore')
        );
        this.fs.copy(
            this.templatePath('_.dockerignore'),
            path.join(srcDir, '.dockerignore')
        );
        this.fs.copy(
            this.templatePath('_Gopkg.lock'),
            path.join(srcDir, 'Gopkg.lock')
        );
        this.fs.copy(
            this.templatePath('_Gopkg.toml'),
            path.join(srcDir, 'Gopkg.toml')
        );
        this.fs.copy(
            this.templatePath('_hello.go'),
            path.join(srcDir, '/hello/hello.go')
        );
        this.fs.copy(
            this.templatePath('_hello_test.go'),
            path.join(srcDir, '/hello/hello_test.go')
        );


        let tmplContext = {
            appName: this.appName
        };

        this.fs.copyTpl(
            this.templatePath('_main.go'),
            path.join(srcDir, 'main.go'),
            tmplContext
        );
        this.fs.copyTpl(
            this.templatePath('_README.md'),
            path.join(srcDir, 'README.md'),
            tmplContext
        );
        this.fs.copyTpl(
            this.templatePath('_Makefile'),
            path.join(srcDir, 'Makefile'),
            tmplContext
        );
        this.fs.copyTpl(
            this.templatePath('_.travis.yml'),
            path.join(srcDir, '.travis.yml'),
            tmplContext
        );
        this.fs.copyTpl(
            this.templatePath('_Dockerfile'),
            path.join(srcDir, 'Dockerfile'),
            tmplContext
        );

    }
};
