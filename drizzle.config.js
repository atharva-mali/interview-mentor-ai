/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: 'postgresql://interview-mentor-ai_owner:vaxGFLkwBU84@ep-lively-boat-a54xvn2t.us-east-2.aws.neon.tech/interview-mentor-ai?sslmode=require',
  },
};
