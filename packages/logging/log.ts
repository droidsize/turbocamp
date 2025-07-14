// Optional Logtail integration - falls back to console if not available
let logtail: any;
try {
  logtail = require('@logtail/next').log;
} catch {
  logtail = console;
}

export const log = process.env.NODE_ENV === 'production' ? logtail : console;
