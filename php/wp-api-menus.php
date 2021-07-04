<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
include_once 'includes/wp-api-menus-v1.php';
include_once 'includes/wp-api-menus-v2.php';
if ( ! function_exists ( 'wp_rest_menus_init' ) ) :

	function wp_rest_menus_init() {

        if ( ! defined( 'JSON_API_VERSION' ) && ! in_array( 'json-rest-api/plugin.php', get_option( 'active_plugins' ) ) ) {
			$class = new WP_REST_Menus();
			 add_filter( 'rest_api_init', array( $class, 'register_routes' ) );
		} else {
			$class = new WP_JSON_Menus();
			add_filter( 'json_endpoints', array( $class, 'register_routes' ) );
		}
	}

	add_action( 'init', 'wp_rest_menus_init' );

endif;
