/*this fille contains reference to the vendore libraries we are using in the projects.
This is used by webpack in the production build only. A separate  bundle for vendor code is useful since
 it's unlikely to change as often as the application's code.
 SO all the libraries we reference here will be written to vendor.js so they can be cached untill one of them change. SO bascially , this avoids customers having to download a huge js file anytime a line of code hanges. They only have to download vendor.js when a vendor library changes which should be less frequesnt.
 Any files that arent reference here will be bundled into main.js foe the production build.*/

/*eslint-disable  no-unused-vars */
import fetch from 'whatwg-fetch';
