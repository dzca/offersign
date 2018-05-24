#!/usr/bin/env bash

################################################
# Packaging the application
################################################
APP_NAME=offersign

tar -czf ../$APP_NAME-pkg.tar.gz ../dist/
chmod 755 ../$APP_NAME-pkg.tar.gz
