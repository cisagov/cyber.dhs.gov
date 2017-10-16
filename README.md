
## cyber.dhs.gov


### Standing on the shoulders of :us:
* The application is optimized for deployment on 18F's [Federalist](https://federalist.18f.gov) static site hosting service.
* The [U.S. Web Design Standards](https://standards.usa.gov), a set of reusable, high quality components for modern websites. [Many other U.S. government websites use the Standards](https://github.com/18F/web-design-standards/blob/develop/WHO_IS_USING_USWDS.md#website-and-applications-that-use-the-standards).


A special thanks to the teams at [GSA](https://github.com/GSA/)/[18F](https://github.com/18F/) for their open and transparent model, which benefits citizens, government, and technology.


### Developing locally

If you're using this repository to run the site locally, follow these instructions.

Dependencies:

* **Node 6+** to install USWDS and dependencies
* **Ruby** and **bundler** to install / run [Jekyll](https://jekyllrb.com).

#### First-time setup
1. Clone this repo.
2. `npm install` to install the USWDS, and Gulp dependencies.
3. `npm install -g gulp` to let you use the `gulp` CLI directly.
4. `bundle install` to install Jekyll.

#### Running the app

If you'll be editing the Sass/CSS:

* `gulp watch`

To run the app:

* `bundle exec jekyll serve`

If all goes well, visit the site at `http://localhost:4000`.


### Public domain

This project is in the worldwide [public domain](LICENSE.md).

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.
