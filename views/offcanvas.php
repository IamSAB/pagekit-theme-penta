<div id="offcanvas" uk-offcanvas="<?= uikitEncode($params['navbar']['uk-offcanvas']) ?>">
    <div class="uk-offcanvas-bar">
        <?= $view->menu('main', 'nav.php', ['modifier' => 'uk-nav-primary', 'parent_depth' => 0]) ?>
        <button class="uk-offcanvas-close" type="button" uk-close></button>
    </div>
</div>