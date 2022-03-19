/**
 * Created by Kupletsky Sergey on 16.12.14.
 */

(function($) {
    // Add JQuery animation to bootstrap dropdowns
    $("body")
        // Add slidedown animation to dropdown
        .on('show.bs.dropdown', '.dropdown', function(e) {
            $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
        })
        // Add slideup animation to dropdown
        .on('hide.bs.dropdown', '.dropdown', function(e) {
            $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
        });

    // jsSocials
    $(document).ready(function(){
        // extend jssocials
        jsSocials.shares.paypal = {
            label: "PayPal",
            logo: "fa fa-paypal",
            shareUrl: "https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business={email}&lc=US&item_name={name}&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted",
            countUrl: ""
        };
        jsSocials.shares.github = {
            label: "GitHub",
            logo: "fa fa-github",
            shareUrl: "https://github.com/zavoloklom/material-design-iconic-font",
            countUrl: "https://api.github.com/repos/zavoloklom/material-design-iconic-font",
            getCount: function(data) {
                return data.stargazers_count;
            }
        };

        $("#jssocial").jsSocials({
            shares: [
                {
                    share: "paypal",
                    label: "Donate with PayPal",
                    logo: "zmdi zmdi-hc-fw zmdi-paypal",
                    email: "s.kupletsky@gmail.com",
                    name: "Material Design Iconic Font"
                },
                {
                    share: "github",
                    label: "Star",
                    logo: "zmdi zmdi-hc-fw zmdi-github",
                    user: "zavoloklom",
                    repo: "material-design-iconic-font"
                },
                {
                    share: "twitter",
                    label: "Tweet",
                    logo: "zmdi zmdi-hc-fw zmdi-twitter",
                    via: "zavoloklom",
                    hashtags: "materialDesign"
                },
                {
                    share: "facebook",
                    label: "Share",
                    logo: "zmdi zmdi-hc-fw zmdi-facebook"
                },
                {
                    share: "googleplus",
                    label: "Share",
                    logo: "zmdi zmdi-hc-fw zmdi-google-plus"
                },
                {
                    share: "pinterest",
                    label: "Pin it",
                    logo: "zmdi zmdi-hc-fw zmdi-pinterest"
                }
            ],
            url: "http://zavoloklom.github.io/material-design-iconic-font/",
            text: "Material Design Iconic Font",
            user: "zavoloklom",
            showLabel: true,
            showCount: true
        });
    });
})(jQuery);
