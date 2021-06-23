const fetch = require('node-fetch');
const { MAX_FETCH_TIME } = require('../constants/config');

module.exports = (url, options = { method: 'GET' }, json = true) =>
    new Promise((resolve, reject) => {
        const maxTime = +MAX_FETCH_TIME ?? 4000;

        fetch(url, {
            ...options,
            timeout: maxTime,
        })
            .then((response) => {
                if (response?.status >= 400 && response?.status <= 599) {
                    throw response;
                } else if (json) {
                    return response.json();
                } else {
                    resolve(response);
                }
            })
            .then((data) => {
                if (data) {
                    if (data.error) throw data.error;
                    else resolve(data);
                } else {
                    throw error ?? { message: 'Not Defined' };
                }
            })
            .catch((error) => reject(error));
    });
