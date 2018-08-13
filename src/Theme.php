<?php

namespace SAB\Penta;

use Pagekit\Module\Module;
use Pagekit\Application;


class Theme extends Module
{

    public function main(Application $app)
    {
        $position = [
            'classes' => 'uk-grid-divider',
            'custom' => 'uk-flex-center'
        ];

        $section = [
            'classes' => 'uk-background-cover',
            'background' => '',
            'custom' => ''
        ];

        $this->options['node'] = [
            'Navbar' => [],
            'Hero' => [
                'classes' => 'uk-position-center',
                'type' => 'img',
                'height' => 'viewport',
                'img' => '',
                'video' => [
                    'src' => '',
                    'uk-video' => 'autoplay:inview;automute:true'
                ],
                'iframe' => ''
            ],
            'SectionTopA' => $section,
            'SectionTopB' => $section,
            'SectionTopC' => $section,
            'SectionTopD' => $section,
            'SectionMain' => $section,
            'SectionBottomA' => $section,
            'SectionBottomB' => $section,
            'SectionBottomC' => $section,
            'SectionBottomD' => $section,
            'SectionFoot' => $section,
            'PositionTopA' => $position,
            'PositionTopB' => $position,
            'PositionTopC' => $position,
            'PositionTopD' => $position,
            'PositionMainTop' => $position,
            'PositionMainBottom' => $position,
            'PositionBottomA' => $position,
            'PositionBottomB' => $position,
            'PositionBottomC' => $position,
            'PositionBottomD' => $position,
            'PositionFoot' => $position
        ];
    }
}
