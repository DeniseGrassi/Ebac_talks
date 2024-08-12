AOS.init();

const dataDoEvento = new Date("Dec 12, 2024 19:00:00"); /* atribuindo na constante dataDoEvento a data do evento futuro*/
const timeStampDoEvento = dataDoEvento.getTime();  /* o getTime transforma a data do evento em milisegundos */

const contaAsHoras = setInterval(function() {     /* Esse código continuará a executar a função a cada segundo (1000milisegundos), mostrando a contagem regressiva em dias até o evento.*/
    const agora = new Date();   /* atribuindo na constante agora a data atual */
    const timeStampAtual = agora.getTime(); /* o getTime transforma a data atual em milisegundos */

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;   /* faz o subtração da data do evento com a data atual em milissegundos*/

    // Conversão de Milissegundos para Dias, Horas, Minutos e Segundos:
    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;
    
    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);  /* math.floor para arredondar p baixo, garantir q eh inteiro */
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs); /* % é o resto da divisao da distancia do evento por horas em milisegundo */
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (distanciaAteOEvento < 0) {      /* a função contaAsHoras vai parar qnd a contagem regressiva ate o evento seja 0 */
        clearInterval(contaAsHoras); /* clearInterval é uma função em JavaScript usada para interromper a execução contínua de um intervalo que foi previamente iniciado com setInterval*/
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }       /* msg que vai aparecer quando a subtracao das const do evento futuro e evento agora forem 0 */
}, 1000);