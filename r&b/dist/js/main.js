$(function () {

    function calcSum() {
        let qty = $('#license-qty option:selected').val();
        let price = $('input[name="license-plan"]:checked').val();
        let sum = qty * price;
        $('.total-cost').html('TOTAL: <span class="total-cost__amount">' + sum + '</span>' );
    }

    function calcLicensePlan() {
        let licensePlan = $('input[name="license-plan"]:checked + label').text();
        let planNumber = licensePlan.substring(licensePlan.length - 2);
        $('.selected-plan').text('Selected plan: ' + planNumber);
        $('input[name="license-plan"]').parent().removeClass('radio-buttons__item--checked');
        $('input[name="license-plan"]:checked').parent().addClass('radio-buttons__item--checked');
    }

    $("#license-qty").on('click', calcSum);
    $('input[name="license-plan"]').on('click', calcSum);
    $('input[name="license-plan"]').on('click', calcLicensePlan);

})