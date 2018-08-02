<a href="<?= $view->url()->get() ?>" class="uk-navbar-item uk-logo">
    <img src="<?= $params['logo'] ?>" alt="<?= $params['title'] ?>">
    <?php if($params['logo_inverse']) : ?>
        <img class="uk-logo-inverse" src="<?= $params['logo_inverse'] ?>" alt="<?= $params['title'] ?>">
    <?php endif ?>
</a>