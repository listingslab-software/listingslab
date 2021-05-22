<?php

  class Listingslab {
    
        private static $instance;
        private $listingslab_screen; 

        public function InitPlugin(){
          add_filter('show_admin_bar', '__return_false');
          add_action('admin_menu', array( $this, 'AdminMenu' ));
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
              <a href="/" target="_self">
                <img width="25" height="25" src="<?php echo plugins_url('/listingslab/php/assets/svg/garmin.svg'); ?>" /></a>
              <a href="https://github.com/listingslab-software/listingslab/" target="_blank">
                <img width="25" height="25" src="<?php echo plugins_url('/listingslab/php/assets/png/github.png'); ?>" /></a>
       <?php }

    static function GetInstance(){
      if (!isset(self::$instance)) {
          self::$instance = new self();
      }
      return self::$instance;
    }
    
  }
