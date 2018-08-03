<?php

use SAB\Penta\Theme;

return [

    'name' => 'theme-penta',

    'menus' => [
        'main' => 'Main',
        'footer' => 'Footer'
    ],

    'autoload' => [
        'SAB\\Penta\\' => 'src'
    ],

    'main' => 'SAB\\Penta\\Theme',


    'positions' => [
        'toolbar' => 'Toolbar',
        'navbar_a' => 'Navbar A',
        'navbar_b' => 'Navbar B',
        'hero' => 'Hero',
        'top_a' => 'Top A',
        'top_b' => 'Top B',
        'top_c' => 'Top C',
        'top_d' => 'Top D',
        'sidebar_a' => 'Sidebar A',
        'sidebar_b' => 'Sidebar B',
        'main_top' => 'Main Top',
        'main_bottom' => 'Main Bottom',
        'bottom_a' => 'Bottom A',
        'bottom_b' => 'Bottom B',
        'bottom_c' => 'Bottom C',
        'bottom_d' => 'Bottom D',
        'footer' => 'Footer',
        'fixed' => 'Fixed'
    ],

    'widget' => [
        'style' => 'uk-card-default',
        'hover' => false,
        'size' => '',
        'alignment' => '',
        'heading' => [
            'style' => '',
            'tag' => 'h3'
        ],
        'width' => '',
        'visibility' => [
            'visible' => '',
            'hidden' => '',
            'screen' =>''
        ],
        'media_img' => '',
        'media_pos' => 'top',
        'badge_text' => '',
        'badge_style' => ''
    ],

    'config' => [
        'logo_inverse' => '',
        'css' => ''
    ],

    'events' => [

        'view.system/site/admin/settings' => function ($event, $view) use ($app) {
            $view->script('site-theme', 'theme:app/bundle/site-theme.js', 'site-settings');
            $view->data('$theme', $this);
        },

        'view.system/site/admin/edit' => function ($event, $view) {
            $view->script('node-theme', 'theme:app/bundle/node-theme.js', 'site-edit');
        },

        'view.system/widget/edit' => function ($event, $view) {
            $view->script('widget-theme', 'theme:app/bundle/widget-theme.js', 'widget-edit');
        }

    ]

];
