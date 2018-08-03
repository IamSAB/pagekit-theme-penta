<?php

namespace SAB\Penta;

use Pagekit\Module\Module;
use Pagekit\Application;


class Theme extends Module
{
    const CONFIG_GRID = [
        'width' => 'auto',
        'gutter' => '',
        'match' => true,
        'divider' => false,
        'class' => 'uk-flex-center'
    ];

    const CONFIG_BACKGROUND = [
        'src' => '',
        'size' => '',
        'responsive' => '',
        'position' => '',
        'blend' => '',
        'fixed' => false,
        'norepeat' => false
    ];

    const CONFIG_SECTION = [
        'style' => '',
        'preserve_color' => false,
        'size' => '',
        'inverse' => '',
        'bg' => self::CONFIG_BACKGROUND,
        'grid' => self::CONFIG_GRID,
        'container_size' => '',
        'class' => '',
    ];

    public function main(Application $app)
    {
        $this->options['node'] = [
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
                'a' => self::CONFIG_SECTION,
                'b' => self::CONFIG_SECTION,
                'c' => self::CONFIG_SECTION,
                'd' => self::CONFIG_SECTION,
            ],
            'bottom' => [
                'a' => self::CONFIG_SECTION,
                'b' => self::CONFIG_SECTION,
                'c' => self::CONFIG_SECTION,
                'd' => self::CONFIG_SECTION,
            ],
            'main' => [
                'style' => '',
                'preserve_color' => false,
                'size' => '',
                'inverse' => '',
                'bg' => self::CONFIG_BACKGROUND,
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
                    'grid' => self::CONFIG_GRID
                ],
                'bottom' => [
                    'grid' => self::CONFIG_GRID
                ]
            ],
            'footer' => [
                'style' => 'secondary',
                'preserve_color' => false,
                'size' => 'small',
                'inverse' => '',
                'bg' => self::CONFIG_BACKGROUND,
                'grid' => self::CONFIG_GRID,
                'container_size' => '',
                'class' => ''
            ],
            'fixed' => [
                'position' => 'center-left',
                'position_modifier' => 'small',
            ]
        ];
    }
}
