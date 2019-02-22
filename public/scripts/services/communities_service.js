// angular_getCamps function from supplier_edit.js
app.factory ('communitiesService', ['$http', '$q', communitiesFactory]);

// angular_getCamps function from supplier_edit.js
suppliers_app.factory ('communitiesService', [
  '$http',
  '$q',
  communitiesFactory,
]);

function communitiesFactory ($http, $q) {
  const factory = {};
  // Example for proxy request to communities.
  // $http
  //   .get ('/communities/api/v1/groups')
  //   .then (data => {
  //     console.log (data);
  //   })
  //   .catch (e => {
  //     console.log (e);
  //   });

  return factory;
}
