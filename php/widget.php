<?php

class listingslab_Widget extends WP_Widget {
 
    function __construct() {
        parent::__construct( false, __( '@listingslab', 'listingslab' ) );
    }
 
    function widget( $args, $instance ) {
        echo '<script>';

        $widgetSettings = array();
        $widgetSettings[ 'welcomeMessage' ] = $instance[ 'welcomeMessage' ];
        $widgetSettings[ 'primaryColor' ] = $instance[ 'primaryColor' ];
        echo 'var widgetSettings = ' . json_encode( $widgetSettings ) . ';';

        $blogInfo = array();
        $fields = array(
            'name', 
            'description', 
            'wpurl', 
            'url', 
            'admin_email', 
            'charset', 
            'version', 
            'html_type',
            'language',
            'stylesheet_url',
            'stylesheet_directory',
            'template_url',
            'pingback_url',
            'atom_url',
            'rdf_url',
            'rss_url',
            'rss2_url',
            'comments_atom_url',
            'comments_rss2_url',
        );
        foreach($fields as $field) {
            $blogInfo[$field] = get_bloginfo($field);
        }
        $blogInfo[ 'privacyUrl' ] = get_privacy_policy_url();
        echo 'var blogInfo = ' . json_encode( $blogInfo ) . ';';
        if (is_single()){
            echo 'var postData = ' . json_encode( get_post() ) . ';';
        } else {
            echo 'var postData = {};';
        }
        $logoId = get_theme_mod( 'custom_logo' );
        $img = wp_get_attachment_image_src( $logoId , 'full' );
        $customLogo = $img[0];
        echo 'var customLogo = ' . json_encode( $customLogo ) . ';';
        echo '</script>';
        require_once 'css.php';

        $html = file_get_contents(plugin_dir_path( __DIR__ ) . 'react/widget/build/index.html');
        $html = str_replace('href="/static', 'href="'. plugin_dir_url( __DIR__ ) .
            'react/widget/build/static', $html);
        $html = str_replace('src="/static', 'src="'. plugin_dir_url( __DIR__ ) .
            'react/widget/build/static', $html);
        echo $html;
    }

    function update( $new_instance, $old_instance ) {
        $instance = array();
        $instance['welcomeMessage'] = ( ! empty( $new_instance['welcomeMessage'] ) ) ? sanitize_text_field( $new_instance['welcomeMessage'] ) : 'Welcome';
        $instance['primaryColor'] = ( ! empty( $new_instance['primaryColor'] ) ) ? sanitize_text_field( $new_instance['primaryColor'] ) : '#8b18c7';
        return $instance;
    }
 
    function form( $instance ) {
        echo '<div class="widget-settings">';
        $welcomeMessage = ! empty( $instance['welcomeMessage'] ) ? $instance['welcomeMessage'] : esc_html__( 'Welcome', 'greybeard' );
        $primaryColor = ! empty( $instance['primaryColor'] ) ? $instance['primaryColor'] : '#8b18c7';
        echo '<p>Open up a new world to any tired old WordPress site</p>';
        echo '<p>Welcome message</p>';
        echo '<input 
                class="widefat"
                id="' . esc_attr( $this->get_field_id( 'welcomeMessage' ) ) . '"
                type="text"
                name="' . esc_attr( $this->get_field_name( 'welcomeMessage' ) ) . '"
                value="' . esc_attr( $welcomeMessage ) . '"
             />';

        echo '<p>Primary Color</p>';
        echo '<input 
                class="widefat"
                id="' . esc_attr( $this->get_field_id( 'primaryColor' ) ) . '"
                type="text"
                name="' . esc_attr( $this->get_field_name( 'primaryColor' ) ) . '"
                value="' . esc_attr( $primaryColor ) . '"
             />';

        echo '</div>';
    }
}

function listingslab_register_widget() {
    register_widget( 'listingslab_Widget' );
}

add_action( 'widgets_init', 'listingslab_register_widget' ); 
