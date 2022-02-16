<?php get_header(); ?>

    <h3>Searh for '<?php echo get_search_query(); ?>'</h3>
    
    <?php //search functionality
        get_search_form();
    ?>





    <?php get_template_part('includes/section', 'search-results'); ?>


    <p>
            
            <?php 
                // simple page links
                /*
                previous_posts_link(); 
                next_posts_link(); 
                */
            ?>
         
                
            <?php 
                // multipage page links
                global $wp_query;
                $big = 99999999999;

                echo paginate_links(array(

                    'base' => str_replace( $big, '%#%', esc_url(get_pagenum_link($big)) ),
                    'format' => '?paged=%#%',
                    'current' => max( 1, get_query_var('paged') ),
                    'total' => $wp_query->max_num_pages

                ));
            ?>
                
    </p>

<?php get_footer(); ?>