<?php if ($root->getDepth() === $parent_depth) : ?>
    <ul class="uk-nav <?= isset($modifier) ? $modifier : '' ?>">
<?php endif ?>

    <?php foreach ($root->getChildren() as $node) : ?>
    <li class="<?= $node->get('active') ? ' uk-active' : '' ?>">
        <a href="<?= $node->getUrl() ?>"><?= $node->title ?></a>

        <?php if ($node->hasChildren()) : ?>
            <ul <?php if ($root->getDepth() === $parent_depth) : ?> class="uk-nav-sub" <?php endif ?>>
                <?= $view->render('nav.php', ['root' => $node,'parent_depth' => $parent_depth]) ?>
            </ul>
        <?php endif ?>

    </li>
    <?php endforeach ?>

<?php if ($root->getDepth() === $parent_depth) : ?>
</ul>
<?php endif ?>