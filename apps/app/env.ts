import { keys as analytics } from '@cc/analytics/keys';
import { keys as auth } from '@cc/auth/keys';
import { keys as collaboration } from '@cc/collaboration/keys';
import { keys as database } from '@cc/database/keys';
import { keys as email } from '@cc/email/keys';
import { keys as flags } from '@cc/feature-flags/keys';
import { keys as core } from '@cc/next-config/keys';
import { keys as notifications } from '@cc/notifications/keys';
import { keys as observability } from '@cc/observability/keys';
import { keys as security } from '@cc/security/keys';
import { keys as webhooks } from '@cc/webhooks/keys';
import { createEnv } from '@t3-oss/env-nextjs';

export const env = createEnv({
  extends: [
    auth(),
    analytics(),
    collaboration(),
    core(),
    database(),
    email(),
    flags(),
    notifications(),
    observability(),
    security(),
    webhooks(),
  ],
  server: {},
  client: {},
  runtimeEnv: {},
});
