import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  Event: a
    .model({
      name: a.string(),
      date: a.datetime(),
      description: a.string(),
      city: a.string(),
    }),
})
.authorization((allow) => [allow.owner()]);

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "iam",
  },
});
