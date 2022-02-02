var i = 0;

var u_exp = [
    "Informar o nome completo do responsável por esta investigação. ex: Mário José da Silva",
    "Informar a função do responsável por esta investigação. ex: Enfermeiro",
    "Registrar a assinatura do responsável por esta investigação.",
    "Informar o nome do município/unidade de saúde responsável por esta investigação.",
    "Informar o código da unidade de saúde responsável por esta investigação.",
]

$('.u-label').each(function (index) {
    $(this).append(
        `<a tabindex="0" class="btn py-0" role="button" data-bs-toggle="popover"
        data-bs-trigger="focus" data-bs-placement="top" 
        data-bs-content="` + u_exp[i++] + `">?</a>`
    )
})

function imprimirDetalhes(exp) {
    $('.form-label').not('.u-label').each(function (index) {
        if (!$(this).hasClass('cod-label')) {
            i++;
        }
        $(this).prepend(i + ". ");
        $(this).append(
            `<a tabindex="0" class="btn py-0" role="button" data-bs-toggle="popover"
            data-bs-trigger="focus" data-bs-placement="top" 
            data-bs-content="` + exp[i - 1] + `">?</a>`
        )
    })
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl, {
            html: true
        })
    })
}

$('.gestante').hide();
$('.idade-gestacional').hide();

$('input[name="Sexo"]').change(function () {
    if (this.value == 'F') {
        $('.gestante').show();
    }
    else {
        $('.gestante').hide();
    }
})

$('input[name="Gestante"]').change(function () {
    if (this.value == 'S') {
        $('.idade-gestacional').show();
    }
    else {
        $('.idade-gestacional').hide();
    }
})

var uf = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF',
    'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA',
    'PB', 'PR', 'PE', 'PI', 'RR', 'RO', 'RJ',
    'RN', 'RS', 'SC', 'SP', 'SE', 'TO'
]

uf.forEach(e => {
    $("select[name='UF']").append(
        "<option value='" +
        e + "'>" + e + "</option>"
    )
});

$('select').on('change', function () {
    $(this).addClass('selected');
})

$('input[type="date"]').on('change', function () {
    console.log($(this).val());
    $(this).addClass('selected');
})

