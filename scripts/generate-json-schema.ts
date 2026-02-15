import { writeFileSync } from "fs";
import { schemas } from "../src/schemas/schemas";

for (const [name, schema] of Object.entries(schemas)) {
    const jsonSchema = schema.toJSONSchema();
    writeFileSync(`json-schemas/${name}.schema.json`, JSON.stringify(jsonSchema, null, 2));
}
