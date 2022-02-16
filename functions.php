<?php

function load_stylesheets()
{ 
    wp_register_style('bootstrap', get_template_directory_uri() . '/css/bootstrap.css',
        array(), false, 'all'
    );
    wp_enqueue_style('bootstrap');
    
    wp_register_style('overrides', get_template_directory_uri() . '/css/style-overrides.css',
        array(), false, 'all'
    );
    wp_enqueue_style('overrides');
 
} 
add_action('wp_enqueue_scripts', 'load_stylesheets');


function load_scripts()
{
    wp_register_script('scrollviewport', get_template_directory_uri() . '/js/scroll-viewport.js', '', 1, false);
    wp_enqueue_script('scrollviewport');

    wp_register_script('scrollbackground', get_template_directory_uri() . '/js/scroll-background.js', '', 1, false);
    wp_enqueue_script('scrollbackground');
} 
add_action('wp_enqueue_scripts', 'load_scripts'); 

// menu support
add_theme_support('menus');
register_nav_menus(
    array(
        'top-menu' => __('Top Menu', 'theme'),
        'footer-menu' => __('Footer Menu', 'theme'),
    )
);

// post thumbnails support
add_theme_support('post-thumbnails');
add_image_size('small', 300, 300, true); 
add_image_size('large', 800, 800, true);

// widget support (sidebar)
add_theme_support('widgets'); 
function my_sidebars()
{
    register_sidebar(
        array(
            'name' => 'Page sidebar',
            'id' => 'page-sidebar',
            'before_title' => '<h4>',
            'after_title' => '</h4>',
        )
    );
}
add_action('widgets_init', 'my_sidebars');