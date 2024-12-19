import fetch from 'node-fetch';

// Function to call the REST API
async function callApi() {
    try {
        const response = await fetch('https://n8n-render2.onrender.com/webhook/wakup');
        if (response.ok) {
            const data = await response.json();
            console.log(`[${new Date().toLocaleString()}] API call success:`, data);
        } else {
            throw new Error(`API call failed with status ${response.status}`);
        }
    } catch (error) {
        console.error(`[${new Date().toLocaleString()}] Error calling API:`, error.message);
    }
}

// Call the API immediately and then every 1 minute
callApi(); // Initial call
setInterval(callApi, 60000); // Repeat every 1 minute (60,000 milliseconds)
