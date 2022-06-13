import {join} from "path";
import {loadFilesSync} from "@graphql-tools/load-files";
import {mergeResolvers} from "@graphql-tools/merge";

const resolvers = loadFilesSync(join(__dirname, '..', 'common', './**/*.resolvers.*'))

export default mergeResolvers(resolvers)