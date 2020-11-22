// $(document).ready(function () {
//   ;
// });

// $("li:nth-of-type(2) h3").css("border", "3px solid blue");

// $('li:nth-child(1)').css('border', '2px solid green');

// $('.wrapper').css({ border: '2px solid red' });

// $('#clients').css({ border: '3px solid yellow' });

// $('img').css('border', '2px solid purple');

// $('header li:first').css('border', '2px solid green');

// $(' header li:last').css({ border: '2px solid red' });

// $("section:not('#contact')").css({ border: '2px solid red' })

// $("#social-nav li:not(':nth-of-type(2)')").css({ border: '2px solid pink' });

// $('#contact-methods li:gt(1)').css({ border: '2px solid red' });

// $('#social-nav li:lt(3)').css('border', '2px solid magenta');

// $('img[alt]').css({ border: '2px solid lime' })
// $('img[alt=seo]').css({ border: '2px solid cornflowerblue' });
// $('img:not([alt=seo])').css({ border: '2px solid lightcoral' });

// $('header li:even').css({ border: '2px solid red' });
// $('header li:odd').css({ border: '2px solid green' });

// $('#contact-methods').next().css({ border: '2px solid purple' });

// $('#social-nav').prev().css({ border: '2px solid blue' });

// $('.banner-title').parents().css({ border: '2px solid red' });
// $('.banner-title').parent ().css({ border: '2px solid orange' });

// $('#social-nav').children().css({ border: '2px solid green' });

// $('#contact').find('.facebook').css({ border: '2px solid magenta' });

// $('#social-nav').closest('.wrapper').css({ border: '3px solid orange' });

// ----------- chaining ----------------

// $('#contact-methods').css({ border: '2px solid red' })
//   .next().css({ border: '2px solid green' })
//   .closest('section').css({ border: '2px solid    magenta' });

// --------------Some code to attach to the index.html as my tweet ---------------
var tweet = "<div style='margin: 20px 0; padding: 10px; background: #eee;' >The big fight LIVE: Ham vs Cheese!</div>";

// Adding and or changing the tweet content in section tweets with var tweet

// $('#tweets div').append(tweet);
// $('#tweets div').prepend(tweet);
// $('#tweets p').before(tweet);
// $('#tweets p').after(tweet);
// $('#tweets p').before(tweet);
// $('#tweets').html(tweet);
// $('#tweets div').html(tweet);
// $('#tweets p').text('The big fight LIVE: Ham vs Cheese!');
// $('#tweets ').html(`${tweet}`);
// $('#tweets div').html(`${tweet}`);
// $('#tweets div').html(`<div style='margin: 20px 0; padding: 10px; background: #eee;' >The big fight LIVE: Ham vs Cheese!</div>`);


//------- wrapper button============

const button = $('.button');
const wrapper = "<div class='wrapper'></div>";
let wrapped = true;

button[0].onclick = function() {
  if (wrapped) {
    $('section').unwrap();
    wrapped = false;
  } else {
    $('section').wrapAll(wrapper);
    wrapped = true;
  }
};


/*******************  remove content *************/

// empty() empties the content/insides of the targeted element

// $('.button').empty();
// $('#points-of-sale').empty();
$('#contact img').remove()