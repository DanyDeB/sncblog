const { DateTime } = require("luxon");

module.exports = function(elventyConfig) {

    elventyConfig.addPassthroughCopy('./style.css');
    elventyConfig.addPassthroughCopy('./assets')
    
    elventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    })
    
    return {
        dir: {
            input: "./",
            output: "public"
        }
    }
}