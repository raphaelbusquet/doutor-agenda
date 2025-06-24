import "dotenv/config";

import { drizzle } from "drizzle-orm/node-postgres";

<<<<<<< HEAD
import * as schema from "./schema";

export const db = drizzle(process.env.DATABASE_URL!, {
  schema,
});
=======
export const db = drizzle(process.env.DATABASE_URL!);
>>>>>>> main
