#!/usr/bin/env bash

npm install
bundle exec jekyll build
bundle exec htmlproofer ./_site
