const { GoogleGenerativeAI } = require("@google/generative-ai");

require("dotenv/config");

const genAI = new GoogleGenerativeAI(process.env.API_KEY_GEMINI);
const model = genAI.getGenerativeModel({ model : "gemini-1.5-flash" });

const prompt = "Oi Gemini, tudo";
async function teste () {

    const result = await model.generateContent(prompt);
    console.log("=> " , result.response.text());
    
}


console.log(teste())

