// Design Request Manager

// Design a utility which takes URL and a value for attempts which will attempt to make a fetch requst. If on failure it tries again with increasing delay for number of times which user has requested.

const requestManager = (url, options = {}, attempts = 3) => {
    return new Promise((res, rej) => {
        fetch(url, options)
            .then(res)
            .catch(err => {
                const isLastAttempt = attempts === 1;
                if(isLastAttempt) {
                    return rej(err);
                }
                setTimeout(() => {
                    requestManager(url, options, attempts-1)
                        .then(res)
                        .catch(rej);
                }, 3000);
            })
    });
};

requestManager('https://foo.com')
    .then(res => console.log('response', res))
    .catch(err => console.log('Caught error', err));