interface FetchOpts extends RequestInit{
    queryParams?: any
}

export function fetch2(url, options?:FetchOpts) {
    options = {
        // your default options
        credentials: 'same-origin',
        redirect: 'error',
        ...options,
    };

    if(options.queryParams) {
        url += (url.indexOf('?') === -1 ? '?' : '&') + queryParams(options.queryParams);
        delete options.queryParams;
    }

    return fetch(url, options);
}

function queryParams(params) {
    return Object.keys(params)
        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
        .join('&');
}