<?php

if( ! defined( 'LISTINGSLAB' ) ) {
  define( 'LISTINGSLAB', '14.2.1' );
}

  class Listingslab {
    
        private static $instance;
        private $listingslab_screen; 

        public function InitPlugin(){
          // add_filter('show_admin_bar', '__return_false');
          add_action('admin_menu', array( $this, 'AdminMenu' ));
          add_action( 'wp_body_open', array( $this, 'RenderPWA' ));
          // add_action( 'admin_notices', array( $this, 'plugin_activation' ) ) ;
        } 

        public function plugin_deactivation() {
          delete_option( 'listingslab' );
          $html = '<div class="error">';
          $html .= '<p>';
          $html .= __( 'Boo, you unistalled @listingslab ' );
          $html .= __( LISTINGSLAB );
          $html .= '</p>';
          $html .= '</div>';
          echo $html;
        }

        public function plugin_activation() {
          add_option( 'listingslab', LISTINGSLAB );
          $html = '<div class="updated">';
          $html .= '<p>';
          $html .= __( 'Installed @listingslab ' );
          $html .= __( LISTINGSLAB );
          $html .= '</p>';
          $html .= '</div>';
          echo $html;
        }

        public function AdminMenu(){
           $this->listingslab_screen = add_menu_page(
                    '@listingslab Admin', 
                    '@listingslab', 
                    'manage_options',
                    __FILE__, 
                    array($this, 'RenderAdmin'), 
                    plugins_url('/listingslab/php/assets/png/listingslab_nav.png'),
                    30
              );
        }

        public function RenderAdmin(){ ?>
            <div class='none'>
              <style type="text/css">
                .admin-footer{
                  margin-top: 25px;
                  text-align: center;
                }
                .admin-footer a {
                  text-decoration: none;
                  color: #444;
                }
                .admin-footer a:hover {
                  text-decoration: none;
                  color: #2075d0;
                }
              </style>
              <?php 
                $wpData = array();
                $fields = array(
                    'name', 
                    'description', 
                    'url', 
                    'admin_email'
                );
                foreach($fields as $field) {
                    $wpData[$field] = get_bloginfo($field);
                }
                $wpData[ 'avatar' ] = get_site_icon_url();
                echo '<script>';
                echo 'var wpData = ' . json_encode( $wpData ) . ';';
                echo '</script>';
                $html = file_get_contents(plugin_dir_path( __DIR__ ) . 'react/wp-admin/build/index.html');
                $html = str_replace('href="/static', 'href="'. plugin_dir_url( __DIR__ ) .
              'react/wp-admin/build/static', $html);
                $html = str_replace('src="/static', 'src="'. plugin_dir_url( __DIR__ ) .
              'react/wp-admin/build/static', $html);
                echo $html;
              ?>

          <div class="admin-footer">
            <a href="https://github.com/orgs/listingslab-software/projects/14?fullscreen=true&card_filter_query=label%3A%40listingslab" target="_blank" style="width: 25px; height: 25px;">
              <img width="25" height="25" src="<?php echo plugins_url('/listingslab/php/assets/png/github.png'); ?>" />
            </a>
          </div>
         </div>
       <?php }


        public function RenderPWA(){
                $plugins_url = plugins_url();
                $pwaData = array();
                
                $fields = array(
                  'name', 
                  'description',
                  'url',
                );
                foreach($fields as $field) {
                  $pwaData[$field] = get_bloginfo($field);
                }
                $logoId = get_theme_mod( 'custom_logo' );
                $img = wp_get_attachment_image_src( $logoId , 'full' );
                $customLogo = false;
                if ( isset($img[0]) ){
                  $customLogo = $img[0];
                }

                $pwaData[ 'logo' ] = $customLogo;
                $pwaData[ 'assetsDir' ] = $plugins_url . '/listingslab/php/assets';
                $pwaData[ 'image' ] = $pwaData[ 'assetsDir' ] . '/jpg/cardMedia.jpg';

                $pwaData[ 'isAdmin' ] = is_admin_bar_showing();
                
                $pwaData[ 'type' ] = 'default';
                if (!is_home()){
                  $pwaData[ 'type' ] = 'home';
                }
                
                $pwaData[ 'title' ] = 'Sed commodo rutrum orci, quis ultricies tellus ultrices at. In mattis fringilla urna';
                $pwaData[ 'image' ] = $pwaData[ 'assetsDir' ] . '/jpg/cardMedia.jpg';
                $pwaData[ 'html' ] = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet blandit massa, sit amet ullamcorper velit. Duis accumsan nibh quis lacus bibendum placerat. Nam mi erat, tempor vel faucibus ac, congue sit amet orci. Cras lacinia nec ex id malesuada. Nunc ultricies rutrum metus eu tincidunt. Sed iaculis ut ipsum sed venenatis. Mauris consequat lacinia risus in faucibus. Sed ligula diam, condimentum at lectus ac, viverra tincidunt mauris. Sed commodo rutrum orci, quis ultricies tellus ultrices at. In mattis fringilla urna.';

                $pwaData[ 'primaryColor' ] = '#421c5d';
                $pwaData[ 'secondaryColor' ] = '#ccd31f';


          ?>
          <div class="pwa">
            <script>
              var pwaData = <?php echo json_encode( $pwaData ); ?>;
            </script>
            <?php 
              require_once 'css.php'; 
              $html = file_get_contents(plugin_dir_path( __DIR__ ) . 'react/wp-pwa/build/index.html');
              $html = str_replace('href="/static', 'href="'. plugin_dir_url( __DIR__ ) .
            'react/wp-pwa/build/static', $html);
              $html = str_replace('src="/static', 'src="'. plugin_dir_url( __DIR__ ) .
            'react/wp-pwa/build/static', $html);
              $html = str_replace('<meta name="viewport" content="width=device-width,initial-scale=1"><link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">', '', $html);
              echo $html;
            ?>
           </div>
           <?php }

    static function GetInstance(){
      if (!isset(self::$instance)) {
          self::$instance = new self();
      }
      return self::$instance;
    }
    
  }
