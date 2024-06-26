import { httpClient } from "../httpClient";

export interface CompletionParams {
  userId: string;
  projectName: string;
  description: string;
}

export async function Create(params: CompletionParams) {

  const { data } = await httpClient.post('/pitch/create', params);

	return data;
}
