var labels = $('.form-label').toArray();

for (let i = 0; i < labels.length; i++) {
    labels[i].prepend(i + 1 + ". ");
}

var uf = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF',
    'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA',
    'PB', 'PR', 'PE', 'PI', 'RR', 'RO', 'RJ',
    'RN', 'RS', 'SC', 'SP', 'SE', 'TO'
]

console.log($("select[name='UF']"));

uf.forEach(e => {
    $("select[name='UF']").append(
        "<option value='" +
        e + "'>" + e + "</option>"
    )
});
// <option value="">Selecione a UF</option>