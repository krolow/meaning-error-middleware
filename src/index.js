import { MeaningError } from 'meaning-error';

export default function (err, req, res, next) {
  if (!(err instanceof MeaningError)) {
    return next(err, req, res);
  }

  const data = {
    error_name: err.name,
    error_message: err.message,
    status_code: err.getCode(),
    error: err.getError ? err.getError() : undefined,
  };

  return res
    .status(err.getCode())
    .send(data);
}
