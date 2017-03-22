#!/bin/bash

# Update Flash path whenever Flash updated.
# Use the path below as a guide to find Chrome's Flash player on OS X.
export FLASH="/Users/tim/Library/Application Support/Google/Chrome/PepperFlash/25.0.0.127/PepperFlashPlayer.plugin"

nativefier --name Pandora --flash --flash-path "$FLASH"  --inject pandora.js  "https://pandora.com"
