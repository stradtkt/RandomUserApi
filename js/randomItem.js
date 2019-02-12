$(function() {
   var url = 'https://randomuser.me/api/results=12&nat=us';
   var dataOptions = {
       dataType: 'json'
   };

   function peopleData(data) {
       var peopleHTML;
       $.each(data.results, function(i, profile) {
           peopleHTML = '<td class="employee-profile">';
           peopleHTML += '<h1>' + profile.name.first + ' ' + profile.name.last + '</h1>';
           peopleHTML += '<img src="'+ profile.picture.medium +'">';
           $('#randomItem').append(peopleHTML);
       });
   }
   $.getJson(url, dataOptions, peopleData);
});