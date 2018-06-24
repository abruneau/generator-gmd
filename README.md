<a href="https://codeclimate.com/github/abruneau/generator-gmd/maintainability"><img src="https://api.codeclimate.com/v1/badges/b73387d211ce4f09286e/maintainability" /></a>
<p align="center" style="margin-bottom: 20px; width: 100px; margin: auto">
<img src="https://golang.org/doc/gopher/frontpage.png"/>
</p>

# A golang code generator

A [Yeoman](http://yeoman.io) generator for the [golang](http://golang.org/) programming language.

### What is golang ?

See the [Golang documentation](https://golang.org/doc/)

### Why a generator ?

The Golang team defined [guidelines](https://blog.golang.org/organizing-go-code) to organize code and structure an application.

The generator builds a standard directory hierarchy complying with those guidelines.

## Vendoring

This example relies on vendoring for all dependencies. It
uses [go dep](https://github.com/golang/dep) for this purpose.

## Versioning

Version is extracted from git tags using anything prefixed by `v`.


## Usage

The following commands are available:

 - `make help` to get help
 - `make` to build the binary (in `bin/`)
 - `make test` to run tests
 - `make test-verbose` to run tests in verbose mode
 - `make test-race` for race tests
 - `make test-xml` for tests with xUnit-compatible output
 - `make test-coverage` for test coverage (will output `index.html`,
   `coverage.xml` and `profile.out` in `test/coverage.*/`.
 - `make test PKG=helloworld/hello` to restrict test to a package
 - `make clean`
 - `make vendor` to retrieve dependencies
 - `make lint` to run golint
 - `make fmt` to run gofmt

**That's all folks !**


This will generate a minimalist directory hierarchy, a makefile and a .gitignore.

<pre>
myapp
  ├── hello
  │   ├── hello.go       # source file
  │   └── hello_test.go  # test file
  ├── main.go            # app entrypoint
  ├── Makefile
  ├── README.md
  ├── .dockerignore
  ├── Dockerfile
  ├── Gopkg.lock
  ├── Gopkg.toml
  └── .gitignore
</pre>


## How to contribute


1. Fork the project

2. Clone your forked project locally

```
$ sudo git clone https://github.com/your_repo/generator-gmd.git
$ cd generator-gmd
```

3. Modify sources

4. Symlink the package folder

```
$ sudo npm link
```

5. Test your generator

```
$ yo gmd
```

6. Submit a pull request

This project welcomes all contributors, feel free to apply !

## Dependencies

This project depends on

* [golang](http://golang.org/)
* [Yo](https://github.com/yeoman/yo) (the scaffolding tool from Yeoman)
* [GNU make](https://www.gnu.org/software/make/manual/make.html)


## Acknowledgment

This project is based on multiple project
* [bench/generator-go](https://github.com/bench/generator-go) has a very nice go generator
* [vincentbernat/hellogopher](https://github.com/vincentbernat/hellogopher) is the author of the Makefile
* [Pierre Prinetti](https://medium.com/@pierreprinetti/the-go-dockerfile-d5d43af9ee3c) inspired me the Dockerfile

<p align="center" style="margin-bottom: 20px; width: 100px; margin: auto">
<img src="http://talks.golang.org/2014/go4gophers/gopherswim.jpg"/>
</p>
