<ul class="uk-subnav <?= isset($class) ? $class : ''?>">

    <?php foreach ($root->getChildren() as $node) : ?>

        <li class="<?= $node->get('active') ? ' uk-active' : '' ?>">

            <a href="<?= $node->getUrl() ?>"><?= $node->title ?></a>

            <?php if ($node->hasChildren()) : ?>
                <div uk-dropdown="<?= isset($dropdown) ? $dropdown : '' ?>">
                    <?= $view->render('nav.php', ['root' => $node, 'modifier' =>'uk-dropdown-nav','parent_depth' => 1]) ?>
                </div>
            <?php endif ?>

        </li>

    <?php endforeach ?>

</ul>