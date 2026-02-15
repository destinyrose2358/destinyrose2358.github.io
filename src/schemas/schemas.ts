import { z } from "zod";

const DefinedProjectSchema = z.object({
    title: z.string()
});

const QueriedProjectSchema = z.object({
    isPrivate: z.boolean(),
    htmlUrl: z.httpUrl(),
    description: z.string(),
    homepage: z.httpUrl(),
    topics: z.array(z.string())
});

const ProjectSchema = DefinedProjectSchema.extend(QueriedProjectSchema.shape);

const ProjectsSchema = z.object({
    projects: z.array(ProjectSchema)
});

const baseSchemas = {
    DefinedProjectSchema,
    ProjectSchema,
    ProjectsSchema
}

export const schemas = Object.fromEntries(
    Object.entries(baseSchemas).map(([name, schema]) => [
        name,
        schema.extend({
            $schema: z.literal(`../../json-schemas/${name}.schema.json`)
        })
    ])
)

export type ProjectType = z.infer<typeof ProjectSchema>;
export type ProjectsType = z.infer<typeof ProjectsSchema>["projects"];
