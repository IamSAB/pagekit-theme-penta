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
            'height' => '',
            'ukHeightViewport' => '',
            'renderAlways' => false,
            'custom' => ''
        ];

        $section = [
            'classes' => '',
            'cover' => '',
            'src' => '',
            'container' => '',
            'custom' => ''
        ];

        $this->options['node'] = [
            'Navbar' => [
                'layout' => 'horizontal-center',
                'transparent' => false
            ],
            'Content' => [
                'heading' => '',
                'classes' => ''
            ],
            'SectionHero' => $section,
            'PositionHero' => $position,
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
