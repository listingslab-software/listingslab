<?php

/**
 * @link              https://listingslab.com
 * @package           listingslab
 *
 * @wordpress-plugin
 * Version:           14.2.2
 * Plugin Name:       @listingslab
 * Description:       Magically turn any WordPress Site into a much superior React Progressive WordPress App
 * Plugin URI:        https://github.com/listingslab-software/listingslab
 * Author:            listingslab
 * Author URI:        https://listingslab.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       listingslab
 * Domain Path:       /languages
 */


defined( 'ABSPATH' ) or die( 'Really?' );
define( 'listingslab_VERSION', '14.2.2' );

require_once 'php/Listingslab.php';

$Listingslab = Listingslab::GetInstance();
$Listingslab->InitPlugin();
