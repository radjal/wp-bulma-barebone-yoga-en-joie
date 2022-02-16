<?php if (have_posts()) : while(have_posts()) : the_post(); ?>

    <h4><?php the_title(); ?></h4>
    <?php echo get_the_date('d/m/Y'); ?>

    <?php if (has_post_thumbnail()): ?>
        
        <img src="<?php the_post_thumbnail_url('small'); ?>" class="img" />

    <?php endif; ?>


    <?php the_excerpt(); ?> 

    <?php the_permalink(); ?> 
    <a href="<?php the_permalink(); ?>">more...</a> 

<?php endwhile; endif; ?>