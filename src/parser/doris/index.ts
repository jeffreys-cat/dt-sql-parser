import { CharStream, CommonTokenStream, Token } from 'antlr4ng';
import { CandidatesCollection } from 'antlr4-c3';
import { BasicSQL } from '../common/basicSQL';
import { Suggestions, EntityContextType, SyntaxSuggestion } from '../common/types';
import { StmtContextType } from '../common/entityCollector';
import { DorisSplitListener } from './dorisSplitListener';
import { DorisLexer } from '../../lib/doris/DorisLexer';
import { DorisParser, ProgramContext } from '../../lib/doris/DorisParser';
import { DorisEntityCollector } from './dorisEntityCollector';

export { DorisEntityCollector, DorisSplitListener };

export class Doris extends BasicSQL<DorisLexer, ProgramContext, DorisParser> {
    protected createLexerFromCharStream(charStreams: CharStream): DorisLexer {
        return new DorisLexer(charStreams);
    }

    protected createParserFromTokenStream(tokenStream: CommonTokenStream): DorisParser {
        return new DorisParser(tokenStream);
    }

    protected preferredRules: Set<number> = new Set([
        // DorisParser.RULE_data
        // DorisParser.RULE_dbSc, // db or schema name
        // DorisParser.RULE_dbSchemaNameCreate, // db or schema name that will be created
        DorisParser.TABLE,
        DorisParser.CREATE,
        DorisParser.RULE_materializedViewName,
        DorisParser.RULE_functionNameIdentifier,
        DorisParser.RULE_functionCallExpression,
        DorisParser.RULE_functionIdentifier,
        DorisParser.RULE_columnAliases,
        DorisParser.RULE_selectColumnClause,
        // DorisParser.RULE_tableName, // table name
        // DorisParser.RULE_tableNameCreate, // table name that will be created
        // DorisParser.RULE_viewName, // view name
        // DorisParser.RULE_viewNameCreate, // view name that will be created
        // DorisParser.RULE_functionNameForDDL, // function name
        // DorisParser.RULE_functionNameForInvoke, // function name
        // DorisParser.RULE_functionNameCreate, // function name that will be created
        // DorisParser.RULE_columnName,
        // DorisParser.RULE_columnNameCreate,
    ]);

    protected get splitListener() {
        return new DorisSplitListener();
    }

    protected createEntityCollector(input: string, caretTokenIndex?: number) {
        return new DorisEntityCollector(input, caretTokenIndex);
    }

    protected processCandidates(
        candidates: CandidatesCollection,
        allTokens: Token[],
        caretTokenIndex: number,
        tokenIndexOffset: number
    ): Suggestions<Token> {
        const originalSyntaxSuggestions: SyntaxSuggestion<Token>[] = [];
        const keywords: string[] = [];

        for (const candidate of candidates.rules) {
            const [ruleType, candidateRule] = candidate;
            const startTokenIndex = candidateRule.startTokenIndex + tokenIndexOffset;
            const tokenRanges = allTokens.slice(
                startTokenIndex,
                caretTokenIndex + tokenIndexOffset + 1
            );

            let syntaxContextType: EntityContextType | StmtContextType | undefined = void 0;
            switch (ruleType) {
                // case DorisParser.RULE_databaseName: {
                //     syntaxContextType = EntityContextType.DATABASE;
                //     break;
                // }
                // case DorisParser.RULE_databaseNameCreate: {
                //     syntaxContextType = EntityContextType.DATABASE_CREATE;
                //     break;
                // }
                case DorisParser.TABLE: {
                    syntaxContextType = EntityContextType.TABLE;
                    break;
                }
                case DorisParser.CREATE: {
                    syntaxContextType = EntityContextType.TABLE_CREATE;
                    break;
                }
                case DorisParser.RULE_materializedViewName: {
                    syntaxContextType = EntityContextType.VIEW;
                    break;
                }
                case DorisParser.RULE_lateralView: {
                    syntaxContextType = EntityContextType.VIEW_CREATE;
                    break;
                }
                case DorisParser.RULE_functionNameIdentifier: {
                    syntaxContextType = EntityContextType.FUNCTION;
                    break;
                }
                case DorisParser.RULE_functionNameIdentifier: {
                    syntaxContextType = EntityContextType.FUNCTION_CREATE;
                    break;
                }
                case DorisParser.RULE_columnDef: {
                    syntaxContextType = EntityContextType.COLUMN;
                    break;
                }
                // case DorisParser.RULE_columnNameCreate: {
                //     syntaxContextType = EntityContextType.COLUMN_CREATE;
                //     break;
                // }
                default:
                    break;
            }

            if (syntaxContextType) {
                originalSyntaxSuggestions.push({
                    syntaxContextType,
                    wordRanges: tokenRanges,
                });
            }
        }

        for (const candidate of candidates.tokens) {
            const symbolicName = this._parser.vocabulary.getSymbolicName(candidate[0]);
            const displayName = this._parser.vocabulary.getDisplayName(candidate[0]);
            if (displayName && symbolicName && symbolicName.startsWith('KW_')) {
                const keyword =
                    displayName.startsWith("'") && displayName.endsWith("'")
                        ? displayName.slice(1, -1)
                        : displayName;
                keywords.push(keyword);
            }
        }

        return {
            syntax: originalSyntaxSuggestions,
            keywords,
        };
    }
}
