<?php

namespace SAB\Penta;

use Pagekit\Module\Module;
use Pagekit\Application;


class Theme extends Module
{

    public function main(Application $app)
    {
        $section = [
            'classes' => 'uk-section-primary uk-grid-divider',
            'bgClasses' => 'uk-background-contain',
            'custom' => 'uk-flex-center'
        ];

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
                'a' => $section,
                'b' => $section,
                'c' => $section,
                'd' => $section,
            ],
            'bottom' => [
                'a' => $section,
                'b' => $section,
                'c' => $section,
                'd' => $section,
            ],
            'main' => [
                'style' => '',
                'preserve_color' => false,
                'size' => '',
                'inverse' => '',
                'bg' => '',
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
                    'grid' => ''
                ],
                'bottom' => [
                    'grid' => ''
                ]
            ],
            'footer' => $section,
            'fixed' => [
                'position' => 'center-left',
                'position_modifier' => 'small',
            ]
        ];
    }
}
