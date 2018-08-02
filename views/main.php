<?php
    $sidebar_grid = [
        'width' => '1-1',
        'gutter' => '',
        'match' => false,
        'divider' => false,
        'class' => ''
    ];

    $sticky = [
        'bottom' => true,
        'offset' => ($params['navbar']['sticky'] ? 100 : 20),
        'media' => '@m'
    ];
?>

<div class="uk-flex" uk-grid>

    <?php if ($view->position()->exists('sidebar_a')) : ?>
        <aside id="tm-sidebar_a" class="<?php foreach(explode(',', $section['sidebar']['width']) as $width) : ?> uk-width-<?= $width ?><?php endforeach ?>">
            <div class="uk-container" <?= $section['sticky_sidebar_a'] ? 'uk-sticky='.json_encode($sticky) : '' ?>>
                <?= $view->render('grid.php', ['position' => 'sidebar_a', 'tmpl' => 'cards.php', 'grid' => $sidebar_grid]) ?>
            </div>
        </aside>
    <?php endif ?>

    <main id="tm-main" class="uk-width-expand <?php if ($section['sidebar']['layout'] == 'mss') : ?> uk-flex-first <?php elseif ($section['sidebar']['layout'] == 'ssm') : ?> uk-flex-last <?php endif ?>">
        
        <?php if ($view->position()->exists('main_top')) : ?>
            <section id="tm-main_top" class="uk-section uk-padding-remove-top">
                <div class="uk-container">
                    <?= $view->render('grid.php', ['position' => 'main_top', 'tmpl' => 'cards.php', 'grid' => $section['top']['grid']]) ?>
                </div>
            </section>
        <?php endif ?>

        <section id="tm-content" uk-height-viewport="expand: true">
            <div class="uk-container uk-container-expand ">
                <?= $view->render('content') ?>
            </div>
        </section>

        <?php if ($view->position()->exists('main_bottom')) : ?>
            <section id="tm-main_bottom" class="uk-section uk-padding-remove-bottom">
                <div class="uk-container">
                    <?= $view->render('grid.php', ['position' => 'main_bottom', 'tmpl' => 'cards.php', 'grid' => $section['top']['grid']]) ?>
                </div>
            </section>
        <?php endif ?>

    </main>

    <?php if ($view->position()->exists('sidebar_b')) : ?>
        <aside id="tm-sidebar_b" class="<?php foreach(explode(',', $section['sidebar']['width']) as $width) : ?> uk-width-<?= $width ?><?php endforeach ?>">
            <div class="uk-container" <?= $section['sticky_sidebar_b'] ? 'uk-sticky='.json_encode($sticky) : '' ?>>
                <?= $view->render('grid.php', ['position' => 'sidebar_b', 'tmpl' => 'cards.php', 'grid' => $sidebar_grid]) ?>
            </div>
        </aside>
    <?php endif ?>

</div>