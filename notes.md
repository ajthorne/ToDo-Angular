#Learning Angular

##Important Notes
###Module: contains different components of an Angular app
``var app = angular.module("myApp", []);``

###Basic:
- Modules, Directives, and Controllers all need to be called in separate script tags in HTML

###Directives:
Bind behavior to HTML elements, encourage readability and reusability

###Built in directives:
- ng-app: tells AngularJS where the myApp module will live in the HTML (usually in body)
- ng-controller: defines the controller scope
    - properties inside it are defined with ``$scope``
      - ``$scope.product``
    - scope properties are accessed in HTML like so: ``{{product}}``
- ng-repeat: loops through an array and displays each element
- ng-src: sets the ``<img>`` element's ``src`` to property in controller
- ng-click: run functions on click

####Create your own directive:
  - app.directive: creates new directive
  - restrict: specifies how the directive will be used in the view. The 'E' means it will be used as a new HTML element.
  - scope: specifies that we will pass information through an attribute named info. The = tells the     
    directive to look for an attribute named info in the ``<app-info>`` element. The data in info becomes available to use in the template given by templateURL.
  - templateURL: specifies the HTML to use.
  - link: creates interactive directives with functions
    - takes three inputs scope (directive's scope), element (directive's HTML element), attrs (element's attributes)

###Filters:
- Filters are denoted in HTML with a ``|`` symbol
- Angular has several built in filters including:
  - currency
  - date
  - uppercase
  - price
- Custom filters can be created

###Services
  - app.factory creates new service
  - use for fetching data / for larger data requests / AJAX calls

###Routing
 - app.config creates new router
 - $routeProvider: defines routes
 - .when(): maps url to controllers and templateUrl
 - link whens together
 - ``.otherwise({
        redirectTo: '/'
      });``

###File Structure:
- controllers directory
  - MainController.js (stores directives)
- app.js or main.js (stores module)
- services directory
