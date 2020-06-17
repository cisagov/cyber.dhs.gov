#!/usr/bin/env bash

npm install
bundle exec jekyll build
# We want to ignore things like <a href="#">Return to top</a>
bundle exec htmlproofer ./_site --url-ignore "/#/" --typhoeus-config '{ "ssl_verifypeer": false }'
