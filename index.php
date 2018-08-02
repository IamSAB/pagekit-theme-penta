<?php

return [

    'name' => 'theme-master',

    'menus' => [
        'main' => 'Main',
        'footer' => 'Footer'
    ],

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

    'node' => [
        'navbar' => [
            'layout' => [
                'left' => 'navbar_a',
                'center' => 'menu,logo',
                'right' => 'navbar_b,toggle'
            ],
            'centered_split_menu' => true,
            'expand' => false,
            'type' => 'default',
            'inverse' => '',
            'always_responsive' => false,
            'sticky' => false,
            'uk-sticky' => [
                'top' => 300,
                'show-on-up' => false,
                'animation' => 'slide-top'
            ],
            'uk-navbar' => [
                'dropbar' => false,
                'dropbar-mode' => 'slide'
            ],
            'uk-offcanvas' => [
                'mode' => 'slide',
                'flip' => false,
                'overlay' => false
            ],
        ],
        'hero' => [
            'type' => 'img',
            'height' => 'viewport',
            'img' => '',
            'video' => '',
            'iframe' => '',
            'blend' => '',
            'position' => 'center',
            'position_modifier' => '',
            'inverse' => ''
        ],
        'top' => [
            'a' => [
                'style' => '',
                'preserve_color' => false,
                'size' => '',
                'inverse' => '',
                'bg' => [
                    'src' => '',
                    'size' => '',
                    'responsive' => '',
                    'position' => '',
                    'blend' => '',
                    'fixed' => false,
                    'norepeat' => false
                ],
                'grid' => [
                    'width' => 'auto',
                    'gutter' => '',
                    'match' => true,
                    'divider' => false,
                    'class' => 'uk-flex-center'
                ],
                'container_size' => '',
                'class' => '',
            ],
            'b' => [
                'style' => '',
                'preserve_color' => false,
                'size' => '',
                'inverse' => '',
                'bg' => [
                    'src' => '',
                    'size' => '',
                    'responsive' => '',
                    'position' => '',
                    'blend' => '',
                    'fixed' => false,
                    'norepeat' => false
                ],
                'grid' => [
                    'width' => 'auto',
                    'gutter' => '',
                    'match' => true,
                    'divider' => false,
                    'class' => 'uk-flex-center'
                ],
                'container_size' => '',
                'class' => '',
            ],
            'c' => [
                'style' => '',
                'preserve_color' => false,
                'size' => '',
                'inverse' => '',
                'bg' => [
                    'src' => '',
                    'size' => '',
                    'responsive' => '',
                    'position' => '',
                    'blend' => '',
                    'fixed' => false,
                    'norepeat' => false
                ],
                'grid' => [
                    'width' => 'auto',
                    'gutter' => '',
                    'match' => true,
                    'divider' => false,
                    'class' => 'uk-flex-center'
                ],
                'container_size' => '',
                'class' => '',
            ],
            'd' => [
                'style' => '',
                'preserve_color' => false,
                'size' => '',
                'inverse' => '',
                'bg' => [
                    'src' => '',
                    'size' => '',
                    'responsive' => '',
                    'position' => '',
                    'blend' => '',
                    'fixed' => false,
                    'norepeat' => false
                ],
                'grid' => [
                    'width' => 'auto',
                    'gutter' => '',
                    'match' => true,
                    'divider' => false,
                    'class' => 'uk-flex-center'
                ],
                'container_size' => '',
                'class' => '',
            ]
        ],
        'main' => [
            'style' => '',
            'preserve_color' => false,
            'size' => '',
            'inverse' => '',
            'bg' => [
                'src' => '',
                'size' => '',
                'responsive' => '',
                'position' => '',
                'blend' => '',
                'fixed' => false,
                'norepeat' => false
            ],
            'heading' => [
                'style' => '',
                'tag' => 'h1'
            ],
            'alignment' => '',
            'container_size' => '',
            'class' => '',
            'sidebar' => [
                'layout' => 'ssm',
                'width_a' => '1-1,1-4@m',
                'width_b' => '1-1,1-4@m'
            ],
            'sticky_sidebar_a' => false,
            'sticky_sidebar_b' => false,
            'top' => [
                'grid' => [
                    'width' => 'auto',
                    'gutter' => '',
                    'match' => true,
                    'divider' => false,
                    'class' => 'uk-flex-center'
                ]
            ],
            'bottom' => [
                'grid' => [
                    'width' => 'auto',
                    'gutter' => '',
                    'match' => true,
                    'divider' => false,
                    'class' => 'uk-flex-center'
                ]
            ],
        ],

        'bottom' => [
            'a' => [
                'style' => '',
                'preserve_color' => false,
                'size' => '',
                'inverse' => '',
                'bg' => [
                    'src' => '',
                    'size' => '',
                    'responsive' => '',
                    'position' => '',
                    'blend' => '',
                    'fixed' => false,
                    'norepeat' => false
                ],
                'grid' => [
                    'width' => 'auto',
                    'gutter' => '',
                    'match' => true,
                    'divider' => false,
                    'class' => 'uk-flex-center'
                ],
                'container_size' => '',
                'class' => '',
            ],
            'b' => [
                'style' => '',
                'preserve_color' => false,
                'size' => '',
                'inverse' => '',
                'bg' => [
                    'src' => '',
                    'size' => '',
                    'responsive' => '',
                    'position' => '',
                    'blend' => '',
                    'fixed' => false,
                    'norepeat' => false
                ],
                'grid' => [
                    'width' => 'auto',
                    'gutter' => '',
                    'match' => true,
                    'divider' => false,
                    'class' => 'uk-flex-center'
                ],
                'container_size' => '',
                'class' => ''
            ],
            'c' => [
                'style' => '',
                'preserve_color' => false,
                'size' => '',
                'inverse' => '',
                'bg' => [
                    'src' => '',
                    'size' => '',
                    'responsive' => '',
                    'position' => '',
                    'blend' => '',
                    'fixed' => false,
                    'norepeat' => false
                ],
                'grid' => [
                    'width' => 'auto',
                    'gutter' => '',
                    'match' => true,
                    'divider' => false,
                    'class' => 'uk-flex-center'
                ],
                'container_size' => '',
                'class' => ''
            ],
            'd' => [
                'style' => '',
                'preserve_color' => false,
                'size' => '',
                'inverse' => '',
                'bg' => [
                    'cover' => true,
                    'fixed' => false,
                    'norepeat' => false
                ],
                'grid' => [
                    'width' => 'auto',
                    'gutter' => '',
                    'match' => true,
                    'divider' => false,
                    'class' => 'uk-flex-center'
                ],
                'container_size' => '',
                'class' => ''
            ]
        ],

        'footer' => [
            'style' => 'secondary',
            'preserve_color' => false,
            'size' => 'small',
            'inverse' => '',
            'bg' => [
                'src' => '',
                'cover' => true,
                'fixed' => false,
                'norepeat' => false
            ],
            'grid' => [
                'width' => 'auto',
                'gutter' => '',
                'match' => true,
                'divider' => false,
                'class' => 'uk-flex-center'
            ],
            'container_size' => '',
            'class' => ''
        ],

        'fixed' => [
            'position' => 'center-left',
            'position_modifier' => 'small',
        ]
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
