// Ajax functions jQuery
var dtGonza = {"api":"","nonce":"09358e2c73","area":".live-search","button":".search-button","more":"Ver todos los resultados","mobile":"false","reset_all":"\u00bfRealmente quieres reiniciar todos los datos?","manually_content":"Seguro que ya haz agregado contenido para mostrar?","loading":"Cargando...","loadingplayer":"Cargando video..","selectaplayer":"Seleccione un v\u00eddeo","playeradstime":"7","autoplayer":"1","livesearchactive":"1"};
jQuery(document).ready(function($) {

    var DooPostLink = '#doopostlinks';

	// Save Cookie
	$(document).on('click', '.reco', function() {
		$('.reco').addClass('recox');
		$('.recox').removeClass('reco');
		$.ajax({
			url: dtAjax.url,
            type: 'get',
            data: {
                action: 'dtpcookie_save'
            }
		});
	});

	// Update Cookie
	$(document).on('click', '.recox', function() {
		$('.recox').addClass('reco');
		$('.reco').removeClass('recox');
		$.ajax({
			url: dtAjax.url,
            type: 'get',
            data: {
                action: 'dtpcookie_update'
            }
		});
	});

    // Load List
    $(document).on('click', '.load_list_favorites', function() {
        var that = $(this);
        var page = that.data('page');
        var newPage = page + 1;
        var user = that.data('user');
        var typepost = that.data('type');
		    var template = that.data('template');
        var ajaxurl = dtAjax.url;
        $('#items_movies').addClass('loadingpage');
        $.ajax({
            url: ajaxurl,
            type: 'post',
            data: {
                page: page,
                typepost: typepost,
                user: user,
				template: template,
                action: 'next_page_list'
            },
            error: function(response) {
                console.log(response);
            },
            success: function(response) {
                that.data('page', newPage);
                $('#items_movies').append(response);
                $('#items_movies').removeClass('loadingpage');
            }
        });
    });

    // Delete notice report
    $(document).on('click', '.delete_notice', function() {
        var that = $(this);
        var id = that.data('id');
        var ajaxurl = dtAjax.url;
        $.ajax({
            url: ajaxurl,
            type: 'post',
            data: {
                id: id,
                action: 'delete_notice_report',
            },
            error: function(response) {
                console.log('Error');
            },
            success: function(response) {
                console.log('Deleted');
                $(".reports_notice_admin").hide();
            },
        });
    });

    // Update IMDb Rating
    $(document).on('click', '#update_imdb_rating', function() {
        var that = $(this);
        var id = that.data('id');
        var imdb = that.data('imdb');
        var ajaxurl = dtAjax.url;
        $('#repimdb').html('<i class="icons-spinner9 loading"></i>&nbsp;&nbsp;' + dtAjax.updating);
        $.ajax({
            url: 'ajaxurl',
            type: 'post',
            data: {
                id: id,
                imdb: imdb,
                action: 'update_imdb_rating',
            },
            error: function(response) {
                console.log(response);
            },
            success: function(response) {
                console.log(response);
                $('#repimdb').html(response);
            },
        });
    });

    // Social count
    $(document).on('click', '.dt_social', function() {
        var that = $(this);
        var id = that.data('id');
        var ajaxurl = dtAjax.url;
        $.ajax({
            url: ajaxurl,
            type: 'post',
            data: {
                id: id,
                action: 'dt_social_count'
            },
            error: function(response) {
                console.log(response);
            },
            success: function(response) {
                $('#social_count').html(response);
            }
        });
    });

    $(document).on('click', '.facebook', function() {
        $(".facebook").removeClass("dt_social");
    });

    $(document).on('click', '.twitter', function() {
        $(".twitter").removeClass("dt_social");
    });

    $(document).on('click', '.google', function() {
        $(".google").removeClass("dt_social");
    });

    $(document).on('click', '.pinterest', function() {
        $(".pinterest").removeClass("dt_social");
    });

    $(document).on('click', '.whatsapp', function() {
        $(".whatsapp").removeClass("dt_social");
    });

    // Load Views
    $(document).on('click', '.load_list_views', function() {
        var that = $(this);
        var page = that.data('page');
        var newPage = page + 1;
        var user = that.data('user');
        var typepost = that.data('type');
		var template = that.data('template');
        var ajaxurl = dtAjax.url;
        $('#items_views').addClass('loadingpage');
        $.ajax({
            url: ajaxurl,
            type: 'post',
            data: {
                page: page,
                typepost: typepost,
				template: template,
                user: user,
                action: 'next_page_list'
            },
            error: function(response) {
                console.log(response);
            },
            success: function(response) {
                that.data('page', newPage);
                $('#items_views').append(response);
                $('#items_views').removeClass('loadingpage');
            }
        });
    });

    // Load more links
    $(document).on('click', '.load_list_links', function() {
        var that = $(this);
        var page = that.data('page');
        var newPage = page + 1;
        var user = that.data('user');
        var ajaxurl = dtAjax.url;
        $('#item_links').addClass('loadingpage');
        $.ajax({
            url: ajaxurl,
            type: 'post',
            data: {
                page: page,
                user: user,
                action: 'next_page_link'
            },
            error: function(response) {
                console.log(response);
            },
            success: function(response) {
                that.data('page', newPage);
                $('#item_links').append(response);
                $('#item_links').removeClass('loadingpage');
            }
        });
    });

    // Load more links profile
    $(document).on('click', '.load_list_links_profile', function() {
        var that = $(this);
        var page = that.data('page');
        var newPage = page + 1;
        var user = that.data('user');
        var ajaxurl = dtAjax.url;
        $('#item_links').addClass('loadingpage');
        $.ajax({
            url: ajaxurl,
            type: 'post',
            data: {
                page: page,
                user: user,
                action: 'next_page_link_profile'
            },
            error: function(response) {
                console.log(response);
            },
            success: function(response) {
                that.data('page', newPage);
                $('#item_links').append(response);
                $('#item_links').removeClass('loadingpage');
            }
        });
    });

    // Load more admin links
    $(document).on('click', '.load_admin_list_links', function() {
        var that = $(this);
        var page = that.data('page');
        var newPage = page + 1;
        var ajaxurl = dtAjax.url;
        $('#item_links_admin').addClass('loadingpage');
        $.ajax({
            url: ajaxurl,
            type: 'post',
            data: {
                page: page,
                action: 'next_page_link_admin'
            },
            error: function(response) {
                console.log(response);
            },
            success: function(response) {
                that.data('page', newPage);
                $('#item_links_admin').append(response);
                $('#item_links_admin').removeClass('loadingpage');
            }
        });

        return false;
    });

    // Control links
    $(document).on('click', '.control_link', function() {
        var that = $(this)
            post_id = that.data('id')
            user_id = that.data('user')
            status = that.data('status')

        $('#resultado_link').html('<div class="content">' + dtAjax.updating + '</div>');
        that.toggleClass("active")

        $.ajax({
            url: dtAjax.url,
            type: 'post',
            data: {
                post_id: post_id,
                user_id: user_id,
                status: status,
                action: 'control_link_user'
            },
            error: function(response) {
                console.log(response)
            },
            success: function(response) {
                $('#resultado_link').html('<div class="content">' + response + '</div>')
                $('#' + post_id + ' > .metas').removeClass("trash")
                $('#' + post_id + ' > .metas').removeClass("pending")
                $('#' + post_id + ' > .metas').removeClass("publish")
                $('#' + post_id + ' > .metas').addClass(status)
            }
        })

        return false;
    });

    // Control admin links
    $(document).on('click', '.control_admin_link', function() {
        $('#resultado_link').html('<div class="content">' + dtAjax.updating + '</div>');
        var that = $(this);
        that.toggleClass("active");
        var post_id = that.data('id');
        var user_id = that.data('user');
        var status = that.data('status');
        var ajaxurl = dtAjax.url;
        $.ajax({
            url: ajaxurl,
            type: 'post',
            data: {
                post_id: post_id,
                user_id: user_id,
                status: status,
                action: 'control_link_user'
            },
            error: function(response) {
                console.log(response);
            },
            success: function(response) {
                $('#resultado_link').html('<div class="content">' + response + '</div>');
                $('#adm-' + post_id + ' > .metas').removeClass("trash");
                $('#adm-' + post_id + ' > .metas').removeClass("pending");
                $('#adm-' + post_id + ' > .metas').removeClass("publish");
                $('#adm-' + post_id + ' > .metas').addClass(status);
            }
        });

        return false;
    });

    // Edit Links
    $(document).on('click', '.edit_link', function() {
        var that = $(this);
        var post_id = that.data('id');
        var ajaxurl = dtAjax.url;
        $.ajax({
            url: ajaxurl,
            type: 'post',
            data: {
                post_id: post_id,
                action: 'dooformeditor_user'
            },
            error: function(response) {
                console.log(response);
            },
            success: function(response) {
                $('#edit_link').html('<div id="result_edit_link" class="box animation-3">' + response + '</div>');
            }
        });

        return false;
    });

    // Delete Link
    $(document).on('click','.delt_link', function(){
        var that = $(this);
        var post_id = that.data('id');
        var ajaxurl = dtAjax.url;
        var answer = confirm(dtAjax.deletelin)

        if(answer){
            $.ajax({
                url: ajaxurl,
                type: 'post',
                data: {
                    id: post_id,
                    action: 'doofrontdeletelink'
                },
                error: function(response) {
                    console.log(response);
                },
                success: function(response) {
                    $('#link-'+post_id).remove()
                }
            })
        }
        return false;
    })

    // Admin pending links
    $(document).on('click', '#admin_pending_links', function() {
        var that = $(this);
        $("#adminlinks").show();
        $("#admin_back_links").show();
        $("#mylinks").hide();
        $("#admin_pending_links").hide();
        $("#text_link").html(dtAjax.ladmin);
    });

    $(document).on('click', '#admin_back_links', function() {
        var that = $(this);
        $("#adminlinks").hide();
        $("#admin_back_links").hide();
        $("#mylinks").show();
        $("#admin_pending_links").show();
        $("#text_link").html(dtAjax.lshared);
    });

    // Save Edit link
    $(document).on('submit', '#doo_link_front_editor', function() {
        var that = $(this);
        $.ajax({
            url: dtAjax.url,
            type: 'POST',
            data: that.serialize(),
            error: function(response) {
                console.log(response)
            },
            success: function(response) {
                location.reload()
            },
        });
        return false;
    });


    // Send report video
    $(document).on('submit', '#post_report', function() {
        $('#msg').html('<div class="mensaje_report"><i class="icons-spinner9 loading"></i><p>' + dtAjax.sendingrep + '</p></div>');
        $(".reportar_form").last().addClass("generate_ajax");
        var that = $(this);
        $.ajax({
            url: dtAjax.url,
            type: 'post',
            data: that.serialize(),
            error: function(response) {
                console.log(response)
            },
            success: function(response) {
                $("#msg").html('<div class="mensaje_report">' + response + '</div>');
                setTimeout(function() {
                    $('#main_ali').trigger('click')
                    $('#report').remove()
                    $('#report_li').remove()
                }, 2000)
            }
        })
        return false
    });

    $(document).on('click', '#cerrar_form_edit_link', function() {
        $("#result_edit_link").hide()
    });

	// Process List Favorites
	$(document).on('click', '.process_list', function() {

        var button	= $(this)
		    post_id = button.attr('data-post-id')
		    security = button.attr('data-nonce')

		$('.ucico').removeClass( 'icon-thumb_up' )
		$('.ucico').addClass( 'icons-spinner9 loading' )

		$.ajax({
			type: 'POST',
			url: dtAjax.url,
			data : {
				action : 'dt_process_list',
				post_id : post_id,
				nonce : security
			},
			error: function(response) {
                console.log(response)
            },
			success: function(response) {
				$('.ucico').addClass('icon-thumb_up')
				$('.ucico').removeClass('icons-spinner9 loading')
				$('.process_list').toggleClass('in-list')
				$('.list-count-'+ post_id ).html(response)
			}
		})
		return false
	});

	// Process List views
	$(document).on('click', '.process_views', function() {

        var button	= $(this)
	        post_id = button.attr('data-post-id')
		    security = button.attr('data-nonce')

        $('.uvcico').removeClass( 'icon-eye' );
		$('.uvcico').addClass( 'icons-spinner9 loading' )

        $.ajax({
			type: 'POST',
			url: dtAjax.url,
			data : {
				action : 'dt_process_views',
				post_id : post_id,
				nonce : security
			},
			error: function(response) {
                console.log(response)
            },
			success: function(response) {
				$('.uvcico').addClass('icon-eye')
				$('.uvcico').removeClass('icons-spinner9 loading')
				$('.process_views').toggleClass('in-views')
				$('.views-count-'+ post_id).html(response)
			}
		})
		return false
	});

	// Control List favorites
	$(document).on('click', '.user_list_control', function() {

        var button	 = $(this)
	        post_id  = button.attr('data-postid')
		    security = button.attr('data-nonce')

        $('#p'+ post_id ).hide()

		$.ajax({
			type: 'POST',
			url: dtAjax.url,
			data : {
				action : 'dt_process_list',
				post_id : post_id,
				nonce : security,
				total: 'on'
			},
			success: function(response) {
				$('.totalfavorites_user').html(response)
			}
		})
		return false
	});

	// Control List views
	$(document).on('click', '.user_views_control', function() {

        var button	 = $(this)
		    post_id  = button.attr('data-postid')
		    security = button.attr('data-nonce')

		$('#v'+ post_id ).hide()

		$.ajax({
			type: 'POST',
			url: dtAjax.url,
			data : {
				action : 'dt_process_views',
				post_id : post_id,
				nonce : security,
				total: 'on'
			},
			success: function(response) {
				$('.totalviews_user').html(response)
			}
		})
		return false
	});

   



    // NEW POST LINK MODULE //
    if($( DooPostLink ).length == 1){

        // Repeat links post items
        $( DooPostLink ).repeater({
            defaultValues: {
                type: dtAjax.ltipe
            },
            show: function() {
                $(this).fadeIn('fast')
            },
            hide: function(b) {
                $(this).fadeOut('fast', function() {
                    $(this).slideUp(b)
                })
            }
        })

        // Post Links
        $(document).on('submit', DooPostLink, function() {
            $('#resultado_link_form').html('<div class="msg"><i class="icons-spinner9 loading"></i>' + dtAjax.sending + '</div>'),
            $('.form_post_lik').hide('fast'),
            $.ajax({
                type: 'POST',
                url: dtAjax.url,
                dataType: 'json',
                data: $(this).serialize(),
                success: function(c){
                    if(c.response == true){
                        location.reload()
                    }else{
                        alert( c.message )
                    }
                }
            })
            return false
        })
    }

});
