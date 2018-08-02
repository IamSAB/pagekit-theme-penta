<?php
    function uikitEncode(array $array) {
        $str = '';
        foreach($array as $key => $value) {
            if(!$value) continue;
            $str .= $key.':'.(string)$value.';';
        }
        return $str;
    }
?>


<!DOCTYPE html>

<html>

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <?= $view->render('head') ?>
        <?php if ($params['css']) : ?>
            <?php $view->style('uikit-theme-custom', $view->url($params['css'])) ?>
        <?php else : ?>
            <?php $view->style('uikit-theme', 'theme:css/uikit.theme-master.min.css') ?>
        <?php endif ?>
        <?php $view->script('uikit-beta', 'theme:js/uikit.min.js') ?>
        <?php $view->script('uikit-beta-icons', 'theme:js/uikit-icons.min.js') ?>
    </head>

    <body id="top">

        <div class="uk-offcanvas-content">
            
            <?= $view->render('top.php') ?>

            <?php foreach ($params['top'] as $pos => $section) : ?>
                <?php if ($view->position()->exists('top_'.$pos)) : ?>
                    <?= $view->position('top_'.$pos, 'section.php', ['tmpl' => 'cards.php', 'grid' => true, 'position' => 'top_'.$pos, 'section' => $section]) ?>
                <?php endif ?>
            <?php endforeach ?>
            
            <?= $view->render('section.php',['position' => 'main', 'tmpl' => 'main.php', 'section' => $params['main']]) ?>

            <?php foreach ($params['bottom'] as $pos => $section) : ?>
                <?php if ($view->position()->exists('bottom_'.$pos)) : ?>
                    <?= $view->position('bottom_'.$pos, 'section.php', ['tmpl' => 'cards.php', 'grid' => true, 'position' => 'bottom_'.$pos, 'section' => $section]) ?>
                <?php endif ?>
            <?php endforeach ?>

            <?= $view->render('section.php',['tmpl' => 'bottom.php', 'position' => 'footer', 'section' => $params['footer']]) ?>

            <?= $view->render('offcanvas.php') ?>

        </div>

        <?php if ($view->position()->exists('fixed')) : ?>
            <?= $view->position('fixed','fixed.php', ['fixed' => $params['fixed']]) ?>
        <?php endif ?>

        <?= $view->render('footer') ?>

    </body>

</html>
