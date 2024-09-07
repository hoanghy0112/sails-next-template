declare interface SailsRequest {
  query: Record<string, string>;
  param: (name: string) => string;
}
declare interface SailsResponse {
  status: (statusCode: number) => SailResponse;
  json: (data: any) => void;
}
