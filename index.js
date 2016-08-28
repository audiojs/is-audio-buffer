/**
 * @module  is-audio-buffer
 */
'use strict';

module.exports = function isAudioBuffer (buffer) {
	//the guess is duck-typing
	return buffer != null
	&& buffer.sampleRate != null //swims like AudioBuffer
	&& typeof buffer.getChannelData === 'function' //quacks like AudioBuffer
};
