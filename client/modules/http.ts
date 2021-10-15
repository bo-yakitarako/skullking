/* eslint-disable @typescript-eslint/naming-convention */

type Params = Record<string, string | number | boolean>;

export async function post<Res>(path: string, params?: Params) {
  return http<Res>('POST', path, params);
}

export async function get<Res>(path: string, params?: Params) {
  return http<Res>('GET', path, params);
}

async function http<Res>(
  method: 'GET' | 'POST',
  path: string,
  params?: Params,
) {
  let requestConfig: RequestInit = { method };
  if (method === 'POST') {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    const body = JSON.stringify(params);
    requestConfig = { ...requestConfig, headers, body };
  }
  if (method === 'GET' && typeof params !== 'undefined') {
    const getParams = Object.keys(params).map((key) => `${key}=${params[key]}`);
    if (getParams.length > 0) {
      path += `?${getParams.join('&')}`;
    }
  }
  const fetched = await fetch(path, requestConfig);
  const response: Res & { ok: boolean } = await fetched.json();
  return response;
}
