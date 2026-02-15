import { createContext } from "react";
import type { ProjectsType } from "../../schemas/schemas";

export const GithubContext = createContext([] as ProjectsType);
