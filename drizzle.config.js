import { defineConfig } from "drizzle-kit";
 
export default defineConfig({
  schema: "./configs/schema.js",
  out: "./drizzle",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:70wFEICockBm@ep-nameless-glitter-a1iudiwj.ap-southeast-1.aws.neon.tech/forms?sslmode=require',
  }
});