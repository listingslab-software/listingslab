<?php

/**
 * @link              https://listingslab.com
 * @package           listingslab
 *
 * @wordpress-plugin
 * Version:           14.1.0
 * Plugin Name:       @listingslab
 * Description:       Magically turns a WordPress Site into a way superior React Progressive Web App
 * Plugin URI:        https://github.com/listingslab-software/listingslab
 * Author:            listingslab
 * Author URI:        https://listingslab.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       listingslab
 * Domain Path:       /languages
 */


defined( 'ABSPATH' ) or die( 'Really?' );
define( 'listingslab_VERSION', '14.1.0' );

require_once 'php/Listingslab.php';



$Listingslab = Listingslab::GetInstance();
$Listingslab->InitPlugin();
