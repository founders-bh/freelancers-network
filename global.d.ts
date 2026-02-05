import { Session } from "@auth/core/types";
import type { dbD1 } from "./database/drizzle/db";

declare module "telefunc" {
  namespace Telefunc {
    interface Context {
      db: ReturnType<typeof dbD1>;
    }
  }
}

declare global {
  namespace Vike {
    interface PageContext {
      session?: Session | null;
    }
  }
}

declare global {
  namespace Vike {
    interface PageContextServer {
      db: ReturnType<typeof dbD1>;
    }
  }
}

declare global {
  namespace Vike {
    interface PageContextServer {
      env: Env;
    }
  }
}

export {};
