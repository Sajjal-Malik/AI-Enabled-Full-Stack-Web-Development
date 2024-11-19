// Define your OpenAI API key here
const OPEN_AI_API_KEY = '<Your-API-Key>';



function GPT(prompt){
    fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPEN_AI_API_KEY}`
        },
        body: JSON.stringify({
            model: 'text-davinci-003',
            prompt: prompt,
            max_tokens: 200
        })
    })
    .then(response => response.json())
    .then(data => {
        if(data.choices && data.choices.length > 0) {
            console.log('Generated text:', data.choices[0].text);
            alert(data.choices[0].text)
        } else {
            console.log('No text was generated.');
        }
    })
    .catch((error) => console.error('Error:', error));
    
}

const my_prompt = prompt('Enter Prompt: ');

GPT(my_prompt);