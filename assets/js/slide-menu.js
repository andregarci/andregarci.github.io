var $body = document.body, $menu_trigger = $body.getElementsByClassName('menu-trigger')[0];
if (window.matchMedia("(max-width: 600px)").matches) {
    $body.className = '';
}

(function() {
	if ( typeof $menu_trigger !== 'undefined' ) {
		$menu_trigger.addEventListener('click', function() {
			$body.className = ( $body.className == 'menu-active' )? '' : 'menu-active';
		});
	}

}).call(this);