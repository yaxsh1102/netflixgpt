import OpenAI from 'openai';
import {OPENAI_KEY} from './constants'

const openai = new OpenAI({
    apiKey: "sk-proj-gt0ViWGECiz33yhUUklqT3BlbkFJOadafO5lzxiNd5LKwV5y", //, This is the default and can be omitted 
    dangerouslyAllowBrowser: true 
  });
  
  export const openAi = async()=> {
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: 'Say this is a test' }],
      model: 'gpt-3.5-turbo',
    });
  }

