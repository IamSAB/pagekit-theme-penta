<?php
    $classes = $grid['class'];
    foreach(explode(',',$grid['width']) as $width) $classes .= ' uk-child-width-'.$width;
    if ($grid['gutter']) $classes .= ' uk-grid-'.$grid['gutter'];
    if ($grid['match']) $classes .= ' uk-grid-match';
    if ($grid['divider']) $classes .= ' uk-grid -divider';
?>

<div class="<?= $classes ?>" uk-grid>
    <?php if (isset($position)) : ?>
        <?= $view->position($position, $tmpl) ?>
    <?php else : ?>
        <?= $view->render($tmpl); ?>
    <?php endif ?>
</div>