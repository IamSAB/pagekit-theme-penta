<?php

namespace SAB\Penta;

use Pagekit\Module\Module;
use Pagekit\Application;


class Theme extends Module
{

    public function main(Application $app)
    {
        $position = [
            'classes' => 'uk-flex-center uk-flex-middle',
            'custom' => ''
        ];

        $section = [
            'classes' => 'uk-background-cover',
            'type' => 'bg',
            'src' => '',
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
            'Content' => [
                'heading' => '',
                'classes' => ''
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
