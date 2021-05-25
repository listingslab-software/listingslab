// Set the version of this plugin
if( ! defined( 'ADVANCED_GOOGLE_ANALYTICS' ) ) {
	define( 'ADVANCED_GOOGLE_ANALYTICS', '1.0' );
} // end if

/**
 * @version		1.0
 */
class Advanced_Google_Analytics {

	/*--------------------------------------------------------*
	 * Attributes
	 *--------------------------------------------------------*/

	 /** Static property to hold our singleton instance */
	 private static $instance = null;

	/*--------------------------------------------------------*
	 * Constructor
	 *--------------------------------------------------------*/

	/**
	 * Initializes the widget's classname, description, and JavaScripts.
	 */
	 public function get_instance() {

		 // Get an instance of the
		 if( null == self::$instance ) {
			 self::$instance = new self;
		 } // end if

		 return self::$instance;

	 } // end get_instance

	/**
	 * Initializes the plugin' textdomain, adminitration message, and more.
	 */
	 private function __construct() {

		// Load plugin textdomain
		add_action( 'init', array( $this, 'plugin_textdomain' ) );

		// Display the admin notification
		add_action( 'admin_notices', array( $this, 'plugin_activation' ) ) ;

	 } // end constructor

	/*--------------------------------------------------------*
	 * Functions
	 *--------------------------------------------------------*/

	 /**
	  * Defines the plugin textdomain.
	  */
	 public function plugin_textdomain() {

		$domain = 'advanced-google-analytics';
		$locale = apply_filters( 'advanced-google-analytics', get_locale(), $domain );

        load_textdomain( $domain, WP_LANG_DIR . '/' . $domain . '/' . $domain . '-' . $locale . '.mo' );
        load_plugin_textdomain( $domain, FALSE, dirname( plugin_basename( __FILE__ ) ) . '/lang/' );

	} // end plugin_textdomain

	/**
	 * Saves the version of the plugin to the database and displays an activation notice on where users
	 * can access the new options.
	 */
	public function plugin_activation() {

		if( ADVANCED_GOOGLE_ANALYTICS != get_option( 'advanced_google_analytics' ) ) {

			add_option( 'advanced_google_analytics', ADVANCED_GOOGLE_ANALYTICS );

			$html = '<div class="updated">';
				$html .= '<p>';
					$html .= __( 'The Advanced Google Analytics are available <a href="admin.php?page=theme_options&tab=lobal_options">on this page</a>.', 'advanced-google-analytics' );
				$html .= '</p>';
			$html .= '</div><!-- /.updated -->';

			echo $html;

		} // end if

	} // end plugin_activation

	/**
	 * Deletes the option from the database. Optionally displays an error message if there is a
	 * problem deleting the option.
	 */
	public static function plugin_deactivation() {

		// Display an error message if the option isn't properly deleted.
		if( false == delete_option( 'dvanced_google_analytics' ) ) {

			$html = '<div class="error">';
				$html .= '<p>';
					$html .= __( 'There was a problem deactivating the Google Analytics Plugin. Please try again.', 'advanced-google-analytics' );
				$html .= '</p>';
			$html .= '</div><!-- /.updated -->';

			echo $html;

		} // end if/else

	} // end plugin_deactivation

} // end class