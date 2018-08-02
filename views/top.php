<?php
    $hero = $params['hero'];
    $navbar = $params['navbar'];

    $heroCls = 'uk-position-'.$hero['position'];
    $heroCls .= ($hero['position_modifier'] ? ' uk-position-'.$hero['position_modifier'] : ' '.$hero['inverse']);
    
    if ($navbar['type'] == 'transparent') {
        $heroCls .= ' tm-position-top-offset-navbar';
    }
?>

<?php if($navbar['type']  == 'default' || !$view->position()->exists('hero') && $navbar['type']  == 'transparent') : ?>
    <?= $view->menu('main','navbar.php',['navbar' => $navbar]) ?>
<?php endif ?>

<?php if($view->position()->exists('hero')) : ?>
    <div id="tm-hero" class="uk-cover-container <?= $hero['height'] != 'viewport' ? 'uk-height-'.$hero['height'] : '' ?>" <?= $hero['height'] == 'viewport' ? 'uk-height-viewport' : '' ?>>
        
        <?php if ($hero['type'] == 'img') : ?>
            <img src="<?= $hero['img'] ?>" uk-cover>
        <?php elseif ($hero['type'] == 'video') : ?>
            <video uk-cover>
                <source src="<?= $hero['video'] ?>">
            </video>
        <?php elseif ($hero['type'] == 'iframe') : ?>
            <iframe src="<?= $hero['iframe'] ?>" uk-cover></iframe>
        <?php endif ?>

        <?php if($navbar['type']  == 'transparent') : ?>    
            <div class="uk-position-top">
                <?= $view->menu('main','navbar.php',['navbar' => $navbar]) ?>
            </div>
        <?php endif ?>

        <div class="<?= $heroCls ?>">
            <?= $view->position('hero', 'cards.php') ?>
        </div>

    </div>
<?php endif ?>