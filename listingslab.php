<?php

/**
 * @link              https://listingslab.com
 * @package           listingslab
 *
 * @wordpress-plugin
 * Version:           14.3.7
 * Plugin Name:       @listingslab
 * Description:       Magically turns any WordPress Site into a much better React Progressive WordPress App
 * Plugin URI:        https://github.com/listingslab-software/listingslab
 * Author:            listingslab
 * Author URI:        https://listingslab.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       listingslab
 * Domain Path:       /languages
 */


defined( 'ABSPATH' ) or die( 'Really?' );
require_once 'php/Listingslab.php';

$Listingslab = Listingslab::GetInstance();
$Listingslab->InitPlugin();
