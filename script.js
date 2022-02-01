var i = 0;

explicacoes = [
    "Este campo identifica o tipo de notificação, informação necessária à digitação. Não é necessário preenchê-lo.",
    "Nome do agravo/doença ou código correspondente estabelecido pelo SINAN (CID 10) que está sendo notificado. <b>CAMPO CHAVE</b>.",
    "Anotar a data da notificação: data de preenchimento da ficha de notificação. <b>CAMPO CHAVE</b>.",
    `Preencher com a sigla da Unidade Federada (UF) que realizou a notificação. <b>CAMPO DE PREENCHIMENTO OBRIGATÓRIO</b>.`,
    `Preencher com o nome completo do município (ou código correspondente segundo cadastro do IBGE)
    onde está localizada a unidade de saúde (ou outra fonte notificadora) que realizou a notificação.
    <b>CAMPO CHAVE</b>.`,
    `Preencher com o nome completo (ou código correspondente ao Cadastro Nacional dos Estabelecimentos
    de Saúde – CNES) da unidade de saúde (ou outra fonte notificadora) que realizou a notificação.
    <b>CAMPO DE PREENCHIMENTO OBRIGATÓRIO</b>.`,
    `Anotar a data do diagnóstico ou da evidência laboratorial e/ou clínica da doença de acordo com a
    definição de caso vigente no momento da notificação. <b>CAMPO DE PREENCHIMENTO OBRIGATÓRIO</b>.`,
    "Preencher com o nome completo do paciente (sem abreviações). <b>CAMPO DE PREENCHIMENTO OBRIGATÓRIO</b>.",
    `Preencher com a data de nascimento do paciente (dia/mês/ano) de forma completa. <b>CAMPO DE PREENCHIMENTO OBRIGATÓRIO</b>.`,
    `Anotar a idade do paciente somente se a data de nascimento for desconhecida (Ex. 20 dias = 20 D; 3
    meses = 3 M; 26 anos = 26 A). Se o paciente não souber informar sua idade, anotar a idade aparente.
    OBS: Se a data de nascimento não for preenchida, a idade será <b>CAMPO DE PREENCHIMENTO OBRIGATÓRIO</b>.`,
    `Informar o sexo do paciente (M= masculino, F= feminino e I= ignorado). <b>CAMPO DE PREENCHIMENTO OBRIGATÓRIO</b>.`,
    `Preencher com a idade gestacional da paciente, quando gestante. <b>CAMPO DE PREENCHIMENTO OBRIGATÓRIO</b>
    quando sexo F = feminino (1= 1º Trimestre, 2= 2º Trimestre, 3= 3º Trimestre, 4=
    Idade gestacional ignorada, 5= Não, 6= Não se aplica, 9= Ignorado).`,
    `Preencher com o código correspondente à cor ou raça declarada pela pessoa: (1= Branca, 2= Preta, 3=
    Amarela (compreendo-se nesta categoria a pessoa que se declarou de raça amarela), 4= Parda (incluindose nesta categoria a pessoa que se declarou mulata, cabocla, cafuza, mameluca ou mestiça de preto com
    pessoa de outra cor ou raça), 5= indígena (considerando-se nesta categoria a pessoa que se declarou
    indígena ou índia). <b>CAMPO ESSENCIAL</b>.`,
    `Preencher com a série e grau que a pessoa está freqüentando ou freqüentou considerando a última série
    concluída com aprovação ou grau de instrução do paciente por ocasião da notificação. (0=Analfabeto; 1=
    1ª a 4ª série incompleta do EF (antigo primário ou 1º grau), 2= 4ª série completa do EF (antigo primário
    ou 1º grau), 3= 5ª a 8ª série incompleta do EF (antigo ginásio ou 1º grau), 4= Ensino fundamental
    completo (antigo ginásio ou 1º grau), 5= Ensino médio incompleto (antigo colegial ou 2º grau), 6=
    Ensino médio completo (antigo colegial ou 2º grau), 7= Educação superior incompleta, 8= Educação
    superior completa, 9=Ignorado ou 10= Não se aplica). <b>CAMPO ESSENCIAL</b>.`,
    "Preencher com o número do CARTÃO ÚNICO do Sistema Único de Saúde – SUS",
    "Preencher com o nome completo da mãe do paciente (sem abreviações). <b>CAMPO ESSENCIAL</b>.",
    `Preencher com a sigla da Unidade Federada (UF) de residência do paciente. <b>CAMPO DE PREENCHIMENTO OBRIGATÓRIO</b> quando residente no Brasil.`,
    `Anotar o nome do município (ou código correspondente segundo cadastro do IBGE) da residência do
    paciente ou do local de ocorrência do surto, se notificação de surto. <b>CAMPO DE PREENCHIMENTO OBRIGATÓRIO</b> quando UF for digitada.`,
    "Anotar o nome do distrito de residência do paciente. <b>CAMPO ESSENCIAL</b>.",
    `Anotar o nome do bairro (ou código correspondente segundo cadastro do SINAN) de residência do
    paciente ou do local de ocorrência do surto, se notificação de surto. <b>CAMPO ESSENCIAL</b>.`,
    `Anotar o tipo (avenida, rua, travessa, etc) e nome completo ou código correspondente do logradouro da
    residência do paciente, se notificação individual ou do local de ocorrência do surto, se notificação de
    surto. Se o paciente for indígena anotar o nome da aldeia. <b>CAMPO ESSENCIAL</b>.`,
    `Anotar o número do logradouro da residência do paciente, se notificação individual ou do local de
    ocorrência do surto, se notificação de surto. <b>CAMPO ESSENCIAL</b>.`,
    "Anotar o complemento do logradouro (ex. Bloco B, apto 402, lote 25, casa 14, etc). <b>CAMPO ESSENCIAL</b>.",
    `Caso esteja sendo utilizado o georreferenciamento, informar o local que foi adotado para o campo
    Geocampo1 (ex. Se o município esteja usando o Geocampo1 para informar a <b>quadra ou número</b>, nele
    deve ser informado o número da <b>quadra ou número</b>).`,
    "Caso esteja usando georreferenciamento, informar o local que foi adotado para o campo Geocampo2.",
    `Anotar o ponto de referência para localização da residência do paciente, se notificação individual ou do
    local de ocorrência do surto, se notificação de surto (perto da padaria do João) <b>CAMPO ESSENCIAL</b>.`,
    `Anotar o código de endereçamento postal do logradouro (avenida, rua, travessa, etc) da residência do
    paciente, se notificação individual ou do local de ocorrência do surto, se notificação de surto. <b>CAMPO ESSENCIAL</b>.`,
    `Anotar DDD e telefone do paciente, se notificação individual ou do local de ocorrência do surto, se
    notificação de surto. <b>CAMPO ESSENCIAL</b>.`,
    `Zona de residência do paciente, se notificação individual ou do local de ocorrência do surto, se
    notificação de surto por ocasião da notificação (Ex. 1= área com características estritamente urbana, 2=
    área com características estritamente rural, 3= área rural com aglomeração populacional que se
    assemelha à uma área urbana). <b>CAMPO ESSENCIAL</b>.`,
    `Anotar o nome do país de residência quando o paciente notificado residir em outro país. <b>CAMPO DE PREENCHIMENTO OBRIGATÓRIO</b>.`,
    "Informar a idade da mãe em anos.",
    `Preencher com o código correspondente à cor ou raça declarada pela mãe: (1= Branca, 2= Preta, 3=
    Amarela (compreendo-se nesta categoria a pessoa que se declarou de raça amarela), 4= Parda (incluindose nesta categoria a pessoa que se declarou mulata, cabocla, cafuza, mameluca ou mestiça de preto com
    pessoa de outra cor ou raça), 5= indígena (considerando-se nesta categoria a pessoa que se declarou
    indígena ou índia ou 9= ignorado).`,
    `Informar a atividade exercida pela mãe do paciente no setor formal, informal ou autônomo ou sua última
    atividade exercida quando a mãe for desempregada. O ramo de atividade econômica da mãe refere-se as
    atividades econômicas desenvolvidas nos processos de produção do setor primário (agricultura e
    extrativismo); secundário (indústria) ou terciário (serviços e comércio).`,
    `Preencher com a série e grau que a mãe do paciente está freqüentando ou freqüentou considerando a
    última série concluída com aprovação ou grau de instrução da mãe do paciente por ocasião da
    notificação. (0=Analfabeto; 1= 1ª a 4ª série incompleta do EF (antigo primário ou 1º grau), 2= 4ª série
    completa do EF (antigo primário ou 1º grau), 3= 5ª a 8ª série incompleta do EF (antigo ginásio ou 1º
    grau), 4= Ensino fundamental completo (antigo ginásio ou 1º grau), 5= Ensino médio incompleto (antigo
    colegial ou 2º grau), 6= Ensino médio completo (antigo colegial ou 2º grau), 7= Educação superior
    incompleta, 8= Educação superior completa, 9=Ignorado ou 10= Não se aplica).`,
    "Informar se a gestante fez o pré-natal nesta gestação (1= sim, 2= não ou 9= ignorado).",
    "Preencher com a sigla da Unidade Federada (UF) do município de realização do pré-natal.",
    `Informar o nome do município de localização da unidade de saúde de realização do pré-natal (ou código
    correspondente segundo cadastro do IBGE).`,
    "Preencher com o nome da unidade de saúde onde a gestante realizou o pré-natal ou código correspondente.",
    `Informar se o diagnóstico da sífilis na mãe foi estabelecido (1-Durante o pré-natal; 2-No momento do
    parto/curetagem; 3- Após o parto; 4-Não foi realizado, 9-Ignorado).`,
    "Sorologia não treponêmica: VDRL (Veneral Diseases Research Laboratory) e RPR (Rapid Plasma Reagin);",
    "Informar a titulação do VDRL/RPR.",
    "Informar a data de realização do teste.",
    `FTA-Abs (Fluorescent Treponemal Antibody-absorption), MHA-Tp (Microhemaglutination Treponema
    pallidum), TPHA (Treponema pallidum Hemaglutination), ELISA (Enzyme-Linked Immunosorbent
    Assay): indicados na confirmação diagnóstica e exclusão de resultados de testes não treponêmicos falsos
    positivos. Em crianças, menores de 18 meses de idade, a performance dos testes treponêmicos pode não
    ser adequada para definição diagnóstica.`,
    `Esquema de Tratamento da mãe:
    <b>Esquema de Tratamento Adequado:</b>
    <ul>
        <li>
            É todo tratamento completo, com penicilina e adequado instituído pelo menos 30 dias antes do parto e
            parceiro tratado concomitantemente com a gestante.
        </li>
    </ul>
    <b>Esquema de Tratamento Inadequado:</b>
    <ul>
        <li>
            é todo tratamento feito com qualquer medicamento que não a penicilina; ou
        </li>
        <li>
            tratamento incompleto, mesmo tendo sido feito com penicilina; ou
        </li>
        <li>
            tratamento não adequado para a fase clínica da doença; ou
        </li>
        <li>
            a instituição do tratamento com menos de 30 dias antes do parto; ou
        </li>
        <li>
            elevação dos títulos após o tratamento, no seguimento; ou
        </li>
        <li>
            quando o(s) parceiro(s) não foi(ram) tratado(s) ou foi(ram) tratado(s) inadequadamente, ou quando não
            se tem essa informação disponível.
        </li>
    </ul> `,
    "Anotar a data do início do tratamento materno. Ex: 06/06/2007",
    `Informar se o tratamento do(s) parceiro(s) foi (ram) realizado(s) no mesmo período que o tratamento da
    gestante (1= sim, 2= não ou 9= ignorado).`,
    "Preencher com a sigla da Unidade Federada (UF) do nascimento, aborto ou óbito da criança.",
    `Informar o nome do município de nascimento, aborto ou óbito da criança (ou código correspondente
    segundo cadastro do IBGE).`,
    `Informar o nome da Instituição de saúde onde a criança nasceu, ou ocorreu o aborto ou o óbito (ou
    código correspondente segundo cadastro do SINAN). <b>CAMPO DE PREENCHIMENTO OBRIGATÓRIO</b>.`,
    "Sorologia não treponêmica: VDRL (Veneral Diseases Research Laboratory) e RPR (Rapid Plasma Reagin);",
    "Informar a titulação do VDRL/RPR (ex. - 1: 32). <b>CAMPO DE PREENCHIMENTO OBRIGATÓRIO</b>, quando o campo 50=1",
    "Informar a data da realização do teste.",
    `Refere-se ao resultado do teste treponêmico, confirmatório, realizado após os 18 meses de idade da
    criança. Informar – <b>Não se aplica</b> – quando a idade da criança for menor que 18 meses. <b>CAMPO DE PREENCHIMENTO OBRIGATÓRIO</b>.`,
    "Informar a data da realização do teste.",
    "Sorologia não treponêmica: VDRL (Veneral Diseases Research Laboratory) e RPR (Rapid Plasma Reagin);",
    "Informar a titulação do VDRL/RPR (ex. - 1: 32).",
    "Informar a data da realização do teste.",
    `Titulação ascendente - Refere-se à comparação dos títulos da sorologia não treponêmica da criança após
    cada teste realizado durante o esquema de seguimento (VDRL com 1 mês, 3, 6, 12 e 18 meses) (1= sim,
    2= não, 3= não-realizado ou 9= ignorado).`,
    `Evidência de <b>T. pallidum</b> – Registrar a identificação do <b>Treponema pallidum</b> por microscopia em
    material colhido em placenta, lesões cutâneo-mucosas da criança, cordão umbilical, ou necrópsia, pela
    técnica de campo escuro, imunofluorescência ou outro método específico.`,
    `Alteração liquoríca - Informar detecção de alterações na celularidade e/ou proteínas ou outra alteração
    específica no líquor do criança (1= sim, 2= não, 3= não-realizado ou 9= ignorado).`,
    `Informar se houve alteração de ossos longos na criança compatível com sífilis congênita (1= sim, 2=
    não, 3= não-realizado ou 9= ignorado).`,
    `Refere-se ao diagnóstico clínico da criança. Informar - <b>Não se aplica</b> – por ex. quando aborto ou
    natimorto. <b>CAMPO DE PREENCHIMENTO OBRIGATÓRIO</b>.`,
    `Em relação ao tratamento da criança com sífilis congênita consultar o Manual de Sífilis Congênita –
    Diretrizes para o Controle, 2005. <b>CAMPO DE PREENCHIMENTO OBRIGATÓRIO</b>.`,
    `Informar o esquema de tratamento prescrito para a sífilis congênita instituído ao paciente. Caso o
    tratamento prescrito seja diferente do preconizado pelo Ministério da Saúde, seja em relação a droga
    utilizada ou posologia , anotar no espaço indicado.<br/>
    Em relação ao tratamento da criança com sífilis congênita consultar o Manual de Sífilis Congênita –
    Diretrizes para o Controle, 2005. Home page: www.aids.gov.br. Série Manuais nº 62 – PN-DST/AIDS`,
    `Informar a evolução do caso de sífilis congênita: <b>CAMPO DE PREENCHIMENTO OBRIGATÓRIO</b>.<br/>
    Considera-se <b>óbito por sífilis congênita</b> - o caso de morte do recém-nato, após o nascimento com vida,
    filho de mãe com sífilis não tratada ou tratada inadequadamente.<br/>
    Considera-se <b>Aborto</b> - toda perda gestacional, até 22 semanas de gestação ou com peso menor ou igual a
    500 gramas.<br/>
    Considera-se <b>Natimorto</b> - todo feto morto, após 22 semanas de gestação ou com peso maior que 500
    gramas.`,
    "Preencher com a data de ocorrência do óbito. Ex. 06/08/2007."
]

console.log(explicacoes[0])

$('.form-label').not('.u-label').each(function (index) {
    if (!$(this).hasClass('cod-label')) {
        i++;
    }
    $(this).prepend(i + ". ");
    $(this).append(
        `<a tabindex="0" class="btn py-0" role="button" data-bs-toggle="popover"
        data-bs-trigger="focus" data-bs-placement="top" 
        data-bs-content="` + explicacoes[i-1] + `">?</a>`
    )
    // $(this).append(explicacoes[i]);
})

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

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl, {
    html: true
  })
})