<?php get_header(); ?>

    <h3><?php the_title(); ?></h3> 

    <?php if (have_posts()) : while(have_posts()) : the_post(); ?>

        <?php the_content(); ?>

    <?php endwhile; endif; ?>


    
    <?php //sidebar ?>
    <?php if (is_active_sidebar('page-sidebar')): ?>

        <?php dynamic_sidebar('page-sidebar'); ?>

    <?php endif; ?>


    

<?php get_footer(); ?>