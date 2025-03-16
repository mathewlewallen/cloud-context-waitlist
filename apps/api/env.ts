import { keys as analytics } from '@cc/analytics/keys';
import { keys as auth } from '@cc/auth/keys';
import { keys as database } from '@cc/database/keys';
import { keys as email } from '@cc/email/keys';
import { keys as core } from '@cc/next-config/keys';
import { keys as observability } from '@cc/observability/keys';
import { keys as payments } from '@cc/payments/keys';
import { createEnv } from '@t3-oss/env-nextjs';

export const env = createEnv({
  extends: [
    auth(),
    analytics(),
    core(),
    database(),
    email(),
    observability(),
    payments(),
  ],
  server: {},
  client: {},
  runtimeEnv: {},
});
