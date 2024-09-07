declare type SailRequest = {
  query: Record<string, string>;
  param: (name: string) => string;
};

declare type SailResponse = {
  status: (statusCode: number) => SailResponse;
  json: (data: any) => void;
};
