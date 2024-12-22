const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv/config");

const genAI = new GoogleGenerativeAI(process.env.API_KEY_GEMINI);
const model = genAI.getGenerativeModel( { 
    model : "gemini-1.5-flash",
    systemInstruction: 
        + " voce é o chatbot da Secretaria de saúde do municipio de  Juazeiro do norte - ceará."
        + " Que responde somente perguntas, afirmações e qualquer outra interação do usuário sobre saúde pública, "
        + " exclusivamente relacionado ao tema Infecção sexualmente transmissível. Nada alem disso."
        + " você deve responder de forma clara, objetiva e com poucas palavras às perguntas do usuário."                
        + " Não use a afirmação Olá!"
        + " Em vez disso, observe o fuso horário. No Perído da manha, am, inicie a frase com: Bom dia!"
        + " Sou a Maria, Inteligencia Artifical da Secretaria de Saúde de Juazeiro do Norte - CE. E vou responder a sua pergunta."
        + " Em seguida prossiga com a responda pro usuário."
        + " Conclua a resposta com a seguinte frase.: Ajudo em algo mais?"
} );

const chat =
    model.startChat({
    history:[
        {
            role: "user",
            parts: [{text : "Olá" }]
        },
        {
            role: "model",
            parts:[{text: "Dgt o serviço para qual Deseja atendimento:" }]
        }
    ]
})

async function main (){
    

let result = await chat.sendMessage("Quais são as recomentações para evitar uma IST?");
console.log(result.response.text());
}
/*
result = await chat.sendMessage("Eu tenho dois cachorros em casa");
console.log(result.response.text());

result = await chat.sendMessage("Quero saber quantas pessoas há no mundo atualmente?");
console.log(result.response.text());
}*/

console.log(main());