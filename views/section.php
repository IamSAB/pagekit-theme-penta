<?php
    $classes = 'uk-section';
    if ($section['style']) $classes .= ' uk-section-'.$section['style'];
    if ($section['size']) $classes .= ' uk-section-'.$section['size'];
    if ($section['preserve_color']) $classes .= ' uk-preserve-color';
    if ($section['inverse']) $classes .= ' '.$section['inverse'];
    if ($section['bg']['src']) {
        if ($section['bg']['size']) $classes .= ' uk-background-'.$section['bg']['size'];
        if ($section['bg']['position']) $classes .= ' uk-background-'.$section['bg']['position'];
        if ($section['bg']['responsive']) $classes .= ' uk-background-image'.$section['bg']['responsive'];
        if ($section['bg']['blend']) $classes .= ' uk-background-blend-'.$section['bg']['blend'];
        if ($section['bg']['fixed']) $classes .= ' uk-background-fixed';
        if ($section['bg']['norepeat']) $classes .= ' uk-background-norepeat';
    }
    $id = 'tm-'.$position;
?>

<section id="<?= $id ?>" class="<?= $classes ?>" <?php if ($section['bg']['src']) : ?> style="background-image: url('<?= $view->url($section['bg']['src']) ?>')"<?php endif ?>>
    <div class="uk-container <?php if ( $section['container_size']) : ?>uk-container-<?= $section['container_size'] ?><?php endif ?>">
        <?php if(isset($grid) && $grid) : ?>
            <?= $view->render('grid.php', [
                'tmpl' => $tmpl,
                'position' => $position,
                'grid' => $section['grid']
            ]) ?>
        <?php else : ?>
            <?= $view->render($tmpl,['section' => $section]) ?>   
        <?php endif ?>
    </div>
</section>