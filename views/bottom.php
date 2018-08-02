<div>
    <?php if ($view->position()->exists('footer')) : ?>
        <?= $view->render('grid.php', ['position' => 'footer', 'tmpl' => 'cards.php', 'grid' => $section['grid']]) ?>
    <?php endif ?>

    <div class="uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-expand@m uk-flex-center uk-flex-middle" uk-grid>
        <div class="uk-width-auto@m uk-text-center">
            <a href="#top" class="uk-icon-button" uk-icon="icon: arrow-up" uk-scroll></a>
        </div>
        <div class="uk-flex-last@s">
            <?php if ($view->menu()->exists('footer')) : ?>
                <?= $view->menu('footer','subnav.php',['class' => 'uk-flex-center uk-flex-right@s','dropdown' => 'pos:top-center']) ?>
            <?php endif ?>
        </div>
        <div class="uk-flex-first@m uk-text-center uk-text-left@s">
            Copyright &copy; <?= date('M Y') ?> <?= $params['title'] ?>
        </div>
    </div>

</div>