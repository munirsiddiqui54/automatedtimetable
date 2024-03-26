function makeRequestWithRetry() {
    const prompt = "Generate a timetable for the following classes...";
    const apiKey = 'YOUR_API_KEY'; // Replace with your API key
    const maxRetries = 3;
    let retryCount = 0;

    function doRequest() {
        return axios.post(
            'https://api.openai.com/v1/completions',
            {
                model: 'gpt-3.5-turbo', // Adjust as needed
                prompt: prompt,
                max_tokens: 1000 // Adjust as needed
            },
            {
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                }
            }
        )
        .catch(error => {
            if (error.response && error.response.status === 429 && retryCount < maxRetries) {
                retryCount++;
                const delay = Math.pow(2, retryCount) * 1000; // Exponential backoff
                console.log(`Rate limited. Retrying in ${delay} milliseconds...`);
                return new Promise(resolve => setTimeout(resolve, delay)).then(doRequest);
            } else {
                throw error;
            }
        });
    }

    return doRequest();
}