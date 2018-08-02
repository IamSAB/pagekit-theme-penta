<?php
    if($navbar['sticky']) {
        $uk_sticky = 'sel-target:.uk-navbar-container;cls-active:uk-navbar-sticky;';
        if($navbar['type'] == 'transparent' && $view->position()->exists('hero')) {
            $uk_sticky .= 'cls-inactive:uk-navbar-transparent '.$navbar['inverse'];
        }
    }
?>

<div <?= $navbar['sticky'] ? 'uk-sticky="'.uikitEncode($navbar['uk-sticky']).''.$uk_sticky.'"' : '' ?>>
    <nav id="tm-navbar" class="uk-navbar-container <?= $navbar['type'] == 'transparent' ? 'uk-navbar-transparent' : '' ?>">
        <div class="uk-container <?= $navbar['expand'] ? 'uk-container-expand' : '' ?>">
            <div class="<?= $navbar['inverse'] ?>" uk-navbar="<?= uikitEncode($navbar['uk-navbar']) ?>">

                <?php foreach($navbar['layout'] as $position => $string) : ?>

                    <?php if (!empty($navbar['layout'][$position])) : ?>

                        <div class="uk-navbar-<?= $position ?>">

                            <?php if($position == 'right') : ?><div class="uk-navbar-item"></div><?php endif ?>
                            
                            <?php foreach(explode(',', $string) as $part) : ?>

                                <?php if ($part == 'menu' && !$navbar['always_responsive'] && $view->menu()->exists('main')) : ?>
                                    <?php $nodes = $root->getChildren() ?>
                                    <?php if($navbar['centered_split_menu']) : ?>
                                        <?php $chunks = array_chunk($nodes,ceil(count($nodes)/2)) ?>
                                        <div class="uk-navbar-center-left"><div>
                                            <?= $view->menu('main','navbar-menu.php', ['nodes' => $chunks[0]]) ?>
                                        </div></div>
                                        <?php if(count($nodes) > 1) : ?>
                                            <div class="uk-navbar-center-right"><div>
                                                <?= $view->menu('main','navbar-menu.php', ['nodes' => $chunks[1]]) ?>
                                            </div></div>
                                        <?php endif ?>
                                    <?php else : ?>
                                        <?= $view->menu('main','navbar-menu.php', ['nodes' => $nodes]) ?>
                                    <?php endif; ?>
                                <?php endif ?>

                                <?php if ($part == 'toggle' && $view->menu()->exists('main')) : ?>
                                    <a class="uk-navbar-toggle <?= $navbar['always_responsive'] ? '' : 'uk-hidden@s' ?>" uk-navbar-toggle-icon uk-toggle href="#offcanvas"></a>
                                <?php elseif ($part == 'logo') : ?>
                                    <a href="<?= $view->url()->get() ?>" class="uk-navbar-item uk-logo">
                                        <img src="<?= $params['logo'] ?>" alt="<?= $params['title'] ?>">
                                        <img class="uk-logo-inverse" src="<?= $params['logo_inverse'] ?>" alt="<?= $params['title'] ?>">
                                    </a>
                                <?php elseif (in_array($part, ['navbar_a','navbar_b'])) : ?>                                 
                                    <?= $view->position($part,'navbar-items.php') ?>
                                <?php endif ?>

                            <?php endforeach ?>

                            <?php if($position == 'left') : ?><div class="uk-navbar-item"></div><?php endif ?>

                        </div>

                    <?php endif ?>

                <?php endforeach ?>

            </div>

        </div>
    </nav>

</div>