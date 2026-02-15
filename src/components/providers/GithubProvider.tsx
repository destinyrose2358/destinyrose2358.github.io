import { useEffect, type PropsWithChildren } from "react";
import { projects } from "../../assets/repos.json";
import { GithubContext } from "../contexts/GithubContext";

export function GithubProvider(
    {
        children
    }: PropsWithChildren
) {

    useEffect(() => {
        if (import.meta.env.DEV) console.log(projects);
    }, [

    ]);

    return <GithubContext.Provider value={projects}>
        { children }
    </GithubContext.Provider>
}
