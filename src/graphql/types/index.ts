import {join} from 'path'
import {LoadFilesOptions, loadFilesSync} from "@graphql-tools/load-files";
import {mergeTypeDefs} from "@graphql-tools/merge";

const types = loadFilesSync(join(__dirname, '..', 'common', './'), {
    recursive: true,
    extensions: ['gql']
} as LoadFilesOptions)

export default mergeTypeDefs(types)