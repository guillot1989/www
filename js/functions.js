$(document).ready(function(){

	tailleInputFooter();
	$(window).resize(function(){
		tailleInputFooter();
	});
	
	// Charger éléments menus/header
	$('#load_menu').load('menu_left.html');
	$('#load_notifs').load('notifications.html');
	$('#load_header').load('header.html', function(){
		// Remplacer titre header
		$('.title_header').text($('#load_header').attr('rel'));
		// Si ce n'est pas le header basique
		if($('#load_header.bis').length){
			$('.header .button_left').css('background', 'url("./img/back_btn.png") repeat scroll 0 0 transparent');
			$('.header .button_left').css('width', '54px');
			$('.header .button_left').css('height', '32px');
			$('.header .button_left').removeClass('closed');
			$('.header .button_left').click(function(){
				parent.history.back();
				return false;
			});
		}
		if($('#load_header.ter').length){
			$('.header .button_right').css('background', 'url("./img/picto_modif.png") repeat scroll 0 0 transparent');
			$('.header .button_right').css('width', '62px');
			$('.header .button_right').css('height', '30px');
			$('.header .button_right').removeClass('closed');
		}
		
		if($('#load_header.no_connect').length){
			$('#connect').remove();
			$('.pop_up.info').css('top','0');
			
		}
		$('#load_header').css('height',$('.header').height()+$('.pop_up.info').height()+20);
	});
	
	// Affichage du menu gauche
	$(".header .button_left.closed").live('click', function() {
		$(".header").animate({'left':'80%'});
		$("#load_menu").css({'display':'block'});
		$("#load_menu").animate({'left':'0'});
		$("#content_center").animate({'left':'80%'});
		$(this).removeClass('closed');
		$(this).addClass('opened');
		$("body").css('overflow','hidden');
	});
	// Cachage du menu gauche
	$(".header .button_left.opened").live('click', function() {
		$("#load_menu").animate({'left':'-80%'});
		$("#content_center").animate({'left':'0'});
		setTimeout(function(){
			$("#load_menu").css({'display':'none'});
		},600);
		$(".header").animate({'left':'0'});
		$(this).removeClass('opened');
		$(this).addClass('closed');
	});

	function tailleInputFooter(){
		var width_footer = $(".footer").width();
		var width_footer_inputtext = width_footer - 100;
		$(".footer input[type='text']").css('width',width_footer_inputtext+"px");
		$("#button_send").animate({'right':'10px'});
	}
});