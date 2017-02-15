# HTML Verify

[![Greenkeeper badge](https://badges.greenkeeper.io/chrisopedia/html-verify.svg)](https://greenkeeper.io/)

A scss/CSS library to point out some bad or malformed HTML.

[![NPM version](https://img.shields.io/npm/v/html-verify.svg)](https://npmjs.org/package/html-verify "View this project on NPM")
[![NPM downloads](https://img.shields.io/npm/dm/html-verify.svg)](https://npmjs.org/package/html-verify "View this project on NPM")
[![Build Status](https://travis-ci.org/chrisopedia/html-verify.svg?branch=master)](https://travis-ci.org/chrisopedia/html-verify)

## Browser Support

- Google Chrome 28+
- Mozilla Firefox 22+
- Apple Safari 5.1+
- Opera 16+
- Internet Explorer 9+

## Installation

- via [NPM](http://npmjs.org/): `npm install --save-dev html-verify`
- via [Component](http://github.com/component/component): `component install chrisopedia/html-verify`
- via [Bower](http://bower.io/): `bower install --save-dev html-verify`

### As a Git Submodule

1. `git submodule add https://github.com/chrisopedia/html-verify.git path/to/ui_directory`
2. Add link: `<link rel="stylesheet" href="/path/to/html-verify/dist/html-verify.level{1 | 2 | 3}.css" />`

### Manual Download

[Latest](/https://github.com/chrisopedia/html-verify/archive/master.zip)

## Usage

### Modes

* 0 => turn off
* 1 => show only errors
* 2 => show errors and warnings
* 3 => show errors, warnings and info

### Using SCSS

```scss
@import '/path/to/html-verify/src/html-verify.level{1 | 2 | 3}';
```

### Customize It

```scss
// Configure the colors for the outlines/background of tips
$verify-colors: (
	error: red,
	warning: yellow,
	info: blue
);
// Configure the color of the text
$verify-message-color: white;

// include the mixin
@import '/path/to/html-verify/src/html-verify';

// call the mixin with the mode passed in
// defaults to 0 (turned off)
@include html-verify(3);
```

#### Default Colors

```scss
$verify-colors: (
	error: rgb(172, 65, 66),
	warning: rgb(244, 191, 117),
	info: rgb(106, 159, 181)
);
$verify-message-color: rgb(255,255,255);
```

## Contribute

[Discover how you can contribute by heading on over to the `CONTRIBUTING.md` file.](https://github.com/chrisopedia/html-verify/blob/master/CONTRIBUTING.md#files)

## Documentation

Documentation is built as a Jekyll-based site that shows you examples of all of
the ways poor code will trigger HTML Verify.  In order to get it running, you'll
need the following:

### Requirements

- [Node](http://nodejs.org/) & [npm](https://npmjs.org/)

### Setup

1. `npm install`
2. `npm start`
3. Open `127.0.0.1:<port>`

## Acknowledgements

HTML Verify is a project by [Newton](http://github.com/chrisopedia/). Inspired by a few projects:

1. [Semantic CSS with Intelligent Selectors](http://coding.smashingmagazine.com/2013/08/20/semantic-css-with-intelligent-selectors/)
2. [DiagnostiCSS](https://github.com/diagnosticss/diagnosticss)
3. [Revenge CSS Bookmarklet](https://github.com/Heydon/REVENGE.CSS)
