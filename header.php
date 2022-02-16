<!DOCTYPE html>
<html>
    <head>  
        <meta name="theme-color" content="#ff9b28" />

        <!-- External CSS -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.0/css/bulma.min.css" /> 
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

        <!-- Google fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Merienda+One&family=Shadows+Into+Light+Two&display=swap" rel="stylesheet">

        <!-- head input -->
        <?php wp_head(); ?>

    </head>
    <body <?php body_class(); ?>>
    <header>
        <?php wp_nav_menu(

            array(
                'theme_location' => 'top-menu',
                'menu_class' => 'navigation-menu-class'
            )

        ); ?>
    </header>