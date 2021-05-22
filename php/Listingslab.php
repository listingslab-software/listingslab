<?php

  class Listingslab {
    
        private static $instance;
        private $listingslab_screen; 

        public function InitPlugin(){
          add_filter('show_admin_bar', '__return_false');
          add_action('admin_menu', array( $this, 'AdminMenu' ));
          add_action( 'wp_body_open', array( $this, 'RenderPWA' ));
        } 

        public function RenderPWA(){
            $pwa = array();
            $pwa[ 'primaryColor' ] = '#421c5d';
            $pwa[ 'secondaryColor' ] = '#333';
            $fields = array(
              'name', 
              'description',
              'url', 
              'admin_email', 
            );
            foreach($fields as $field) {
              $pwa[$field] = get_bloginfo($field);
            }
            $logoId = get_theme_mod( 'custom_logo' );
            $img = wp_get_attachment_image_src( $logoId , 'full' );
            $customLogo = false;
            if ( isset($img[0]) ){
              $customLogo = $img[0];
            }
            $pwa[ 'logo' ] = $customLogo;
          ?>

          <div class="pwa">

            

            <script>
              var pwa = <?php echo json_encode( $pwa ); ?>;
            </script>
            <?php 
              require_once 'css.php'; 
              $html = file_get_contents(plugin_dir_path( __DIR__ ) . 'react/pwa/build/index.html');
              $html = str_replace('href="/static', 'href="'. plugin_dir_url( __DIR__ ) .
            'react/pwa/build/static', $html);
              $html = str_replace('src="/static', 'src="'. plugin_dir_url( __DIR__ ) .
            'react/pwa/build/static', $html);
              $html = str_replace('<meta name="viewport" content="width=device-width,initial-scale=1"><link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">', '', $html);
              echo $html;
            ?>
           </div>

           <?php 
        }


        public function AdminMenu(){
           $this->listingslab_screen = add_menu_page(
                    '@listingslablistingslab Admin', 
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
            <a href="https://github.com/listingslab-software/listingslab/" target="_blank" style="width: 25px; height: 25px;">
              <img width="25" height="25" src="<?php echo plugins_url('/listingslab/php/assets/png/github.png'); ?>" />
            </a>
          </div>
         </div>
       <?php }




    static function GetInstance(){
      if (!isset(self::$instance)) {
          self::$instance = new self();
      }
      return self::$instance;
    }
    
  }
