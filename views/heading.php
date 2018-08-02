<?php if($heading['style'] != 'hide') :?>
    <<?= $heading['tag'] ?> class="<?= $heading['style'] ? $heading['style'] : $default ?>">
        <span><?= $title ?></span>
    </<?= $heading['tag'] ?>>
<?php endif ?>