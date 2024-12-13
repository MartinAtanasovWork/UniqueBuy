import { ServerResponse, UserError } from "../user";

export function isErrorResponse(response: ServerResponse): response is UserError {
    return (response as UserError).error !== undefined;
}
  