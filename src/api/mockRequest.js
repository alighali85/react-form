/**
 * 
 * mock http request to the backend, assuming success in this case
 * rej, is not used, can be removed.
 * @param {url} string endpoint url
 * @param {data} object formData
 */

export default function mockRequest({url, data}) {
    return new Promise((res, rej) => {
        console.log('sending data', [...data], 'to' , url)
        setTimeout(res('success'), 2000)
    })
}