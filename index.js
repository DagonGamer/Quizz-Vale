let PreEl = document.querySelector("div.Preguntas");
var Aciertos = 0;

for (let Pregunta of Preguntas) {

    switch (Pregunta.Tipo) {

        case "Number":

            PreEl.innerHTML = `
                <div class="Number">
                    <p>${Pregunta.Enunciado}</p>
                    <form onsubmit="if (event.target.querySelector('input').value == '${Pregunta.Respuesta}') Aciertos++; event.target.parentNode.style.left = '200%'; event.target.style.filter = 'brightness(0.5)'; setTimeout(() => event.target.parentNode.remove(), 5000); event.preventDefault();">
                        <input type="text" placeholder="Escribe el número aquí">
                    </form>
                </div>
            ` + PreEl.innerHTML;
            
        break;

        case "Quizz":

            let Respuestas = [...Pregunta.Incorrectas, Pregunta.Respuesta];
            Respuestas.sort(function() { return Math.random() - 0.5 });

            PreEl.innerHTML = `
                <div class="Quizz">
                    <p>${Pregunta.Enunciado}</p>
                    <div class="${Pregunta.Respuesta}">
                        ${`<button onclick="if (event.target.innerText == '${Pregunta.Respuesta}') Aciertos++; console.log(event.target); event.target.parentNode.parentNode.style.left = '200%'; event.target.style.filter = 'brightness(0.5)'; setTimeout(() => event.target.parentNode.parentNode.remove(), 5000);">` + Respuestas.join(`</button><button onclick="if (event.target.innerText == '${Pregunta.Respuesta}') Aciertos++; event.target.parentNode.parentNode.style.left = '200%'; event.target.style.filter = 'brightness(0.5)'; setTimeout(() => event.target.parentNode.parentNode.remove(), 5000);">`) + "</button>"}
                    </div>
                </div>
            ` + PreEl.innerHTML;
            
        break;
    
        default:
            break;
    }

}