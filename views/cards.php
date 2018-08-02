<?php foreach ($widgets as $widget) : ?>

    <?php
        $classes = '';
        if($widget->theme['width']) foreach(explode(',',$widget->theme['width']) as $width) $classes .= ' uk-width-'.$width;
        if($widget->theme['alignment']) foreach(explode(',',$widget->theme['alignment']) as $width) $classes .= ' uk-text-'.$width;
        if($widget->theme['visibility']['visible']) $classes .= ' uk-visible'.$widget->theme['visibility']['visible'];
        if($widget->theme['visibility']['hidden']) $classes .= ' uk-hidden'.$widget->theme['visibility']['hidden'];
        if($widget->theme['visibility']['screen']) $classes .= ' uk-hidden-'.$widget->theme['visibility']['screen'];
    ?>
    <div class="<?= $classes ?>">
        <?php
            $classes = 'uk-card';
            if($widget->theme['style']) $classes .= ' '.$widget->theme['style'];
            if($widget->theme['hover']) $classes .= ' uk-card-hover';
            if($widget->theme['size']) $classes .= ' uk-card-'.$widget->theme['size'];
        ?>
        <div class="<?= $classes ?> uk-grid-collapse uk-child-width-1-1 <?= $widget->theme['media_img'] && in_array($widget->theme['media_pos'],['left','right']) ? 'uk-child-width-1-2@s' : '' ?>" uk-grid>
            <?php if ($widget->theme['media_img']) : ?>
                <div class="uk-card-media-<?= $widget->theme['media_pos'] ?> <?= in_array($widget->theme['media_pos'],['bottom','right']) ? 'uk-flex-last' : '' ?> uk-cover-container">
                    <img src="<?= $widget->theme['media_img'] ?>" uk-cover>
                    <canvas width="2560" height="1440"></canvas>
                </div>
            <?php endif ?>
            <div>
                <div class="uk-card-body">
                    <?php if($widget->theme['badge_text']) :?>
                        <div class="uk-card-badge uk-label <?php if ($widget->theme['badge_style']) : ?> uk-card-<?= $widget->theme['badge_style']?> <?php endif ?>"><?= $widget->theme['badge_text'] ?></div>
                    <?php endif ?>
                    <?= $view->render('heading.php', ['title' => $widget->title, 'heading' => $widget->theme['heading'], 'default' => 'uk-card-title']) ?>
                    <p>
                        <?= $widget->get('result') ?>
                    </p>
                </div>
            </div>
        </div>
    </div>

<?php endforeach ?>