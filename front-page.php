<?php get_header(); ?>

    <?php get_template_part('includes/section', 'front-page'); ?>

    <?php //search functionality
        get_search_form();
    ?>

    
    <?php //sidebar ?>
    <?php if (is_active_sidebar('page-sidebar')): ?>

        <?php dynamic_sidebar('page-sidebar'); ?>

    <?php endif; ?>

<?php get_footer(); ?>