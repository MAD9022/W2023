(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{484:function(e,t,a){e.exports=a.p+"assets/img/movie-pwa-flowchart.drawio.611281e2.svg"},485:function(e,t,a){e.exports=a.p+"assets/img/schitty-gift.0ed0f80f.gif"},486:function(e,t,a){e.exports=a.p+"assets/img/gift-rachel-mcadams.9226961e.gif"},487:function(e,t,a){e.exports=a.p+"assets/img/gift-good-idea.676bbd84.gif"},511:function(e,t,a){"use strict";a.r(t);var s=a(38),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"projects"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#projects"}},[e._v("#")]),e._v(" Projects")]),e._v(" "),s("p",[s("a",{attrs:{href:"#_2-giftr-flutter-app-with-api-from-mad9124"}},[e._v("Jump to Project 2 - Flutter Giftr App")])]),e._v(" "),s("h2",{attrs:{id:"_1-pwa-suggest-a-movie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-pwa-suggest-a-movie"}},[e._v("#")]),e._v(" 1. PWA - Suggest A Movie")]),e._v(" "),s("p",[e._v("Installable, Offline-first PWA built with the "),s("a",{attrs:{href:"https://developers.themoviedb.org/3/getting-started/introduction",target:"_blank",rel:"noopener noreferrer"}},[e._v("The Movie DB API"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h4",{attrs:{id:"list-of-requirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#list-of-requirements"}},[e._v("#")]),e._v(" List of Requirements")]),e._v(" "),s("ol",[s("li",[e._v("4 HTML pages - "),s("code",[e._v("Home")]),e._v(", "),s("code",[e._v("Search Results")]),e._v(", "),s("code",[e._v("Suggested Movies")]),e._v(", "),s("code",[e._v("404 page")]),e._v(".")]),e._v(" "),s("li",[e._v("There must be a service worker that manages all requests from the webpage.")]),e._v(" "),s("li",[e._v("A cache managed from the Service Worker.")]),e._v(" "),s("li",[e._v("All HTTP Requests from the browser are managed by the Service Worker.")]),e._v(" "),s("li",[e._v("A second dynamic image cache can be used to hold the movie "),s("code",[e._v("poster images")]),e._v(" returned requested from "),s("a",{attrs:{href:"https://developers.themoviedb.org/3/getting-started/introduction",target:"_blank",rel:"noopener noreferrer"}},[e._v("TMDB"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("li",[e._v("You need to have a default placeholder image for missing movie posters. Store it in the static cache. When an "),s("code",[e._v("poster_path")]),e._v(" value in the API results is null, then replace it with the placeholder image.")]),e._v(" "),s("li",[e._v("The user should be able to do a new search from any page in the app.")]),e._v(" "),s("li",[e._v("Running a search should take the user to the search results page.")]),e._v(" "),s("li",[e._v("Clicking on a movie card from any screen should take the user to the suggested movies screen.")]),e._v(" "),s("li",[e._v("When navigating to the "),s("code",[e._v("search results")]),e._v(" page, the current search term needs to be added to the query string.")]),e._v(" "),s("li",[e._v("When navigating to the "),s("code",[e._v("suggested movies")]),e._v(" page, the movie id AND the movie title should be put in the query string.")]),e._v(" "),s("li",[e._v("All movie results should be displayed as cards that show a movie title, movie poster image, and at least two other values from the API results.")]),e._v(" "),s("li",[e._v("There should be a common app header bar at the top of each screen.")]),e._v(" "),s("li",[e._v("The button to do a search can be in the app header bar or in a footer bar.")]),e._v(" "),s("li",[e._v("The app header bar and the optional footer should be fixed position at the top and bottom of the screen. The other content will scroll underneath both. Make sure that all the content can be seen when the user scrolls - do not leave content hidden under the header or footer.")]),e._v(" "),s("li",[e._v("The main script should have listeners for being online / offline and pass a message to the service worker about a change in the online state.")]),e._v(" "),s("li",[e._v("IndexedDB saves the "),s("code",[e._v("results")]),e._v(" array from every call (both the search and the suggest). The search results go into one store and the suggested results go into a different store.")]),e._v(" "),s("li",[e._v("The search results use the search keyword as the key path. The suggested results use the movie id as the key path.")])]),e._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//example object for search entry in search store.")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" keyword"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'buffy'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" results"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//example object for suggested entry in suggested store.")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" movieid"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("12365")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" results"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("ol",{attrs:{start:"19"}},[s("li",[e._v("When the user does a search for a movie or suggestion the app should check first in the IndexedDB Store(s) for a match before attempting the call to the Movie DB API. If there is no match then make the API call.")]),e._v(" "),s("li",[e._v("You can use the "),s("code",[e._v("Materialize CSS")]),e._v(" or "),s("code",[e._v("Bootstrap 5")]),e._v(" framework or your own CSS, plus the Material Icon set, to build the interface.")]),e._v(" "),s("li",[e._v("Customize your colour scheme.")]),e._v(" "),s("li",[e._v("Apply a size limit to the dynamic image cache which will limit the number of movie poster images being dynamically cached. Keep the most recent 30 or 40 images in the cache.")]),e._v(" "),s("li",[e._v("On the search results and suggested pages, show the keyword or the movie title as the page title, or part of it. This gives the user context for the cards being shown.")]),e._v(" "),s("li",[e._v("The PWA must pass the Lighthouse tests in Chrome.")]),e._v(" "),s("li",[e._v("The PWA must be installable.")]),e._v(" "),s("li",[e._v("The PWA must work offline. When offline, the home page will work, a search will work (if previously run), a search will display a message about being unavailable if not previously run, a suggested list will work (if previously run), a suggested list will display a message about being unavailable if not previously run. The 404 page can be used instead of displaying a message on the search and suggested pages.")]),e._v(" "),s("li",[e._v("The IndexedDB code can be in either your "),s("code",[e._v("app.js")]),e._v(" or "),s("code",[e._v("sw.js")]),e._v(" or both, as long as it checks the DB before doing the fetch and after a fetch it "),s("code",[e._v("put")]),e._v("s the new data into the DB.")])]),e._v(" "),s("h4",{attrs:{id:"tmdb-endpoints"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tmdb-endpoints"}},[e._v("#")]),e._v(" TMDB Endpoints")]),e._v(" "),s("ul",[s("li",[e._v("To search for a movie by keyword - "),s("code",[e._v("/search/movie?api_key={your api key}&query={keyword}")])]),e._v(" "),s("li",[e._v("To get a suggested list use "),s("strong",[e._v("either")]),e._v(":\n"),s("ul",[s("li",[s("code",[e._v("/movie/{movie-id}/similar")])]),e._v(" "),s("li",[s("code",[e._v("/movie/{movie-id}/recommendations")])])])])]),e._v(" "),s("p",[e._v("Here is a demo of a sample version the PWA in action with a discussion of the requirements. This demo is just to give you a general idea of what needs to be built. You need to customize it and make it your own.")]),e._v(" "),s("YouTube",{attrs:{title:"Demo of requirements",url:"https://www.youtube.com/embed/cYYg6q8HQ8Q"}}),e._v(" "),s("p",[e._v("And here is the SVG flowchart with the basic logic for the search within the webpage (not the service worker).")]),e._v(" "),s("p",[s("img",{attrs:{src:a(484),alt:"flowchart of program logic for interface"}})]),e._v(" "),s("h3",{attrs:{id:"submission"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#submission"}},[e._v("#")]),e._v(" Submission")]),e._v(" "),s("ol",[s("li",[e._v("Create a "),s("strong",[e._v("private")]),e._v(" Github Repo and invite your professor to the repo.")]),e._v(" "),s("li",[e._v("Submit the URL for your "),s("strong",[e._v("private")]),e._v(" Github repo that contains your project to BS LMS.")])]),e._v(" "),s("blockquote",[s("p",[e._v("Due Week 7 (See BS LMS for exact date)")])]),e._v(" "),s("h2",{attrs:{id:"_2-giftr-flutter-app-with-api-from-mad9124"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-giftr-flutter-app-with-api-from-mad9124"}},[e._v("#")]),e._v(" 2. GIFTR Flutter App with API from MAD9124")]),e._v(" "),s("div",{staticStyle:{display:"flex","flex-direction":"row","flex-wrap":"no-wrap","flex-shrink":"1","max-width":"60vw"}},[s("img",{staticStyle:{"max-width":"20vw"},attrs:{src:a(485),alt:"Schitts Creek gift"}}),e._v(" "),s("img",{staticStyle:{"max-width":"20vw"},attrs:{src:a(486),alt:"Rachel McAdams gift"}}),e._v(" "),s("img",{staticStyle:{"max-width":"20vw"},attrs:{src:a(487),alt:"Kims Convienence gift"}})]),e._v(" "),s("p",[e._v("The final project is to create a Mobile Flutter App called "),s("code",[e._v("Giftr")]),e._v(". This is an app for saving gift ideas for people the user knows. In MAD9124 you are building the API and backend for this app. You will have the same partner for both MAD9124 and MAD9022 to build these. Both people should be working on both parts. Start by building your API because you will need this to test your app.")]),e._v(" "),s("p",[e._v("You can use the code from the "),s("a",{attrs:{href:"https://github.com/prof3ssorSt3v3/flutter_giftr_demo",target:"_blank",rel:"noopener noreferrer"}},[e._v("static demo repo as the starter code for this app"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Due Thursday April 21, 2022 by 11:59pm")]),e._v(" "),s("p",[e._v("This is the final deadline. There will be no extensions.")]),e._v(" "),s("p",[e._v("Counts for 25% of your MAD9022 final grade.")])]),e._v(" "),s("h2",{attrs:{id:"giftr-🎁-general-details"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#giftr-🎁-general-details"}},[e._v("#")]),e._v(" Giftr 🎁 General Details")]),e._v(" "),s("p",[e._v("The starter code provides A LOT of the functionality, albeit in a simplified version. You will need to read this code and understand what it is doing to be able to modify it.")]),e._v(" "),s("p",[e._v("The starter demo version has many of the features working. However, it uses static Arrays instead of calls to the back end API. This means each time you navigate to a new page, you will be seeing the initial data again.")]),e._v(" "),s("p",[e._v("Both the login and signup buttons will log the user in and take them to the people list page. You need to update this to use the API that you build plus handle a proper JWT token. The JWT Token needs to be saved in "),s("code",[e._v("SharedPreferences")]),e._v(". On each page load, you need to make sure that a token exists inside of "),s("code",[e._v("SharedPreferences")]),e._v(". If the token does not exist, send the user back to the login screen.")]),e._v(" "),s("p",[e._v("Every call to the API will need to add the token from "),s("code",[e._v("SharedPreferences")]),e._v(" in the Http Request headers. If any Http Request returns a response that says the user is not logged in, then you need to delete your "),s("code",[e._v("SharedPreferences")]),e._v(" token and send the user back to the login screen.")]),e._v(" "),s("p",[e._v("The app needs to use global styling through a Theme that you create in a separate dart file that is imported and loaded through the "),s("code",[e._v("MaterialApp")]),e._v(" "),s("code",[e._v("theme:")]),e._v(" property.")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("ListTile")]),e._v(" widgets displayed on the people and gifts pages, in the demo, represent the data from the static Arrays. You need to update these to get data from the API instead of the static Arrays.")]),e._v(" "),s("p",[e._v("Other than the "),s("code",[e._v("login")]),e._v(" and "),s("code",[e._v("register")]),e._v(" features, all the other requests to the API will need to use a fetch header "),s("code",[e._v("x-api-key")]),e._v(". Every request for people or gifts must be filtered by the user_id. More details about this header will be provided in "),s("a",{attrs:{href:"https://mad9124.github.io/W2022/deliverables/final.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("the MAD9124 assignment description"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h3",{attrs:{id:"navigation-notes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#navigation-notes"}},[e._v("#")]),e._v(" Navigation Notes")]),e._v(" "),s("p",[e._v("Navigation in the demo version is done by updating a state variable inside "),s("code",[e._v("main.dart")]),e._v(" and then replacing the entire "),s("code",[e._v("Scaffold")]),e._v(" with a new version.")]),e._v(" "),s("p",[e._v("You can use this simple approach to navigation in your Flutter app, "),s("strong",[e._v("OR")]),e._v(" if you want, you may use the "),s("code",[e._v("Navigator")]),e._v(" object and the "),s("code",[e._v("push")]),e._v(", "),s("code",[e._v("pushNamed")]),e._v(", and "),s("code",[e._v("pop")]),e._v(" methods to manage a Stack of screens.")]),e._v(" "),s("p",[e._v("This app does "),s("strong",[e._v("NOT")]),e._v(" need a "),s("code",[e._v("Drawer")]),e._v(" or a "),s("code",[e._v("BottomNavigationBar")]),e._v(", unless you want to put the logout button inside a "),s("code",[e._v("Drawer")]),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"screen-features"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#screen-features"}},[e._v("#")]),e._v(" Screen Features")]),e._v(" "),s("p",[e._v("There are five screens in the Giftr App - Login/Sign up, People, Add/Edit Person, Gifts, Add Gift.")]),e._v(" "),s("h3",{attrs:{id:"login-sign-up-screen"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#login-sign-up-screen"}},[e._v("#")]),e._v(" Login/Sign Up Screen")]),e._v(" "),s("p",[e._v("This is the home screen EVERY time the app loads. It has a "),s("code",[e._v("Form")]),e._v(", two "),s("code",[e._v("TextFormField")]),e._v(" widgets, two "),s("code",[e._v("ElevatedButton")]),e._v(" widgets and a possible "),s("code",[e._v("Toast")]),e._v(" widget.")]),e._v(" "),s("p",[e._v("The form fields are the email and password that the user needs to provide to login or signup.")]),e._v(" "),s("p",[e._v("The buttons are the two possible actions - "),s("strong",[e._v("login")]),e._v(" and "),s("strong",[e._v("sign up")]),e._v(". Pressing either button needs to validate the entire form and then make an API call to the appropriate API endpoint. A successful call to either should accept a new JWT token that needs to be written to "),s("code",[e._v("SharedPreferences")]),e._v(" so that it can be used throughout the rest of the app. Any Failed API call should display the reason for the failure in a "),s("code",[e._v("Toast")]),e._v(" message, styled to look like an error message.")]),e._v(" "),s("p",[e._v("After a successful API call and saving of the token in "),s("code",[e._v("SharedPreferences")])]),e._v(" "),s("h3",{attrs:{id:"people-screen"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#people-screen"}},[e._v("#")]),e._v(" People Screen")]),e._v(" "),s("p",[e._v("The people page gives the user the ability to:")]),e._v(" "),s("ul",[s("li",[e._v("View the list of people that belong to the currently logged in user.")]),e._v(" "),s("li",[e._v("Add a new person from a FAB (navigate to the Add/Edit person screen)")]),e._v(" "),s("li",[e._v("Navigate to the gifts page to see the list of gift ideas for that one person.")]),e._v(" "),s("li",[e._v("You may optionally delete people with "),s("code",[e._v("Dismissable")]),e._v(" widgets wrapped around your "),s("code",[e._v("ListTile")]),e._v(" widgets")])]),e._v(" "),s("p",[e._v("The people list needs to be created with a "),s("code",[e._v("ListView.builder()")]),e._v(" constructor.")]),e._v(" "),s("p",[e._v("The people in your list should be displayed as "),s("code",[e._v("ListTile")]),e._v(" widgets.")]),e._v(" "),s("p",[e._v("The people in the "),s("code",[e._v("ListView")]),e._v(" must be sorted by the order that their birthdays appear in the year. By Month and by day.")]),e._v(" "),s("p",[e._v("The "),s("strong",[e._v("background")]),e._v(" of the "),s("code",[e._v("ListTile")]),e._v(" widgets for birthdays that have past must be different that the birthdays that are still to come. The ones that are in the past should be more muted (less contrast) than the ones that are still to come.")]),e._v(" "),s("p",[e._v("In each "),s("code",[e._v("ListTile")]),e._v(", display the person's full name as the title, and the Month and Day of birth as the subtitle. There needs to be two IconButtons - one to navigate to the Add/Edit Person screen, and one to navigate to the Gifts screen. Remember, when navigating between the people and gifts you need to know who owns the people and ideas. This is why you have the token from the server saved in "),s("code",[e._v("SharedPreferences")]),e._v(" - to include it in all your API calls.")]),e._v(" "),s("p",[e._v("There needs to be a way to logout from here. An "),s("code",[e._v("IconButton")]),e._v(" in the "),s("code",[e._v("AppBar")]),e._v(" or in a "),s("code",[e._v("Drawer")]),e._v(".")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("FAB")]),e._v(" at the bottom right of the screen will navigate to the Add/Edit Person Screen.")]),e._v(" "),s("h3",{attrs:{id:"add-edit-person-screen"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-edit-person-screen"}},[e._v("#")]),e._v(" Add / Edit Person Screen")]),e._v(" "),s("p",[e._v("This single screen is used for both adding a new person OR editing an existing person.")]),e._v(" "),s("p",[e._v("There are two ways to arrive at this screen - clicking the edit icon for a person or clicking the FAB. If the user clicked the FAB then the person id sent to this screen will be empty ("),s("code",[e._v("null")]),e._v(" or empty string). If the user clicked an edit icon then the actual person id should be sent to the screen. Use this value to determine which API endpoint to call.")]),e._v(" "),s("p",[e._v("If the user is editing a person, then display the current values for the person in the text fields.")]),e._v(" "),s("p",[e._v("Every person will require a name and date of birth. The id will be created server side.")]),e._v(" "),s("p",[e._v("There needs to be at least one button - a save button.")]),e._v(" "),s("p",[e._v("Deleting of people can be done either with a "),s("code",[e._v("Dismissable")]),e._v(" widget on the People screen or with a delete button plus an "),s("code",[e._v("AlertDialog")]),e._v(" on the Add/Edit person screen. "),s("a",{attrs:{href:"https://api.flutter.dev/flutter/material/AlertDialog-class.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("AlertDialog video and reference"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h3",{attrs:{id:"gifts-screen"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gifts-screen"}},[e._v("#")]),e._v(" Gifts Screen")]),e._v(" "),s("p",[e._v("On the gifts screen, you should show a list of gifts for the selected person along with the ability to delete an idea or add a new idea. The page also needs to display the name of the person that the ideas are for. The person name can be displayed in the AppBar or as part of the content in the Scaffold body.")]),e._v(" "),s("p",[e._v("The screen needs to use a "),s("code",[e._v("ListView.builder()")]),e._v(" to create the scrollable list. The gift information for each gift needs to be displayed in a "),s("code",[e._v("ListTile")]),e._v(". The demo version has a basic display with a title and subtitle. You should use more widgets inside each "),s("code",[e._v("ListTile")]),e._v(" to display all the information.")]),e._v(" "),s("p",[e._v("Each gift idea needs to include a title, a price, a store name, and a url for the store/product. The id will be created server side. More details about each gift property will be provided in the assignment notes in MAD9124.")]),e._v(" "),s("p",[e._v("There needs to be a way of navigating back to the people page from the gifts page. A back arrow in the AppBar is the standard method to do this.")]),e._v(" "),s("p",[e._v("There needs to be a "),s("code",[e._v("FAB")]),e._v(" in the bottom right of the screen to navigate to the Add Gift screen.")]),e._v(" "),s("p",[e._v("You can have the user delete any gift idea by either using a "),s("code",[e._v("Dismissable")]),e._v(" widget wrapped around your "),s("code",[e._v("ListTile")]),e._v(" or by using an "),s("code",[e._v("IconButton")]),e._v(" plus an "),s("code",[e._v("AlertDialog")]),e._v(" for confirmation of the delete. As long as it is a two step process. "),s("a",{attrs:{href:"https://api.flutter.dev/flutter/material/AlertDialog-class.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Reference with video for AlertDialog"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("There must be a way to logout from the Gifts screen - either a IconButton in the AppBar or in a Drawer.")]),e._v(" "),s("h3",{attrs:{id:"add-gift-screen"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-gift-screen"}},[e._v("#")]),e._v(" Add Gift Screen")]),e._v(" "),s("p",[e._v("The id of the selected person must be passed to and available on this screen too.")]),e._v(" "),s("p",[e._v("The Add Gift Screen needs to include a form field for each a title, a price, a store name, and a url for the store/product. Be sure to reference")]),e._v(" "),s("p",[e._v("There is a save button to make the API call and add the gift for the selected person to the database.")]),e._v(" "),s("p",[e._v("There must be a cancel button or a back arrow in the AppBar to get back to the Gifts screen.")]),e._v(" "),s("h2",{attrs:{id:"themeing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#themeing"}},[e._v("#")]),e._v(" Themeing")]),e._v(" "),s("p",[e._v("You MUST create at least one Theme for your Flutter app that is created in a separate dart file. It can be a dark or a light theme or both. If you define a dark theme then make sure that the background colours are generally dark and the text is light.")]),e._v(" "),s("p",[e._v("The Theme should be loaded via the "),s("code",[e._v("theme:")]),e._v(" property inside the "),s("code",[e._v("MaterialApp()")]),e._v(" widget.")]),e._v(" "),s("p",[e._v("The colours should be consistent throughout the app.")]),e._v(" "),s("p",[e._v("There must be good contrast between the text and the backgrounds throughout the app.")]),e._v(" "),s("p",[e._v("Your theme should contain default ThemeData for the Widgets that you are using eg: "),s("code",[e._v("ListTile")]),e._v(", "),s("code",[e._v("ElevatedButton")]),e._v(", "),s("code",[e._v("AppBar")]),e._v(", "),s("code",[e._v("FloatingActionButton")]),e._v(", "),s("code",[e._v("DrawerHeader")]),e._v(", "),s("code",[e._v("Icon")]),e._v(", "),s("code",[e._v("IconButton")]),e._v(", ColourScheme and TextTheme for TextStyles, "),s("code",[e._v("InputDecoration")]),e._v(", etc. inside your theme file. The goal is to do as much of your styling in the theme file, as possible.")]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("REMEMBER")]),e._v(" "),s("p",[e._v("Be sure to frequently update your repo. Use "),s("code",[e._v("git add")]),e._v(" and "),s("code",[e._v("git commit")]),e._v(" every time you complete a step.")]),e._v(" "),s("p",[e._v("Always do your work in a feature branch, "),s("strong",[e._v("NOT")]),e._v(" the "),s("code",[e._v("main")]),e._v(" branch. You can create as many feature branches as you want. They can be to add a feature, add a screen, update a theme, anything.")]),e._v(" "),s("p",[e._v("When you complete a feature, use "),s("code",[e._v("git push")]),e._v(" to update it on the server. Treat this like your backup during development and early testing.")]),e._v(" "),s("p",[e._v("Be sure to add the protection for your "),s("code",[e._v("main")]),e._v(" branch in your repo settings.")]),e._v(" "),s("p",[e._v("When you want to test your app, use pull requests and merge your feature branches into the "),s("code",[e._v("main")]),e._v(" branch.")]),e._v(" "),s("p",[e._v("Have one person be in charge of doing the pull requests and merges. This person should test the app after EVERY merge.")])]),e._v(" "),s("h3",{attrs:{id:"submission-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#submission-2"}},[e._v("#")]),e._v(" Submission")]),e._v(" "),s("ol",[s("li",[e._v("Create a "),s("strong",[e._v("private")]),e._v(" Github Repo and invite your professor to the repo. There will be one repo to submit for each team.")]),e._v(" "),s("li",[e._v("Submit the URL for your "),s("strong",[e._v("private")]),e._v(" Github repo that contains your project to BS LMS. In the notes for submission, you must "),s("strong",[e._v("include the name of your partner")]),e._v(".")]),e._v(" "),s("li",[e._v("If your Flutter App uses a publicly accessible API then please also submit that URL.")]),e._v(" "),s("li",[e._v("If you do "),s("strong",[e._v("NOT")]),e._v(" have a publicly accessible API that your Flutter app is using then you also need to submit the link to your Repo for your API.")]),e._v(" "),s("li",[e._v("Also invite "),s("code",[e._v("Prof3ssorSt3v3")]),e._v(" to your API repo please.")])]),e._v(" "),s("blockquote",[s("p",[e._v("Due Week 15 (See BS LMS for exact date)")])]),e._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[e._v("DEADLINE")]),e._v(" "),s("p",[e._v("Keep in mind that ALL submissions, even late ones, have to be submitted by Thursday April 21st. "),s("strong",[e._v("No submissions")]),e._v(" will be accepted after that.")])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Challenges")]),e._v(" "),s("p",[e._v("Here is a list of things that you can challenge yourself to add, either with your submission or after the semester.")]),e._v(" "),s("ul",[s("li",[e._v("Switching to the "),s("code",[e._v("Navigator")]),e._v(" object to build a Stack of screens, instead of using a state variable in main.dart to switch the Scaffold's "),s("code",[e._v("body")]),e._v(".")]),e._v(" "),s("li",[e._v("Add a Launcher Icon using the CLI tool from week 13 notes.")]),e._v(" "),s("li",[e._v("Add a SplashScreen.")]),e._v(" "),s("li",[e._v("Add a custom RefreshIndicator and pull to refresh with data.")]),e._v(" "),s("li",[e._v("Add an export feature that would let the user send a list of gift ideas for a selected person via sms or email.")]),e._v(" "),s("li",[e._v("Add the ability to take a picture and store it in the app directory on the device for each gift. Use the gift unique id as part of the file name.")]),e._v(" "),s("li",[e._v("Add the ability to take a picture in the app, with the camera, and upload it to the server-side via your API. Then be able to download and display the images for people or users or gifts. This will require server-side changes too.")]),e._v(" "),s("li",[e._v("Check the "),s("code",[e._v("Platform")]),e._v(" and use that to decide whether the add person and add gift buttons use a "),s("code",[e._v("FAB")]),e._v(" or an "),s("code",[e._v("Add +")]),e._v(" FlatButton in the AppBar. (Android or iOS).")])])])],1)}),[],!1,null,null,null);t.default=o.exports}}]);