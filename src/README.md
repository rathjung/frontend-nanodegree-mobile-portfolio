# Website Performance Optimization portfolio project

My udacity front-end developer nanodegree project 4.

### Changelog:

#### index.html
* inline `style.css`
* add media query to print.css link
* resize `pizzeria.jpg` image to new smaller file
* optimized all images.
* move `perfmatters.js` and Google Analytic Code to before body close
* add Webfont Code for loading Google fonts.
* add async to `analytics.js` call
* minify CSS and JS.

#### views/js/main.js
* remove determineDx function and create function `changePizzaSizes` to change the size of pizzas.
* use switch statement to set the value of variable `newWidth` instead of return the value for further calculation.
* create variable `randomPizza` to stored value from `document.getElementsByClassName("randomPizzaContainer")`.
* use `document.getElementsByClassName("randomPizzaContainer")` instead of `document.querySelectorAll(".randomPizzaContainer")` for better performance.
# create variable len in `changePizzaSizes` to make the loop didn't have to check the length everytime.
* declare variable `pizzasDiv` outside of the for loop so function only make one DOM call.
* use `document.getElementsByClassName('mover')` instead of `document.querySelectorAll('.mover')` for better performance.
* new variable `scrollFromTop` to store the value of `document.body.scrollTop` for the loop didn't have to get the value every time.
* declare var phase outside of the loop. Make it didn't have to re-create every time.
# create variable len in `updatePositions` to make the loop didn't have to check the length everytime.
* declare variable `elem` outside of the for loop to prevent it being created every time.
* use `document.getElementById("movingPizzas1")` instead of `document.querySelector("#movingPizzas1")` for better performance.
* reduce number of loop to 40 for more appropriate to most screen resolution.


## How to start the program ?
1. Open `build/index.html`.
2. Copy the url to [Google PageSpeed Insight](https://developers.google.com/speed/pagespeed/insights/).
3. Check for the pageSpeed.
4. Now back to index.html.
5. Open Chrome's Dev Tool (or Dev Tools of other browsers) then navigate to timeline.
6. Record the performance.

## How to build the program ?
1. Install gulp at [gulpjs](http://gulpjs.com/)
2. Open terminal, navigate to project directory and then run gulp.
3. You can change gulp task via `gulpfile.js` in the project root.
4. If you want to edit any files edit it in `src/` directory.
5. Then run `gulp` again and use the file in `build/`.
6. For further information about gulp please visit gulp website above.

Developed by [Rath Panyowat](http://rath.asia)