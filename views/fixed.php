<?php
    $classes = 'uk-position-'.$fixed['position'];
    if($fixed['position_modifier']) $classes .= ' uk-position-'.$fixed['position_modifier'];
?>
<div id="tm-fixed" class="uk-position-fixed <?= $classes ?>">
    <?php foreach ($widgets as $widget) : ?>
        <?= $widget->get('result') ?>
    <?php endforeach ?>
</div>