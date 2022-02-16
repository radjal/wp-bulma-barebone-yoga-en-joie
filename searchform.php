<?php /*customized search form*/ ?>

<form action="/" method="get">

    <label for="search" class="">Search</label>
    <input type="text" name="s" id="search" value="<?php the_search_query(); ?>">

    <!-- for category search, use cat ID -->
    <!--
          <input type="hidden" name="cat" value="2">
    -->
  


    <button type="submit">Recherche</button>
</form>