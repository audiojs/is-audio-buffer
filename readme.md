Check whether an object is instance of [AudioBuffer](http://webaudio.github.io/web-audio-api/#AudioBuffer).

## Usage

[![npm install is-audio-buffer](https://nodei.co/npm/is-audio-buffer.png?mini=true)](https://npmjs.org/package/is-audio-buffer/)

```js
var isAudioBuffer = require('is-audio-buffer');
var ctx = require('audio-context');
var AudioBuffer = require('audio-buffer');

isAudioBuffer(ctx.createBuffer(2, 100, 44100)); //true
isAudioBuffer(new AudioBuffer([1, 0, 1, 0])); //true
```

There are too many implementations of AudioBuffer ([1](https://www.npmjs.com/package/audiobuffer), [2](https://www.npmjs.com/package/audio-buffer), [3](https://github.com/sebpiq/node-web-audio-api/blob/master/lib/AudioBuffer.js), [4](https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer)) to rely on `a instanceof AudioBuffer`.