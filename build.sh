#!/bin/bash

# Update Flash path whenever Flash updated.
# Enter chrome://plugins in Chrome to find location.
export FLASH="/Users/tim/Library/Application Support/Google/Chrome/PepperFlash/24.0.0.186/PepperFlashPlayer.plugin"

nativefier --name Pandora --flash --flash-path "$FLASH"  --inject pandora.js  "http://pandora.com"
