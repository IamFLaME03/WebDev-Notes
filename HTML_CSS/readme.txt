p1 - basic html layout, h,p tags, anchor tag <br>
p2 - image, table, list(only html)<br>
p3 - Inline/Block elements, forms, SVG, iFrame tag(for embed another html page/site), code/pre tag
css start...<br>
p4 - selectors, box model, margin collapse concept, fonts, colors<br>
p5 - sizing<br>
p6 - display properties, List stylings, Overflow properties<br>
p7 - Position properties, Float & Clear property, Flex box, gap,order properties<br>
p8 - Transform Properties, Transition, Animation Properties,Object-fit properties, Filters for img<br>

exercise 3 - create card using html, css only<br>
exercise 4 - develop navbar<br>
exercise 5 - layout design<br>
exercise 8 - ball jumping animation <br>


Other Topics :

background property : https://developer.mozilla.org/en-US/docs/Web/CSS/background
overflow : https://developer.mozilla.org/en-US/docs/Web/CSS/overflow
box-shadow : https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
opacity : https://developer.mozilla.org/en-US/docs/Web/CSS/opacity
attribute selectors : https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-advanced-selectors#attribute-selectors
    [attribute] - This general selector will select anything where the given attribute exists. Its value doesn’t matter.
    selector[attribute] - Optionally we can combine our attribute selectors with other types of selectors, such as class or element selectors.
    [attribute="value"] - To get really specific, we can use = to match a specific attribute with a specific value.
    [attribute^="value"] - ^= Will match strings from the start.
    [attribute$="value"] - $= Will match strings from the end.
    [attribute*="value"] - *= The wildcard selector will match anywhere inside
clamp() function - https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-css-functions#clamp

custom properties,
var() function - https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-custom-properties#using-custom-properties
    it has two parameters - custom property and fallback value(if 1st one is invalid or not declared yet then it will be consider)
    A better solution is declaring those custom properties on the :root selector, which is essentially the same thing as the html selector except it has a higher specificity.
    Note : as the browser doesn’t know that 0deg and 360deg are valid angle values. You have to define them as an <angle> type with @property for that to work.
    @property --r {
        syntax: '<angle>';
        initial-value: 0deg;
        inherits: false;
        
    }

Check user's system's theme :     
The prefers-color-scheme query checks if the user has selected a theme on their OS or browser. 
https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-custom-properties#using-custom-properties