<?php get_header(); ?>

    <h3><?php the_title(); ?></h3>   


    <?php if (has_post_thumbnail()): ?>
        
        <img src="<?php the_post_thumbnail_url('small'); ?>" class="img" />

    <?php endif; ?>


    
    <?php if (have_posts()) : while(have_posts()) : the_post(); ?>

    <?php echo get_the_date('d/m/Y'); ?>
        <?php the_content(); ?> 


    <?php endwhile; endif; ?>

    <?php wp_link_pages(); ?>



    <hr/>
    tags  
    <?php //tags
        $tags = get_the_tags();
        if(!empty($tags))
        {
            foreach($tags as $tag):?>

                <a href="<?php echo get_tag_link($tag->term_id); ?>">
                    <?php echo $tag->name; ?>
                </a>

    <?php endforeach; } ?>
    
    <hr/>
    categories   
    <?php //categories
        $categories = get_the_category();
        if(!empty($categories))
        {
            foreach($categories as $category):?>
            
            <a href="<?php echo get_category_link($category->term_id); ?>">
                    <?php echo $category->name; ?>
                </a>
    
    <?php endforeach; } ?>





<?php get_footer(); ?>