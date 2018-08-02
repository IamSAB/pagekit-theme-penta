<?php foreach ($widgets as $widget) : ?>
    <div class="uk-navbar-item">
        <?= $widget->get('result') ?>
    </div>
<?php endforeach ?>