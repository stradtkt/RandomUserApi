$(document).ready(function() {

    /*========================================
    =            Global Variables            =
    ========================================*/

    var employeeURL = 'https://randomuser.me/api/?results=12&nat=us';
    var dataOptions = {
        dataType: 'json'
    };


    /*=====  End of Global Variables  ======*/

    /*===========================================
    =            Home Directory Page            =
    ===========================================*/

    function employeeData(data) {
        var employeeHTML;
        //get the json results
        $.each (data.results, function (i, profile) {
            employeeHTML = '<td class="employee-profile">';
            employeeHTML += '<img class="profile-picture" src="' + profile.picture.large + '">';
            employeeHTML += '<div class="contact-info">';
            employeeHTML += '<h3 class="name">'+ profile.name.first + " " + '<span id="last-name">' + profile.name.last + '</span>' + '</h3>';
            employeeHTML += '<p class="email">' + profile.email + '</p>';
            employeeHTML += '<p class="city">' + profile.location.city + '</p>';
            $("tr").append(employeeHTML);
        });


        /*=====  End of Home Directory Page  ======*/

        /*=====================================
        =            Modal Content            =
        =====================================*/

        var modalHTML;
        $.each(data.results, function(i, profile) {
            var dateOfBirth = new Date(profile.dob);
            modalHTML = '<div class="modal">';
            modalHTML += '<div class="modal-content">';
            modalHTML += '<span class="close"><i class="fas fa-times"></i></span>';
            modalHTML += '<a href=""><i class="fas fa-arrow-left" aria-hidden="true"></i></a><a href=""><i class="fas fa-arrow-right" aria-hidden="true"></i></a>';
            modalHTML += '<img class="picture" src="' + profile.picture.large + '">';
            modalHTML += '<div class="text-content">';
            modalHTML += '<h3 class="name text-center">' + profile.name.first + " " + profile.name.last + '</h3>';
            modalHTML += '<p class="email text-center">' + profile.email + '</p>';
            modalHTML += '<p class="username text-center">'+ profile.login.username +'</p>';
            modalHTML += '<div class="hr"></div>';
            modalHTML += '<div class="bottom-content">';
            modalHTML += '<p class="number text-center">' + profile.cell + '</p>';
            modalHTML += '<p class="street text-center">' + profile.location.street + '</p>';
            modalHTML += '<p class="city text-center">' + profile.location.city + ", " + profile.location.postcode + ", " + profile.nat +'</p>';
            modalHTML += '</div>';
            modalHTML += '</div>';
            $('#myModal').append(modalHTML);
        });

        /*=====  End of Modal Content  ======*/
        all();

    }

    /*=======================================
    =            Modal Functions            =
    =======================================*/

    function clickProfile() {
        $('.modal').hide();
        $('td').on('click', function(e) {
            e.preventDefault();
            $('.modal:eq(' + $(this).index() + ')').fadeIn(500).addClass("active");
        });
    }

    function closeModal() {
        $('.close').on('click', function(e) {
            e.preventDefault();
            $('.modal').fadeOut(500);
        });
    }

    function overlay() {
        $('.overlay').hide();
        $('td').on('click', function() {
            $('.overlay').show();
        });
        $('.close').on('click', function() {
            $('.overlay').hide();
        });
    }

    function nextProfile() {
        $('.fa-arrow-right').hover(function() {
            $(this).css('color', 'limegreen');
            $(this).css('transition', '0.3s ease');
        }, function() {
            $(this).css('color', '#222');
        });

        $('.fa-arrow-right').on('click', function(e) {
            e.preventDefault();
            if($('.fa-arrow-right').parents('.modal:last-child').hasClass('active')) {
                $('.active').removeClass('active').hide();
                $('.modal:first-child').addClass('active').show();
            } else {
                $('.active').removeClass('active').hide().next().addClass('active').show();
            }
        });
    }

    function prevProfile() {
        //hovering of the font awesome arrow changes the css properties
        $('.fa-arrow-left').hover(function() {
            $(this).css('color', 'limegreen');
            $(this).css('transition', '0.3s ease');
        }, function() {
            $(this).css('color', '#222');
        });
//when the button is clicked it will go to the previous profile
        $('.fa-arrow-left').on('click', function(e) {
            e.preventDefault();
            if($('.fa-arrow-left').parents('.modal:last-child').hasClass('active')) {
                $('.active').removeClass('active').hide();
                $('.modal:first-child').addClass('active').show();
            } else {
                $('.active').removeClass('active').hide().prev().addClass('active').show();
            }
        });
    }

    /*=====  End of Modal Functions  ======*/

    /*======================================
    =            Hover Function            =
    ======================================*/

    function hover() {
        $('td').hover(function() {
            //when hovering over the background color turns to #ccc
            $(this).css('background-color', '#ccc');
        }, function() {
            //when leaving the item and not hovering over the item it will change to this color
            $(this).css('background-color', 'rgba(119,119,119,0.07)');
        });

        //Search button on hover
        $('#search').hover(function() {
            $(this).css('transition', '0.4s ease');
            $(this).css('box-shadow', '1px 1px 3px 0.5px #222');
            $(this).css('transition', '0.2s ease');
            $(this).css('color', 'dodgerblue');
        }, function() {
            $(this).css('box-shadow', '4px 4px 10px 0.8px #222');
            $(this).css('transition', '0.2s ease');
            $(this).css('color', 'rgba(36,36,36,1)');
        });

        //Reset button on hover
        $('#reset').hover(function() {
            $(this).css('transition', '0.4s ease');
            $(this).css('box-shadow', '1px 1px 3px 0.5px #222');
            $(this).css('transition', '0.2s ease');
            $(this).css('color', 'dodgerblue');
        }, function() {
            $(this).css('box-shadow', '4px 4px 10px 0.8px #222');
            $(this).css('transition', '0.2s ease');
            $(this).css('color', 'rgba(36,36,36,1)');
        });

        //when the button is clicked it will change its css properties
        $('#search').on('click', function() {
            $(this).css('box-shadow', 'none');
            $(this).css('transition', '0.3s ease');
            $(this).css('outline', 'none');
        });
        //when the reset button is clicked it will change its css properties
        $('#reset').on('click', function() {
            $(this).css('box-shadow', 'none');
            $(this).css('transition', '0.3s ease');
            $(this).css('outline', 'none');
        });
        $('#search').on('click', function(e) {
            e.preventDefault();
            $(this).css('outline', 'none');
            $(this).css('border', 'none');
        });
        $('#reset').on('click', function(e) {
            e.preventDefault();
            $(this).css('outline', 'none');
            $(this).css('border', 'none');
        });
    }

    /*=====  End of Hover Function  ======*/





    /*=========================================
    =            SearchBar Section            =
    =========================================*/
//this is creating the input for the searchbar
    var searchBox = '<input class="search" type="search" id="" placeholder="Search People...">';
    searchBox += '<button id="search">Search</button><button type="reset" id="reset">Reset</button>';
    //appending the searchbox
    $('.searchBarDiv').append(searchBox);
    function searchBar() {
        //when the search button is clicked it will prevent default actions from the browser
        $('#search').on('click', function(e) {
            e.preventDefault();
            //validation of the search input to bring up the correct results
            var searchItem = $('input').val().toLowerCase().trim();
            $('td').hide();
            $('input').val('');
            if($('h3:contains('+ searchItem +')').length === 0 && $('.username:contains('+ searchItem +')').length === 0) {
                $('table').append('<h1 class="text-center no-results">Sorry no results were found.</h1>');
            } else if($('h3:contains('+ searchItem +')').length > 0 || $('.username:contains('+ searchItem +')').length > 0) {
                $('h3:contains('+ searchItem +')').parents('td').show();
                $('.username:contains('+ searchItem +')').parents('td').show();
            }
            reset();
        });
    }

//Resetting the search bar

    function reset() {
        $('button[type="reset"]').on('click', function(e) {
            e.preventDefault();
            $('td').show();
            $('.no-results').hide();

        });
    }

    /*=====  End of Searchbar Section  ======*/


    /*=====================================
    =            All functions            =
    =====================================*/

    function all() {
        clickProfile();
        closeModal();
        hover();
        overlay();
        nextProfile();
        prevProfile();
    }

    /*=====  End of All functions  ======*/





    $.getJSON(employeeURL, dataOptions, employeeData);

    searchBar();
});