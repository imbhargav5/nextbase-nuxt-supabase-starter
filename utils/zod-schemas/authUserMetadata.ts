import { z } from 'zod';

export const authUserMetadataSchema = z
  .object({
    onboardingHasAcceptedTerms: z.boolean().default(false),
    onboardingHasCompletedProfile: z.boolean().default(false),
    onboardingHasCreatedOrganization: z.boolean().default(false),
  })
  .passthrough();

export type AuthUserMetadata = z.infer<typeof authUserMetadataSchema>;
