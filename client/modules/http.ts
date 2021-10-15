/* eslint-disable @typescript-eslint/naming-convention */

export async function post<Res, Params>(path: string, params?: Params) {
  return http('POST', path, params) as Promise<Res>;
}

export async function get<Res, Params>(path: string, params?: Params) {
  return http('GET', path, params) as Promise<Res>;
}

async function http<Res, Params>(
  method: 'GET' | 'POST',
  path: string,
  params?: Params,
) {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  const body = JSON.stringify(params);
  const fetched = await fetch(path, { method, headers, body });
  const response: Res = await fetched.json();
  return response;
}
