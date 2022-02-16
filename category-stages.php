<?php get_header(); ?>

<h2>Les Stages</h2>

    <?php get_template_part('includes/section', 'archive'); ?>


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