<?php
    $alignment = '';
    if($node->theme['main']['alignment']) foreach(explode(',',$node->theme['main']['alignment']) as $width) $alignment .= ' uk-text-'.$width;
?>

<article class="uk-article <?= $alignment ?>">

    <?= $view->render('heading.php', ['title' => $page->title, 'heading' => $node->theme['main']['heading'], 'default' => 'uk-article-title']) ?>
    
    <?= $page->content ?>

</article>