$(function () {

    var $form = $('form.form');

    // Focus on the first input.
    $form.find('input:visible').first().focus();

    // Highlight tabs containing errors.
    $form.find('.has-danger').each(function () {

        var $field = $(this);
        var $pane = $field.closest('.tab-pane');

        if (!$pane.length) {
            return;
        }

        $form
            .find('[data-toggle="tab"][href="#' + $pane.attr('id') + '"]')
            .addClass('text-danger');
    });
    
    var $tabs = $form.find('[data-toggle="tab"]');

    $tabs.on('click', function () {
        Cookies.set(
            window.location.pathname,
            this.href.replace(window.location.href, '')
        );
    });

    var activeHref = Cookies.get(window.location.pathname);
    var $activeTab;

    if (activeHref) {
        $activeTab = $form.find('[href="' + activeHref + '"]');
    } else {
        $activeTab = $tabs.eq(0);
    }

    if ($activeTab.length) {
        $activeTab.trigger('click');
    }
});
