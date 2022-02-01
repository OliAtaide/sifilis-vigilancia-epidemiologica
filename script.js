var i = 0;

$('.form-label').not('.u-label').each(function (index) {
    if(!$(this).hasClass('cod-label')){
        i++;
    }
    $(this).prepend(i + ". ");
})

$('.gestante').hide();
$('.idade-gestacional').hide();

$('input[name="Sexo"]').change(function () {
    if(this.value == 'F'){
        $('.gestante').show();
    }
    else{
        $('.gestante').hide();
    }
})

$('input[name="Gestante"]').change(function () {
    if(this.value == 'S'){
        $('.idade-gestacional').show();
    }
    else{
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