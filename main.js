#! /usr/bin/env node
var fs = require("fs");
var Tracker = require('./tracker');
var parseArgs = require('minimist')
// Utilities for cleaning up detections input
var isInsideSomeAreas = require('./utils').isInsideSomeAreas;
var ignoreObjectsNotToDetect = require('./utils').ignoreObjectsNotToDetect;
var isDetectionTooLarge = require('./utils').isDetectionTooLarge;

/*
    NOTE: this file is a big mess with piled up code from different use cases
    Should be reworked to be much simpler
    If you are looking for the tracker, look tracker.js file
    this main.js is just giving different way to operate tracker.js
*/

// Export Tracker API to use as a node module
exports.Tracker = Tracker
